import { useState } from 'react';
import NotLoggedIn from './sites/NotLoggedIn';
// import LoggedIn from '.site/LoggedIn'

const Site = () => {

    const [role, setRole]= useState('NotLoggedIn');
    
    
    function RenderSite(){
        if(role === 'notLoggedIn'){
            console.log('notLoggedIn!');
            return (
                <div>
                    <NotLoggedIn role={role} setRole={setRole} />
                </div>
            );
        }
    }
    
    return (RenderSite());
}

export default Site;