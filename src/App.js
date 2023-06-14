import React, { useState } from "react";
import * as Components from './Components';
function App() {
    const[signIn, toggle] = React.useState(false);
    const[name,setName]=useState("");
    const[email,setMail]=useState("");
    const[phone,setNumber]=useState("");
    const[description,setDesc]=useState("");
    function saveUser()
    {
        console.warn({name,email,phone,description});
        let data = {name,email,phone,description}
        fetch("http://formz.in/api/task",{
            mode:'CORS',
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'form urlencoded'
            },
            body:JSON.stringify(data)
        })  .then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
    } 
    return(          
          <Components.Container>
              <Components.Container1 signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='name' onChange={(e)=>{setName(e.target.value)}} value={name}/>        
                      <Components.Input type='email' placeholder='Email' onChange={(e)=>{setMail(e.target.value)}} value={email}/>
                      <Components.Input type='number' placeholder='Phone Number' onChange={(e)=>{setNumber(e.target.value)}} value={phone}/>
                      <Components.Input type='text' placeholder='Message for Us' onChange={(e)=>{setDesc(e.target.value)}} value={description}/>
                      <Components.Button onClick={saveUser}>Submit Form</Components.Button>
                  </Components.Form>
              </Components.Container1>
              <Components.Container2 signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>About Us</Components.Title>
                       <Components.Paragraph> Offers award-winning creative and marketing services using both traditional and digital/social solutions. From your web presence through reputation management and search engine marketing, we keep your brand on message and on top.
                        </Components.Paragraph>
                   </Components.Form>
              </Components.Container2>
              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>
                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome To The New World!</Components.Title>
                      <Components.Paragraph>
                          To know more about our company Please click on Know more
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Know More
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>
                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel> 
                  </Components.Overlay>
              </Components.OverlayContainer>
          </Components.Container>
    )
}
export default App;