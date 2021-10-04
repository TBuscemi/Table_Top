import goblin from './goblin.png';
import  './Footer.css'

const Footer = () => {
  

    return (
        <div >
            <div class="goblinFooter position absolute bottom-0 end-0">
            <img id="goblinImage" src={goblin} alt='no-alt' />
            </div>
        </div> 
     
    )
}



export default Footer;