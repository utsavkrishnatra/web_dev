import "./theme.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeChanger";
function Footer(){
    
    return (<>
    
    <div>____________</div>
    <div>Footer</div>
    <div>⬇</div>
    <FooterText/>
    </>)
}

function FooterText(){

    let CTheme = useContext(ThemeContext);
    return (<div className={CTheme =="light"?"light":"dark"}>FooterText</div>)
}

export default Footer;