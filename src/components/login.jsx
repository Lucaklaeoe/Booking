import { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { useRouteContext, Link, Navigate } from '@tanstack/react-router';

const supabaseUrl = "https://nyxkyrlcppkrsubvkytj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
const supabase = createClient(supabaseUrl, supabaseKey)

const buttonStyle = {
    backgroundColor: "#F59F00",
    marginTop: "40px",
    color: "black",
}
const inputStyle = {
    width: "690px",
    marginTop: "55px",
    color: "#364FC7"
}

function Login() {
    const context = useRouteContext({ from: "/login" });


    // if(localStorage.getItem("token") != null){
    //     console.log("token", localStorage.getItem("token"))
    //     context.setUserInfo(localStorage.getItem("token"))
    //     return(
    //         <div>
    //             <Navigate to="/"></Navigate>
    //         </div>
    //     )
    // }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')

    async function signUpNewUser() {
        //console.log("sending to supabase", email, password);
        const { data, error } = await supabase.auth.signInWithPassword(
            {email: email,password: password,},
        )
        .then()
        //save data in context
        context.setUserInfo(data)
        console.log("data", data)

        //save token in localstorage
        localStorage.setItem("token", JSON.stringify(data))
        //set token for an hour later
        //3600000 == 1 hour
        const gettime = Date.now() + 3000000;
        localStorage.setItem("tokenTime", gettime)

        if(error != null){
            console.log("error", error)
            setemailError(error.message)
            setpasswordError(error.message)
        }
        //when clicked go to home
        window.location.href = "/";
    }
      
    //on logind click
    const handleSignup = (event) => {
        event.preventDefault();
        console.log(email, password);
        signUpNewUser()
    }
    function updatEmail(e){
        setEmail(e.target.value)
        setemailError(null)
    }
    function updatePassword(e){
        setPassword(e.target.value)
        setpasswordError(null)
    }

    //if token is not expired
    if(Date.now() < localStorage.getItem("tokenTime")){
        context.setUserInfo(JSON.parse(localStorage.getItem("token")))
        console.log("token not expired")
        console.log(JSON.parse(localStorage.getItem("token")))
        return(
            <Navigate to="/"></Navigate>
        )
    }
    else{
        console.log("token expired")
    }

    return (
        <div>
            <h1 style={{color: "#364FC7"}}>Login</h1>
            <form>
                <TextInput
                    size="xl"
                    radius="xs"
                    label="Mail"
                    placeholder="cph-business mail"
                    type="text"
                    value={email} onChange={(e) => updatEmail(e)}
                    style={inputStyle}
                    error={emailError}
                    required
                />
                <PasswordInput
                    size="xl"
                    radius="xs"
                    label="Kode"
                    placeholder="Adgangskode"
                    value={password} onChange={(e) => updatePassword(e)}
                    type="password"
                    style={inputStyle}
                    error={passwordError}
                    required
                />
                <Button 
                    type="submit" 
                    onClick={handleSignup} 
                    variant="filled" color="#F08C00" 
                    size="xl" 
                    radius="md" 
                    style={buttonStyle}>LOGIN
                </Button>
            </form>
        </div>
    )
}

export default Login;