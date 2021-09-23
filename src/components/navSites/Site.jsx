import { useState } from 'react';
import NotLoggedIn from './sites/NotLoggedIn';
import LoggedIn from './sites/LoggedIn';


const Site = () => {

    const [role, setRole]= useState('loggedIn');
    const [user, setUser]= useState('');
    

    function RenderSite(){
        if(role === 'notLoggedIn'){
            console.log('notLoggedIn!');
            return (
                <div id='nlDiv'>
                    <NotLoggedIn user={user} setUser={setUser} role={role} setRole={setRole} />
                </div>
            );
        }
        else{
            console.log('loggedIn');
            return (
                <div>
                    <LoggedIn role={role} setRole={setRole} user={user} setUser={setUser} />
                </div>
            );
        }
    }
    
    return (RenderSite());
}

export default Site;