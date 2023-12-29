  import React, { useEffect } from 'react'
  import style from './Input.module.css';
  const Input = ({ lbl, type }) => {
    useEffect(() => {
      // This runs after the component has been rendered
      let dateInput = document.querySelector("input[type='date']");
      if (dateInput) {
        dateInput.valueAsDate = new Date();
      }
    
    }, []);
   

    return (
      <div className={style.main}>
        {lbl.map((label, index) => (
          <div key={index} className={style.inp}>
            <label>{label}</label>
            <input type={type[index]} required/> 
          </div>
        ))}
      </div>
    );
  };

  export default Input


