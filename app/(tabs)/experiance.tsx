import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExperianceType, Stack } from '@/types';
import * as ImagePicker from 'expo-image-picker'
import TextField from '@/components/TextField';
import SubmitButton from '@/components/SubmitButton';

const Experiance = () => {
  // we definr the experiance
  const [experiance, setExperiance] = useState<ExperianceType>({
    experianceName: '',
    description: '',
    file: null,
    BearerToken: '',
  });
  // we change or add a label
  const handleChange = (name : string, value : string | Stack[]) => {
   setExperiance((prevState) => ({
       ...prevState,
       [name]: value,
   }));
 };

 // we add or change a file
 const handleFileChange = async () => {
   const result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //  allowsEditing : true,
     aspect: [4, 3],
     quality: 1,
   });
   if (!result.canceled) {
    setExperiance((prevState) => ({
           ...prevState,
           file: result.assets[0],
       }));
    }
 };
 // we sublit our experiance
 async function handleSubmitExperiance() {
   const formData = new FormData();
   const experianceData = experiance
   formData.append('experianceName', experianceData.experianceName);
   formData.append('description', experianceData.description);
   
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (experianceData.file) {
      const localUri = experianceData.file.uri;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename || '');
      const type = match ? `image/${match[1]}` : 'image';

      // Ajout du fichier à FormData
      formData.append('imgUrlOfExperiance', {
        uri: localUri,
        name: filename || 'photo.jpg',
        type,
      } as any);
    }
   
   try {
       const response = await fetch('https://api-niedjo-kuitche.onrender.com/experiance', {
           method: 'POST',
           headers: {
              'Authorization': `Bearer ${experianceData.BearerToken}`
           },
           body: formData
       });

       if (!response.ok) {
           throw new Error(`Erreur HTTP! Statut: ${response.status}`);
       }

       const data = await response.json();
       console.log('Réponse de l\'API:', data);

       Alert.alert("Succes", "Experiance sent succesfuly")
       
      } catch (error) {
       Alert.alert("Chess", "invalid token")
       console.error('Erreur lors de l\'envoi des données:', error);
     }
     finally {
       setExperiance({
         experianceName: '',
         description: '',
         file: null,
         BearerToken: '',
       })
   }
 }

  return (
    <SafeAreaView className='w-full h-full bg-black-100 flex flex-col-reverse justify-center'>
      <ScrollView>
        <View className='h-[70%] flex flex-col justify-between items-center'>
          <Text className='text-3xl text-white text-center underline pb-10'>Add a new <Text className='text-purple'>Experiance</Text></Text>
          <View className='h-full flex flex-col items-center'>
              <TextField 
                label='Experiance Name :'
                type='text'
                value={experiance.experianceName}
                onchange={(value : string) => handleChange('experianceName', value)}
              />
              <TextField 
                label='Description :'
                type='text'
                value={experiance.description}
                onchange={(value : string) => handleChange('description', value)}
              />
              <TextField 
                label='Profile Url :'
                type='file'
                value={experiance.file as ImagePicker.ImagePickerAsset}
                onchange={handleFileChange}
              />
              <TextField 
                label='Bearer Token :'
                type='text'
                value={experiance.BearerToken}
                onchange={(value : string) => handleChange('BearerToken', value)}
              />

              <SubmitButton label="send" submit={handleSubmitExperiance} />
          </View>
        </View>
      </ScrollView>
      <Text>Experiance</Text>
    </SafeAreaView>
  )
}

export default Experiance