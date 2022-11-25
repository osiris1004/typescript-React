import { type } from "@testing-library/user-event/dist/type";
import React, { Children, ReactElement, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Exo } from "./Exos";


type TRouting = {
  children: ReactElement;
};
export const Routing = ({ children }: TRouting) => {
  return (
    <Router>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connected/:user" element={<Exo/>} />
      </Routes>
    </Router>
  );
};

export const Home = () => {
    const navigate = useNavigate()
  return (
 <div>
     <div>Welcome you need to login</div>
        <button onClick={()=>navigate("/login") }> Login</button>
 </div>
  );
};

export const fakeDataUser = {
    email : "1",
    pass : "1"
}

const Login = () =>{
  
    const navigate = useNavigate()
    const [email, setEmail] = useState<string | undefined>()
    const [pass, setPass] = useState<string | undefined>()
    return(
        <div>
            <div>login to your account </div>
            <div>
                <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <input placeholder="pass" onChange={(e)=>setPass(e.target.value)}></input>
            </div>

            <div>
                <button onClick={()=>{
                    const chekeInfo = {email : email, pass : pass}
                    if(chekeInfo.email === fakeDataUser.email && chekeInfo.pass === fakeDataUser.pass){
                        navigate(`/connected/${chekeInfo.email}`) 
                    }else{
                        alert("wrong credential ")
                    }

                    
                }}> connection</button>
            </div>
        </div>
    )
}

const List = () => {
  return <div>list</div>;
};
