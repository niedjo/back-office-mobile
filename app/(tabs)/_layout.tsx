import { Colors } from '@/constants/Colors';
import images from '@/constants/images';
import { TabIconType } from '@/types';
import { Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

const TabIcon = ({icon, color, name, focused} : TabIconType) => {
  return (
    <View className='flex flex-col justify-center items-center'>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-7 h-7'
      />
      <Text className={focused ? "text-purple" : "text-white"}>
        {name}
      </Text>
    </View>
  )
}

export default function TabLayout() {
  
  return (
    <Tabs 
      // parcequ'on voie home deux fois, on modifie un peu les options
      screenOptions={{
        tabBarShowLabel : false,
        tabBarActiveTintColor : Colors.purple,
        tabBarInactiveTintColor : Colors.white[200],
        tabBarStyle : {
          backgroundColor : Colors.black.DEFAULT,
          borderTopWidth : 1,
          borderTopColor : Colors.black.DEFAULT,
          height : 64
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown : false,
          tabBarIcon : ({ color, focused }) => (
            <TabIcon 
              icon={images.project}
              color={color}
              name={"project"}
              focused={focused}
            />
          )        
        }}
      />
      <Tabs.Screen
        name="comment"
        options={{
          title: 'Comment',
          headerShown : false,
          tabBarIcon : ({ color, focused }) => (
            <TabIcon 
              icon={images.comment}
              color={color}
              name={"comment"}
              focused={focused}
            />
          )         
        }}
      />
      <Tabs.Screen
        name="experiance"
        options={{
          title: 'Experiance',
          headerShown : false,
          tabBarIcon : ({ color, focused }) => (
            <TabIcon 
              icon={images.experiance}
              color={color}
              name={"experiance"}
              focused={focused}
            />
          )         
        }}
      />
    </Tabs>
  );
}
