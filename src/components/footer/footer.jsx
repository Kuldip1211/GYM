import "./footer.css"
import Github from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"; 
function Footer(){
 return(
  <>
  <div className="footer-container">
   <hr />
    <div className="footer">
   <div className="social-links">
   <img src={Github} alt="" />
     <img src={Insta} alt="" />
     <img src={Linkedin} alt="" />
   </div>
   <div className="blur"></div>
   <div className="logo-f">
     <img src={Logo} alt="" />
    </div>
    </div>
    
   </div> 
  </>
 )
}

export default Footer