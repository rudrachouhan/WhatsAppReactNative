import { View, Text, Image, Pressable, TextInput } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ChatWindow = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <>
      <View className="bg-[#0e806a]" style={{ height: hp(15) }}>
        <SafeAreaView>
          <View className="flex-row justify-between items-center p-3">
            <View className="flex-row justify-between items-center">
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color="white" />
              </Pressable>

              <Image
                source={{ uri: route.params.photo }}
                style={{ height: hp(7), width: hp(7) }}
                className="rounded-full ml-1"
              />
              <Text className="text-white ml-2 font-medium">
                {route.params.name}
              </Text>
            </View>
            <View className="flex-row items-center space-x-5">
              <Ionicons name="videocam" size={24} color="white" />
              <MaterialIcons name="call" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={18} color="white" />
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end" }}
        className="background"
      >
        <View className="flex-row items-center">
          <View className="bg-white rounded-3xl w-[82%] p-3 mb-1 ml-1 flex-row justify-between">
            <View className="flex-row items-center">
              <Fontisto name="smiley" size={24} color="gray" />
              <TextInput placeholder={"Message"} multiline className="ml-2" />
            </View>
            <View className="flex-row items-center space-x-5">
              <Feather name="send" size={24} color="gray" />
              <View className="rounded-full bg-gray-300 p-2">
                <FontAwesome name="rupee" size={15} color="gray" />
              </View>
              <Entypo name="camera" size={24} color="gray" />
            </View>
          </View>
          <View className='w-full ml-1'>
              <Ionicons name="mic-circle" size={56} color="#0e806a" />
          </View>
        </View>
      </View>
    </>
  );
};

export default ChatWindow;
