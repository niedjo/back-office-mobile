import { Text, Button, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const Home = () => {

  return (
    <SafeAreaView className='w-full h-full bg-black-100 justify-center'>
      <View className='h-full flex flex-col justify-around items-center'>
        <View className='h-[30%] flex flex-col justify-between'>
          <Text className="text-3xl text-white text-center">
            Welcome back <Text className='text-purple'>Niedjo kuitche</Text>
          </Text>
          <Text className="text-xl text-white text-center">
            Now, impress your audience by adding something special to your portfolio
          </Text>
        </View>
        <TouchableOpacity 
          className='bg-black-200 p-6 rounded-lg border border-black shadow-black-300'
          onPress={() => router.replace("/(tabs)")}
        >
          <Text className='text-white-200 text-2xl'>Get Started</Text>
        </TouchableOpacity>   
      </View>
    </SafeAreaView>
  )
}

export default Home