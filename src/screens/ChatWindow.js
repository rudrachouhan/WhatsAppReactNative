import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
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

  const screenHeight = Dimensions.get("window").height;

  const bottomValue = screenHeight * 0.001;

  const messages = [
    { id: 1, content: "Hello! How are you ?", sender: "received" },
    { id: 2, content: "Hi there! I am fine, what about u ?", sender: "sent" },
  ];

  const renderMessage = ({ item }) => (
    <View
      style={
        item.sender === "sent" ? styles.sentMessage : styles.receivedMessage
      }
    >
      <Text style={styles.messageText}>{item.content}</Text>
    </View>
  );

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
      <View style={{ flex: 1 }} className="background">
        <View className="mt-2">
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View
          className="flex-row items-center w-full"
          style={{ position: "absolute", bottom: bottomValue, flex: 1 }}
        >
          <View className="bg-white rounded-3xl w-[82%] p-3 mb-1 ml-1 flex-row justify-between">
            <View className="flex-row items-center">
              <Fontisto name="smiley" size={24} color="gray" />
              <TextInput placeholder={"Message"} multiline className="ml-2" />
            </View>
            <View className="flex-row items-center space-x-5">
              <TouchableOpacity>
                <Feather name="send" size={24} color="gray" />
              </TouchableOpacity>
              <View className="rounded-full bg-gray-300 p-2">
                <FontAwesome name="rupee" size={15} color="gray" />
              </View>
              <Entypo name="camera" size={24} color="gray" />
            </View>
          </View>
          <View className="w-full ml-1">
            <Ionicons name="mic-circle" size={56} color="#0e806a" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  receivedMessage: {
    padding: 12,
    margin: 4,
    borderRadius: 10,
    backgroundColor: "lightblue",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
    marginLeft: 10,
  },
  sentMessage: {
    padding: 12,
    margin: 4,
    borderRadius: 10,
    backgroundColor: "lightgreen",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    color: "black",
  },
});

export default ChatWindow;
