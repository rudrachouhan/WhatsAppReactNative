import { View, Text, FlatList,Image, ScrollView } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import data from '../data/statusData'

const StatusScreen = () => {
  return (
    
    <View style={{ flex: 1 }}>
      <View className='flex-row items-center p-4'>
        <Image source={{ uri: 'https://picsum.photos/id/24/200/300' }} style={{ width: wp(15), height: wp(15) }} className='rounded-full' />
        <View className='ml-3'>
          <Text className='text-base font-medium'>My Status</Text>
          <Text className='text-gray-400 text-sm'>Tap to add status update</Text>
        </View>
      </View>
      <Text className='ml-4 text-gray-500 text-base font-medium'>Recent updates</Text>
      <FlatList
        data={data.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='flex-row items-center p-3'>
              <Image source={{ uri: item.photo }} style={{ width: wp(15), height: wp(15) }} className='rounded-full' />
        <View className='ml-3'>
              <Text className='text-base font-medium'>{item.name}</Text>
              <Text className='text-gray-400 text-sm'>{item.time}</Text>
        </View>
          </View>
        )}
      />
      <Text className='ml-4 text-gray-500 text-base font-medium'>Viewed updates</Text>
      <FlatList
        data={data.viewedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='flex-row items-center p-3'>
              <Image source={{ uri: item.photo }} style={{ width: wp(15), height: wp(15) }} className='rounded-full' />
        <View className='ml-3'>
              <Text className='text-base font-medium'>{item.name}</Text>
              <Text className='text-gray-400 text-sm'>{item.time}</Text>
        </View>
          </View>
        )}
      />
      </View>
  )
}

export default StatusScreen