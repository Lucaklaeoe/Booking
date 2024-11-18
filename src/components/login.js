import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lxlvmpbsqfiqjdurdwig.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bHZtcGJzcWZpcWpkdXJkd2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NTMsImV4cCI6MjA0NzA3ODg1M30.EIRPhE0e2_0Azy6vT1YihblhqaFf9tU4DDvA3hQAW5k"
const supabase = createClient(supabaseUrl, supabaseKey)

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
      }
      
    const handleSignup = (event) => {
        event.preventDefault();
        console.log(email, password);
        signUpNewUser();
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button type="submit" onClick={handleSignup}>Login</button>
            </form>
        </div>
    )
}

export default Login;