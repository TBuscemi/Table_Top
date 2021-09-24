import { ChatEngine} from 'react-chat-engine'
import LoginAndCreate from './loginAndCreate/LoginAndCreate';
import './Chat.css'



const Chat = ( ) =>{
    if (!localStorage.getItem('username')) return <LoginAndCreate />;
    return (
        <ChatEngine
            height="100vh"
            projectID="bc20eb8f-cb09-48db-80bc-fdb34b544181"
            userName="Mid"   //{localStorage.getItem('username')}
            userSecret="Sweeper124"    //{localStorage.getItem('password')
        />
    );
};


export default Chat;