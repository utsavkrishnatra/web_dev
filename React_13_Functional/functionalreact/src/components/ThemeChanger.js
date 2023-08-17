import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export let ThemeContext = React.createContext("");

function UcExample(){
    let [theme,setTheme]= React.useState("light");

    const handleTheme =()=>{
        if( theme == "light")
        {
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }

    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={handleTheme}>change theme</button>
            <Navbar/>
            <Footer/>
        </ThemeContext.Provider>
    )
}

export default UcExample;