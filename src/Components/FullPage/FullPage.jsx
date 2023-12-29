import React from 'react';
import leftImg from '../../Left.svg';
import Inputs from '../Input/Input';
import Header from '../Header/Head';
import Bottom from '../Ticks/Bottom';
import style from './FullPage.module.css'
let lbl=['First Name','Last name','Email or phone number','Date of birth (MM/DD/YY)','Password','Confirm password'];
let types=['text','text','email','date','password','password']

const FullPage = () => {
  return (
    <div className={style.container}>
      
  <img draggable="false" src={leftImg} alt="left" />
  <div className={style.main}>
    <Header/>
    <Inputs  lbl={lbl} type={types}/> 
    <Bottom/>
   </div>
  </div>
  )
}

export default FullPage