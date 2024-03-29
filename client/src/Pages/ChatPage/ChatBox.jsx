// import React, { useState, useEffect, useRef } from "react";
// import "../../assets/Style/ChatBox.css";
// import { format } from "timeago.js";
// import InputEmoji from "react-input-emoji";
// import { useNavigate } from "react-router-dom";

// export default function ChatBox({
//   chat,
//   currentUserId,
//   setSendMessage,
//   receiveMessage,
// }) {
//   const [userData, setUserData] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const navigate = useNavigate();

//   const scroll = useRef();
//   const handelChange = async (newMessage) => {
//     setNewMessage(newMessage);
//   };

//   useEffect(() => {
//     if (chat !== null) {
//       fetchMessages(chat._id);
//     }
//   }, [chat]);

//   useEffect(() => {
//     if (chat && currentUserId) {
//       const userId = chat?.members?.find((id) => id !== currentUserId);
//       getUserData(userId);
//     }
//   }, [chat, currentUserId]);

//   const fetchMessages = async (chatId) => {
//     try {
//       let data = await fetch(`api/getMsg/${chatId}`);
//       data = await data.json();
//       //   console.log("messages", data);
//       setMessages(data);
//     } catch (error) {
//       console.log("Internal error: ", error);
//     }
//   };

//   const getUserData = async (userId) => {
//     try {
//       let response = await fetch(`/api/getUser/${userId}`);
//       if (response.ok) {
//         let data = await response.json();

//         setUserData(data.result);
//       } else {
//         console.log("Failed to fetch user data");
//       }
//     } catch (error) {
//       console.log("Internal server error: ", error);
//     }
//   };

//   const handelSend = async (e) => {
//     // e.preventDefault();
//     const message = {
//       senderId: currentUserId,
//       text: newMessage,
//       chatId: chat._id,
//     };

//     //send message to database

//     try {
//       let data = await fetch("/api/addMsg", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(message),
//       });
//       data = await data.json();
//       setMessages([...messages, data]);
//       setNewMessage("");
//     } catch (error) {
//       console.log("sth went wrong: ", error);
//     }
//     //send messsage to socket server

//     const receiverId = chat.members.find((id) => id !== currentUserId);
//     setSendMessage({ ...messages, receiverId: receiverId });
//     // console.log(receiverId);
//   };

//   // ?scroll to the last msg
//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     // console.log("meesage Arrived", receiveMessage);
//     if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
//       setMessages([...messages, receiveMessage]);
//     }
//   }, [receiveMessage, chat]);

//   return (
//     <>
//       <div className="ChatBox-container mt-4">
//         {chat ? (
//           <>
//             <div className="chat-header">
//               {userData && (
//                 <div className="follower">
//                   <div className="flex">
//                     <img
//                       className="followerImage rounded-full"
//                       style={{ width: "50px", height: "50px" }}
//                       src={userData.avatar ? userData.avatar : ImageUrl}
//                       alt=""
//                     />
//                     <div className="name p-2" style={{ fontSize: "0.8rem" }}>
//                       <div>
//                         <span>{userData.firstName}</span>
//                         <span>{userData.lastName}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <hr className="w-[85%] border-solid border-gray-500 mt-2" />
//             </div>

//             <div className="flex flex-col gap-2 p-6 overflow-auto">
//               {messages &&
//                 messages.length > 0 &&
//                 messages.map((message, index) => (
//                   <div
//                     ref={scroll}
//                     key={message._id}
//                     className={`p-4 rounded-[1rem] max-w-[28rem] w-auto flex flex-col gap-2 ${
//                       message.senderId === currentUserId
//                         ? "self-end rounded-[1rem 1rem 0 1rem] bg-gradient-to-b from-blue-400 to-blue-600"
//                         : "bg-blue-500 "
//                     } ${
//                       message.senderId === currentUserId
//                         ? "text-white"
//                         : "text-black"
//                     }`}
//                   >
//                     <span
//                       className={`${
//                         message.senderId === currentUserId ? "text-xs" : ""
//                       }`}
//                     >
//                       {message.text}
//                     </span>
//                     <span className="text-xs">{format(message.createdAt)}</span>
//                   </div>
//                 ))}
//             </div>

//             {/* chat sender */}

//             <div className="chat-sender">
//               <div>+</div>
//               <InputEmoji value={newMessage} onChange={handelChange} />
//               <button
//                 className="send-button bg-slate-700 text-white rounded-lg p-2"
//                 onClick={handelSend}
//               >
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <span>Tap on a Chat to start conversation</span>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "../../assets/Style/ChatBox.css";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { useNavigate } from "react-router-dom";

export default function ChatBox({
  chat,
  currentUserId,
  setSendMessage,
  receiveMessage,
}) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const scroll = useRef();

  useEffect(() => {
    if (chat !== null) {
      fetchMessages(chat._id);
    }
  }, [chat]);

  useEffect(() => {
    if (chat && currentUserId) {
      const userId = chat?.members?.find((id) => id !== currentUserId);
      if (userId) {
        getUserData(userId);
      }
    }
  }, [chat, currentUserId]);

  const fetchMessages = async (chatId) => {
    try {
      let data = await fetch(`api/getMsg/${chatId}`);
      data = await data.json();
      setMessages(data);
    } catch (error) {
      console.log("Internal error: ", error);
    }
  };

  const getUserData = async (userId) => {
    try {
      let response = await fetch(`/api/getUser/${userId}`);
      if (response.ok) {
        let data = await response.json();
        setUserData(data.result);
      } else {
        console.log("Failed to fetch user data");
      }
    } catch (error) {
      console.log("Internal server error: ", error);
    }
  };

  const handelSend = async () => {
    // if (!chat || !currentUserId) return;
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    try {
      let data = await fetch("/api/addMsg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      data = await data.json();
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log("Something went wrong: ", error);
    }

    const receiverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId: receiverId });
  };

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat?._id) {
      setMessages((prevMessages) => [...prevMessages, receiveMessage]);
    }
  }, [receiveMessage, chat]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="ChatBox-container mt-4">
      {chat ? (
        <>
          <div className="chat-header flex items-center">
            {userData && (
              <div className="follower flex items-center">
                <img
                  className="followerImage rounded-full"
                  style={{ width: "50px", height: "50px" }}
                  src={userData.avatar ? userData.avatar : ImageUrl}
                  alt=""
                />
                <div className="name p-2" style={{ fontSize: "0.8rem" }}>
                  <div>
                    <span>{userData.firstName}</span>
                    <span>{userData.lastName}</span>
                  </div>
                </div>
              </div>
            )}
            <hr className="w-5/6 border-solid border-gray-500 mt-2" />
          </div>

          <div className="flex flex-col gap-2 p-6 overflow-auto">
            {messages.map((message, index) => (
              <div
                ref={index === messages.length - 1 ? scroll : null}
                key={index} // Add a unique key here
                className={`p-4 rounded-md max-w-[28rem] w-auto flex flex-col gap-2 ${
                  message.senderId === currentUserId
                    ? "self-end bg-gradient-to-b from-blue-400 to-blue-600 text-white"
                    : "bg-blue-500 text-black"
                }`}
              >
                <span
                  className={`${
                    message.senderId === currentUserId ? "text-xs" : ""
                  }`}
                >
                  {message.text}
                </span>
                <span className="text-xs">{format(message.createdAt)}</span>
              </div>
            ))}
          </div>

          <div className="chat-sender flex items-center">
            <div className="text-2xl">+</div>
            <InputEmoji value={newMessage} onChange={setNewMessage} />
            <button
              className="send-button bg-slate-700 text-white rounded-lg p-2 ml-2"
              onClick={handelSend}
            >
              Send
            </button>
          </div>
        </>
      ) : (
        <span className="text-gray-500">
          Tap on a Chat to start conversation
        </span>
      )}
    </div>
  );
}
