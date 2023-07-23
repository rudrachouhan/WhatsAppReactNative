import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import data from "../data/chatData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Window", {
                name: item.name,
                photo: item.photo,
              })
            }
          >
            <View className="flex-row items-center p-3">
              <View>
                <Image
                  source={{ uri: item.photo }}
                  style={{ width: wp(15), height: wp(15) }}
                  className="rounded-full"
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <View
                  className="flex-row justify-between items-start"
                  style={{ flex: 1 }}
                >
                  <Text className="text-base font-medium ml-3">
                    {item.name}
                  </Text>
                  <Text className="text-gray-500 text-sm">{item.time}</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text
                    numberOfLines={1}
                    className="text-gray-400 text-sm ml-3"
                  >
                    {item.lastMessage}
                  </Text>
                  {item.totalUnreadMessages > 0 && (
                    <View
                      style={{
                        height: hp(3),
                        width: wp(6),
                        backgroundColor: "#25D366",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="rounded-full"
                    >
                      <Text className="text-white font-semibold">
                        {item.totalUnreadMessages}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatScreen;
