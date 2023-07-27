import React from "react";

import { ChatIcon } from "@chakra-ui/icons";
import ChatBot from 'react-simple-chatbot';

// 챗봇
// import Notifications from "react-push-notification";
// import NotificationComponent from "./chatbot/NotificationComponent";
// import SimpleChatBox from "./chatbot/SimpleChatBox";
// import SimpleForm from "./chatbot/form/SimpleForm";

// function Chatbot() {
//   return (
//     <div className="Chatbot">
//       {/* <div className="chat-widget"></div> */}

//       {/* 챗봇 위젯 동그라미 버튼 */}
//       <div className="chatbot-widget">
//         <span className="chatbot-icon">
//           <ChatIcon />
//         </span>
//       </div>

//       {/* <Notifications /> */}
//       {/* <NotificationComponent /> */}
//       {/* <SimpleChatBox /> */}
//       {/* <SimpleForm /> */}
//     </div>
//   );
// }

// export default Chatbot;


import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: '안녕하세요 무엇을 도와드릴까요?',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: '동행 구하기', trigger: '2' },
			{ value: 2, label: '동행 취소하기', trigger:'3' },
			{ value: 3, label: '대화 종료', trigger:'4'}

		],

		// This message appears in
		// the bot chat bubble
		// message: 'Please write your username',
		// trigger: '2'
	}, {
		id: '2',
		message: "동행 구하는 방법에 대해 안내드리겠습니다. 블라블라 ",
		// Here we want the user
		// to enter input
		// end: true 종료할꺼면 이거 넣어줘야함 
	}, {
		id: '3',
		message: "동행을 취소하고 싶으신가요? 동행을 취소하시려면",
		trigger: 4
	}, {
		id: '4',
		message: '대화가 종료되었습니다.',
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	floating: true,
};

function Chatbot() {
	return (
		<div className="Chatbot">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="안내 봇"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chatbot;
