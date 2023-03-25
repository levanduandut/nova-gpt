import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import "@/index.scss"
import Header from "@/components/myHeader";
import StandardMessageForm from "@/components/myMessageForms/MessageForm"
const Chat = () => {
  const chatProps = useMultiChatLogic(
    "164ca846-3198-42f0-85a9-d9fd6ebf6daa",
    "nova-test",
    "3001"
  );
  return <div className="Chat-div">
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow
        {...chatProps}
        style={{height:"100vh"}}
        renderChatHeader={(chat)=> <Header chat={chat}/>}
        renderMessageForm={(props)=>{
            return(
                <StandardMessageForm props={props} activeChat={chatProps.chat}/>
            )
        }}
    />
  </div>;
};

export default Chat;
