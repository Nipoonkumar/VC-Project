import {useEffect, useState} from 'react';
import React from 'react';
// import jw from 'jwt-decode';
import jwtDecode from 'jwt-decode';


const google = window.google;

function Sso(){
    // console.log(google.accounts)

    // const[user,setUser]=useState();
    useEffect(()=>{ 
      
        
        // global google
        google.accounts.id.initialize({
            client_id:"214250890867-6icteu2k2kfamb31020vhda61qfqj3j8.apps.googleusercontent.com",
            callback:handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        );
    },[]);


    function handleCallbackResponse(response){
        console.log("JWT ID Token: " + response.credential);
        var userObject=jwtDecode(response.credential);
        console.log(userObject);
        // setUser(userObject);
    }

  
    return(
        
    <div id="signInDiv"></div>
        
    );
}

export default Sso;
