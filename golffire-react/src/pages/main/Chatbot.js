import React from "react";
import ChatBox from "./chatbot/ChatBox";

import { ThemeProvider } from "styled-components";

function Chatbot() {
  return (
    <div className="Chatbot">
      <ChatBox />
    </div>
  );
}

export default Chatbot;
