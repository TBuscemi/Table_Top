import { useState } from 'react';
import NotLoggedIn from './sites/NotLoggedIn';
// import LoggedIn from '.site/LoggedIn'


const Site = () => {

    const [role, setRole]= useState('notLoggedIn');
    

    function RenderSite(){
        if(role === 'notLoggedIn'){
            console.log('notLoggedIn!');
            return (
                <div id='nlDiv'>
                    <NotLoggedIn role={role} setRole={setRole} />
                </div>
            );
        }
    }
    
    return (RenderSite());
}

export default Site;