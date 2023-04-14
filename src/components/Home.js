import React from 'react'
import '../styles/Home.css'
import dashboard from '../Assets/dashboard.png'
function Home() {
  return (
    <div className='home_main_container'>
        <div className='home_button'>
            <p>Just Launched Ghost 3.0</p>
        </div>
        <div className='home_heading'>
            <p>Turn Your Audience<br/><span className='business'> into a bussiness</span> </p>
        </div>
        <div className='home_background'></div>
        <div className='home_image'>
            <img src={dashboard}/>
        </div>
    </div>
  )
}

export default Home;