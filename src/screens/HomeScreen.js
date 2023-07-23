import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Navigation from '../../Navigation'

const HomeScreen = () => {
  return (
    <>
    <View className="bg-[#0e806a]" style={{ height: hp(15) }}>
      <SafeAreaView>
        <View className="flex-row justify-between items-center p-5">
          <Text className="text-white text-lg font-semibold">WhatsApp</Text>
          <View className="flex-row items-center space-x-5">
            <Feather name="camera" size={20} color="white" />
            <AntDesign name="search1" size={22} color="white" />
            <Entypo name="dots-three-vertical" size={18} color="white" />
          </View>
        </View>
      </SafeAreaView>
      </View>
      <View style={{flex:1,backgroundColor:'white'}} >
        <Navigation />
      </View>
      </>
  );
};

export default HomeScreen;
