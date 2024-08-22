import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubmitButton from '@/components/SubmitButton'
import TextField from '@/components/TextField'
import { CommentType } from '@/types'
import * as ImagePicker from 'expo-image-picker'

const Comment = () => {

  // we define the comment
  const [comment, setComment] = useState<CommentType>({
    peopleName: '',
    peopleWorkstation: '',
    comment: '',
    file: null,
    BearerToken: '',
  });

   // we change or add a label
   const handleChange = (name : string, value : string | Stack[]) => {
    setComment((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  // we add or change a file
  const handleFileChange = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
        setComment((prevState) => ({
            ...prevState,
            file: result.assets[0],
        }));
      }
  };

  // we sublit our comment
  async function handleSubmitComment() {
    const formData = new FormData();
    const commentData = comment
    formData.append('peopleName', commentData.peopleName);
    formData.append('peopleWorkstation', commentData.peopleWorkstation);
    formData.append('comment', commentData.comment);
    
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (commentData.file) {
        formData.append('profileUrl', commentData.file);
    }
    
    try {
        const response = await fetch('https://api-niedjo-kuitche.onrender.com/comment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${commentData.BearerToken}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        console.log('Réponse de l\'API:', data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données:', error);
      }
      finally {
        setComment({
          peopleName: '',
          peopleWorkstation: '',
          comment: '',
          file: null,
          BearerToken: '',
        })

    }
  }

  return (
    <SafeAreaView className='w-full h-full bg-black-100 justify-center'>
      <ScrollView>
        <View className='h-[70%] flex flex-col justify-between items-center'>
          <Text className='text-3xl text-white text-center underline pb-10'>Add a new <Text className='text-purple'>Comment of your work</Text></Text>
          <View className='h-full flex flex-col items-center'>
              <TextField 
                label='People Name :'
                type='text'
                value={comment.peopleName}
                onchange={(value : string) => handleChange('projectName', value)}
              />
              <TextField 
                label='People Workstation :'
                type='text'
                value={comment.peopleWorkstation}
                onchange={(value : string) => handleChange('description', value)}
              />
              <TextField 
                label='Comment :'
                type='textarea'
                value={comment.comment}
                onchange={(value : string) => handleChange('fullDescription', value)}
              />
              
              <TextField 
                label='Profile Url :'
                type='file'
                value={comment.file as ImagePicker.ImagePickerAsset}
                onchange={handleFileChange}
              />
              <TextField 
                label='Bearer Token :'
                type='text'
                value={comment.BearerToken}
                onchange={(value : string) => handleChange('BearerToken', value)}
              />

              <SubmitButton label="send" submit={handleSubmitComment} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Comment