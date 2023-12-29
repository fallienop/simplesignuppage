import React,{useState} from 'react'
import style from './Bottom.module.css'
import googleIcon from '../../googleicon.svg';
const Bottom = () => {

    const buttonClickReverser=()=>{
      
    }
const [isChecked,setIsChecked]=useState(false);
const handleRadioClick=()=>{
 setIsChecked(!isChecked);
}
  return (
    <div className={style.bottomMain}>
      <div className={style.radioButtons}>
      <input onClick={handleRadioClick} checked={isChecked} id="rememberme" type='radio'></input>  
        <label for="rememberme">Remember me</label> 
      </div>
   
    <div className={style.signButtons}>
          <button className={style.accountCreate}>Create account</button>
         
          <button className={style.signwithgoogle}><img className='googleImage' src={googleIcon} /> Sign-in with google</button>
   </div>

   <div className={style.forget}>
      <span>Don’t have an account?</span> <a href="/login">Log In</a>
    </div>
    
    </div>
  )
}

export default Bottom