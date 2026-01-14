import fbIcon from './../assets/Facebook Icon.png'
import TwitIcon from './../assets/Twitter Icon.png'
import gitIcon from './../assets/GitHub Icon.png'
import instaIcon from './../assets/Instagram Icon.png'

export default function Footer(){
    return (
        <footer>
      <img src={TwitIcon} alt='twitter logo'/>
      <img src={fbIcon} alt='facebook logo'/>
      <img src={instaIcon} alt='instagram logo'/>
      <img src={gitIcon} alt='github logo'/>
        </footer>
    )
}