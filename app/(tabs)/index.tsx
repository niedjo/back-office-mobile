import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProjectType, Stack } from '@/types';
import TextField from '@/components/TextField';
import * as ImagePicker from 'expo-image-picker'
import SubmitButton from '@/components/SubmitButton';
import { ImagePickerAsset } from "expo-image-picker";


const Project = () => {

  // we define the stack
  const [stack, setStack] = useState<Stack[]>([])
  
  // we definr the project
  const [projet, setProjet] = useState<ProjectType>({
    projectName: '',
    description: '',
    fullDescription: '',
    technologie: stack,
    urlOfSite: '',
    demoUrl: '',
    file: null,
    BearerToken: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState();

  // we change or add a label
  const handleChange = (name : string, value : string | Stack[]) => {
    setProjet((prevState) => ({
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
        setProjet((prevState) => ({
            ...prevState,
            file: result.assets[0],
        }));
      }
  };
  
  // we add stacks
  const ajouter = (value : string) => {
    
    let id : number = new Date().getTime();
    let st : string = value;
    const newSt = {id, st}
    
    const new_stack_state = stack.slice()

    new_stack_state.push(newSt)
    setStack(new_stack_state)
    setProjet((prevState) => ({
        ...prevState,
        technologie: new_stack_state,
    }));
  }

  // we sublit our project
  async function handleSubmitProject() {
    const formData = new FormData();
    const project = projet
    formData.append('projectName', project.projectName);
    formData.append('description', project.description);
    formData.append('fullDescription', project.fullDescription);
    // we format the technologies
    const technologieArray = project.technologie.map(t => t.st);
    formData.append('technologie', JSON.stringify(technologieArray));
    formData.append('urlOfSite', project.urlOfSite);
    formData.append('demoUrl', project.demoUrl);
    
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (project.file) {
        formData.append('imgUrlOfProjet', project.file);
    }
    
    try {
        const response = await fetch('https://api-niedjo-kuitche.onrender.com/projet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${project.BearerToken}`
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
        setProjet({
          projectName: '',
          description: '',
          fullDescription: '',
          technologie: stack,
          urlOfSite: '',
          demoUrl: '',
          file: null,
          BearerToken: '',
        })
        setStack([])
    }
}
  return (
    <SafeAreaView className='w-full h-full bg-black-100 justify-center'>
      <ScrollView>
        <View className='h-[70%] flex flex-col justify-between items-center'>
          <Text className='text-3xl text-white text-center underline pb-10'>Add a new impressive <Text className='text-purple'>Project</Text></Text>
          <View className='h-full flex flex-col items-center'>
            <TextField 
              label='Project Name :'
              type='text'
              value={projet.projectName}
              onchange={(value : string) => handleChange('projectName', value)}
            />
            <TextField 
              label='Description :'
              type='text'
              value={projet.description}
              onchange={(value : string) => handleChange('description', value)}
            />
            <TextField 
              label='Full Description :'
              type='textarea'
              value={projet.fullDescription}
              onchange={(value : string) => handleChange('fullDescription', value)}
            />
            <TextField 
              label='Stack :'
              type='select'
              value={projet.technologie}
              onchange={(value : string) => ajouter(value)}
            />
            <TextField 
              label='Url Of Website :'
              type='text'
              value={projet.urlOfSite}
              onchange={(value : string) => handleChange('urlOfSite', value)}
            />
            <TextField 
              label='DemoUrl :'
              type='text'
              value={projet.demoUrl}
              onchange={(value : string) => handleChange('demoUrl', value)}
            />
            <TextField 
              label='Project image :'
              type='file'
              value={projet.file as ImagePickerAsset}
              onchange={handleFileChange}
            />
            <TextField 
              label='Bearer Token :'
              type='text'
              value={projet.BearerToken}
              onchange={(value : string) => handleChange('BearerToken', value)}
            />

            <SubmitButton label="send" submit={handleSubmitProject} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Project