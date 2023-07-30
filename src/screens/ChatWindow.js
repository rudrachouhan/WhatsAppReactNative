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
import React, { useEffect, useState } from "react";
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
import { sortedId } from "../lib";
import { io } from "socket.io-client";

const ChatWindow = () => {
  const socket = io('http://192.168.43.204:5000')
  
  const senderId = 'abc'
  const receiverId = 'xyz'
  
  const [messages, setMessages] = useState([])
  
  
  useEffect(() => {
    fetch(`http://192.168.43.204:5000/chat/${sortedId(senderId, receiverId)}s`).then((data) => {
      return data.json().then((data)=>{
        setMessages(data)
      })
    })
  }, [])

  socket.on('receive message', ({message, sender}) => {
    setMessages([...messages, { id: messages.length + 1, message: message, sender: sender }])
  })
  
  const [messageInput, setMessageInput] = useState('')

  const route = useRoute();
  const navigation = useNavigation();

  const screenHeight = Dimensions.get("window").height;
  const bottomValue = screenHeight * 0.001;

  const renderMessage = ({ item }) => (
    <View
      style={
        item.sender === senderId ? styles.sentMessage : styles.receivedMessage
      }
    >
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );

  const handleSend = async () => {
    setMessages([...messages, { id: messages.length + 1, message: messageInput, sender: senderId }])
    socket.emit('send message', {message: messageInput, sender: senderId})
    try {
        await fetch('http://192.168.43.204:5000/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          message: messageInput
        }),
        })
        setMessageInput('')
    } catch (error) {
      console.log(error)
    }
  }


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
              <TextInput
                placeholder={"Message"}
                multiline className="ml-2"
                onChangeText={setMessageInput}
                value={messageInput}
              />
            </View>
            <View className="flex-row items-center space-x-5">
              <TouchableOpacity onPress={handleSend}>
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
