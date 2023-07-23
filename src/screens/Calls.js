import { View, Text, ScrollView, Image,FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import data from "../data/chatData";
import { MaterialIcons } from '@expo/vector-icons';

const Calls = () => {
  return (
      <View style={{ flex: 1 }}>
        <View className="flex-row items-center p-4">
          <View
            className="bg-[#0e806a] rounded-full items-center justify-center font-bold"
            style={{ width: wp(15), height: wp(15) }}
          >
            <AntDesign name="link" size={28} color="white" />
          </View>

          <View className="ml-3">
            <Text className="text-base font-medium">Create call link</Text>
            <Text className="text-gray-400 text-sm">
              Share a link for your Whatsapp Call
            </Text>
          </View>
        </View>
        <Text className='ml-4 text-gray-500 text-base font-medium'>Recent</Text>
        <FlatList
        data={data.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='flex-row items-center p-3'>
              <Image source={{ uri: item.photo }} style={{ width: wp(15), height: wp(15) }} className='rounded-full' />
            <View className='ml-3 flex-row justify-between flex-1 items-center'>
              <View>
              <Text className='text-base font-medium'>{item.name}</Text>
              <Text className='text-gray-400 text-sm'><MaterialIcons name="call-received" size={15} color="darkgreen" /> {item.time}</Text>
              </View>
              <View>
              <MaterialIcons name="call" size={24} color="darkgreen" />
              </View>
              
        </View>
          </View>
        )}
      />
      </View>
  );
};

export default Calls;
