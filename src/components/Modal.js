import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Modal({ open,onclose }) {

    const navigate = useNavigate();

    const [user, setuser] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })

    const handlechange = (e)=>{
        
        const {name ,value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }

    const register = ()=>{
        const {fname,lname, email, password, cpassword} = user;
        if(fname && lname && email && password && cpassword && (password === cpassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))
        }
        else{
            alert("invalid")
        }
    }

    //if (!open) return null

    
    return (
        <>
        
        <div style={{position:'fixed',left:'0',right:'0',top:'0',bottom:'0',backgroundColor:'rgba(189,189,189,0.5)'}}></div>
        <div >
        {console.log("user",user)}
        <div style={{ backgroundColor: 'transparent', width: '780px',position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)' }}>
            <img src='images/Vectorcross.png' onClick={onclose} role='button' style={{ marginLeft: '47rem' }} />
            <div style={{ border: '1px solid #E0E0E0' ,borderRadius:'8px',backgroundColor:'white'}}>
                <div style={{ fontSize: '14px', color: '#008A45', backgroundColor: '#EFFFF4', height: '2.5rem', paddingTop: '0.5rem', paddingLeft: '2.5rem' }}>
                    <b>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</b>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{fontWeight:'700', fontSize:'24px',marginLeft:'2rem'}}><b>Create Account</b></div>
                    <div style={{fontSize:'13px',color:'#3D3D3D',marginTop:'0.6rem',marginLeft:'13rem'}}>Already have an account?<span style={{fontSize:'13px',color:'#2F6CE5'}}><b><a href='/login' style={{textDecoration:'none'}}> Sign In</a></b></span></div>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{marginLeft:'2rem',marginTop:'1rem'}}>
                    <input type='text' name='fname' value={user.fname} placeholder='First Name' onChange={ handlechange } style={{fontSize:'0.9rem',padding:'0.6rem' ,width:'40%',backgroundColor:'#F7F8FA',border:'1px solid #D9D9DB',borderRadius:'2px 2px 0px 0px'}}/>
                    <input type='text' name='lname' value={user.lname} placeholder='Last Name' onChange={ handlechange } style={{fontSize:'0.9rem',padding:'0.6rem' ,width:'40%',backgroundColor:'#F7F8FA',border:'1px solid #D9D9DB',borderRadius:'2px 2px 0px 0px'}}/><br/>
                    <input type='email' name='email' value={user.email} placeholder='E-mail' onChange={ handlechange } style={{fontSize:'0.9rem',padding:'0.6rem' ,width:'80%',backgroundColor:'#F7F8FA',border:'1px solid #D9D9DB',borderRadius:'2px 2px 0px 0px'}}/><br/>
                    <input type='password' name='password' value={user.password} placeholder='Password' onChange={ handlechange } style={{fontSize:'0.9rem',padding:'0.6rem' ,width:'80%',backgroundColor:'#F7F8FA',border:'1px solid #D9D9DB',borderRadius:'2px 2px 0px 0px'}}/><br/>
                    <input type='password' name='cpassword' value={user.cpassword} placeholder='Confirm Password' onChange={ handlechange } style={{fontSize:'0.9rem',padding:'0.6rem' ,width:'80%',backgroundColor:'#F7F8FA',border:'1px solid #D9D9DB',borderRadius:'2px 2px 0px 0px'}}/><br/>
                    
                    <button style={{color:'white', backgroundColor:'#2F6CE5',borderRadius:'20px',border:'none',width:'80%',marginTop:'1rem',height:'35px'}} onClick={()=>{register();navigate("/login")}} >Create Account</button><br/>
                    <button style={{ backgroundColor:'#FFFFFF',borderRadius:'2px',border:'0.6px solid #D9D9DB',width:'80%',marginTop:'1rem',height:'35px'}}><img src='images/Group 3fb.png' /></button><br/>
                    <button style={{backgroundColor:'#FFFFFF',borderRadius:'2px',border:'0.6px solid #D9D9DB',width:'80%',marginTop:'1rem',height:'35px',marginBottom:'2rem'}}><img src='images/Groupgoogle.png' /></button>
                    </div>
                    <div className='image'>
                    <img src='images/phoneimg.png' />
                    <p style={{fontSize:'11px',fontWeight:'400',marginRight:'2rem'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Modal