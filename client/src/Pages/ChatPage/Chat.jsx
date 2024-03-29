import React, { useEffect, useRef, useState } from "react";
import "../../assets/Style/Chat.css";
import { useSelector } from "react-redux";
import Conversation from "../../Components/Conversation";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
export default function Chat() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const user = currentUser.result;
  //   console.log("user", user);
  const [currentChat, setCurrentChat] = useState(null);
  //   console.log("currentChat", currentChat);
  const [onlineUsers, setOnlineUsers] = useState([]);
  // console.log("ss", onlineUsers);

  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);

  const socket = useRef();
  //send message to socket server

  //send message to the socket server
  useEffect(() => {
    getChats();
  }, [user._id]);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      // console.log("users", users);
      setOnlineUsers(users);
    });

    // return () => {
    //   socket.current.disconnect();
    // };
  }, [user]);

  ///recerive msg to the socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      // console.log("message received", data);
      setReceiveMessage(data);
    });
  }, []);

  const getChats = async () => {
    try {
      let data = await fetch(`/api/getChat/${user._id}`);
      data = await data.json();
      setChats(data);
      //   console.log(data);
    } catch (error) {
      console.log("sth went to wrong", error);
    }
  };

  const checkOnlineStatus = (chat) => {
    const chatMembers = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    return online ? true : false;
  };

  return (
    <>
      <div className="Chat ">
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2 className="font-semibold text-2xl">Chats</h2>
            <div className="Chat-list">
              {chats.map((chat) => (
                <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                  <Conversation
                    data={chat}
                    currentUserId={user._id}
                    online={checkOnlineStatus(chat)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="Right-side-chat">
          <div className="">
            {/* Chat body} */}
            {currentChat ? (
              <ChatBox
                chat={currentChat}
                currentUserId={user._id}
                setSendMessage={setSendMessage}
                receiveMessage={receiveMessage}
              />
            ) : (
              <h1 className=" mt-20 font-semibold text-4xl text-center">
                No chat selected
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
