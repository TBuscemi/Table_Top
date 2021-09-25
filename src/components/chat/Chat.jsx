import { ChatEngine} from 'react-chat-engine'
import LoginChat from "./loginChat/LoginChat"
import './Chat.css'
// import RegisterChat from './registerChat/RegisterChat';



const Chat = ( ) =>{
    if (!localStorage.getItem('username')) return <LoginChat />;
    return (
        <ChatEngine
            height="100vh"
            projectID="bc20eb8f-cb09-48db-80bc-fdb34b544181"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
        />
    );
};


export default Chat;