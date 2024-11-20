import { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { useRouteContext } from "@tanstack/react-router";


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
    context.setUserInfo("yess");
    console.log(context)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function signUpNewUser() {
        console.log("sending to supabase", email, password);
        const { data, error } = await supabase.auth.signInWithPassword(
            {email: email,password: password,},
        //   options: {
        //     emailRedirectTo: 'https://example.com/welcome',
        //   },
        )

        console.log("data", data)

        console.log("error", error)
        setError(error.message)
        
      }
      
    const handleSignup = (event) => {
        event.preventDefault();
        console.log(email, password);
        signUpNewUser();
    }
    function updatEmail(e){

        setEmail(e.target.value)
        setError(null)
    }
    function updatePassword(e){
        setPassword(e.target.value)
        setError(null)
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
                error={error}
            />
            <PasswordInput
                size="xl"
                radius="xs"
                label="Adgangskode"
                placeholder="Adgangskode"
                value={password} onChange={(e) => updatePassword(e)}
                type="password"
                style={inputStyle}
                error={error}
            />
            <Button 
                type="submit" 
                onClick={handleSignup} 
                variant="filled" color="#F08C00" 
                size="xl" 
                radius="md" 
                style={buttonStyle}>LOGIN</Button>
            </form>
        </div>
    )
}

export default Login;