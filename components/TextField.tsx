import { FormFieldType } from '@/types'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const TextField = ({ label, type, value, onchange} : FormFieldType) => {

    
    if (type === "textarea") {
        return (
            <View className='flex flex-col justify-between items-start space-y-6 pt-3'>
                <Text className='text-white text-xl'>{label}</Text>
                <TextInput 
                    className='w-72 h-20 bg-black text-white rounded-lg pl-2'
                    value={value as string} 
                    onChangeText={onchange}
                />
            </View>
        )
    }
    else if (type === "file") {
        return (
            <View className='flex flex-col justify-between items-start space-y-6 pt-3'>
                {   
                    !value ?
                    <TouchableOpacity 
                        className='w-72 h-12 bg-black-200 flex justify-center rounded-full pl-2'
                        onPress={onchange as () => void}
                    >
                        <Text className='text-white text-xl text-center'>{label}</Text>
                    </TouchableOpacity>
                    :
                    <Image source={{ uri : value.uri }} width={200} height={200} resizeMode='contain'/>

                }
            </View>
        )
    }
    else if (type === 'select') {
        // we format the value of value
        const selectValue = Array.isArray(value) 
        ? value.map(v => v.st).join(', ') // Transformer en chaîne de caractères
        : value;
        return (
            <View>
                <View className='flex flex-row items-center gap-2 flex-wrap w-full py-4'>
                    {
                        Array.isArray(value) && value.map(st => (
                            <Text key={st.id} className='text-white-100'>{st.st}</Text>
                        ))
                    }
                </View>
                <View className='flex flex-col justify-between items-start space-y-6 pt-3 w-[280px]'>
                    <Text className='text-white text-xl'>{label}</Text>  
                    <View className="w-72 h-12 bg-white text-white rounded-lg pl-2">
                        <RNPickerSelect
                            onValueChange={onchange}
                            items={[
                                { label: 'React Native', value: 'react native' },
                                { label: 'React js', value: 'react js' },
                                { label: 'Next js', value: 'next js' },
                                { label: 'Node js', value: 'node js' },
                            ]}
                        />
                    </View>
                </View>
            </View>
        )   
    }
    else {
        return (
            <View className='flex flex-col justify-between items-start space-y-6 pt-3'>
                <Text className='text-white text-xl'>{label}</Text>
                <TextInput 
                    className='w-72 h-12 bg-black text-white rounded-lg pl-2'
                    value={value as string} 
                    onChangeText={onchange}
                />
            </View>
        )
    }
}

export default TextField