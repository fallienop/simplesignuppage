import React,{useState} from 'react'
import style from './Bottom.module.css'
import googleIcon from '../../googleicon.svg';
const Bottom = () => {

    const handleRegister=()=>{
      let passwordInputs = document.querySelectorAll("input[type='password']");
  passwordInputs.forEach(passwordInput=>{
    let password=passwordInput.value;
     if(password!=""&&password.length<8){
      passwordInput.setCustomValidity('at least 8')
      passwordInput.reportValidity();
     }
     if(password!=""&&(password==password.toLowerCase())){
      passwordInput.setCustomValidity('at least one uppercase')
      passwordInput.reportValidity();
     }
     let matches = password.match(/\d+/g);
     if (password!=""&& matches == null) {
      passwordInput.setCustomValidity('at least one number')
      passwordInput.reportValidity();
     }

    })  

    if(passwordInputs[0].value!=passwordInputs[1].value){
      passwordInputs[0].setCustomValidity('passwords doesn\'t match')
      passwordInputs[0].reportValidity();
   
    }
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
      let emailInput = document.querySelector("input[type='email']");  
     if(!validateEmail(emailInput.value)){
      emailInput.setCustomValidity('email is not valid')
      emailInput.reportValidity();
     }
    }

const [isChecked,setIsChecked]=useState(false);
const handleRadioClick=()=>{
 setIsChecked(!isChecked);
}
  return (
    <div className={style.bottomMain}>
      <div className={style.radioButtons}>
      <input onChange={handleRadioClick} checked={isChecked} id="rememberme" type='radio'></input>  
        <label htmlFor="rememberme">Remember me</label> 
      </div>
   
    <div className={style.signButtons}>
          <button onClick={handleRegister} className={style.accountCreate}>Create account</button>
         
          <button className={style.signwithgoogle}><img className='googleImage' src={googleIcon} /> Sign-in with google</button>
   </div>

   <div className={style.forget}>
      <span>Don’t have an account?</span> <a href="/login">Log In</a>
    </div>
    
    </div>
  )
}

export default Bottom