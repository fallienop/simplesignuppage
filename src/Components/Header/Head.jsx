import React from 'react'
import style from './Head.module.css'
import headLogo from '../../siteLogo.svg';
const Head = () => {
  return (
    <div className={style.main}>
     
      <div className={style.topofpage}>
          <img src={headLogo} alt="" />
          <h2>Capzul</h2>
       </div>

      <div className={style.pageInfo}>
         <h1>Create account</h1>
         <p>For business, band or celebrity.</p>
      </div>

    </div>
  )
}

export default Head