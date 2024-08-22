import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubmitButton = ({ label, submit } : { label : string, submit : () => void }) => {
  return (
    <TouchableOpacity
        className='p-4 bg-black-200 rounded-md items-center w-72 m-3'
        onPress={submit}
    >
        <Text className='text-white-200 text-xl'>{label}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton