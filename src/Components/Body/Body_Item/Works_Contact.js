import React from 'react'
import Works from './Works'
import Contact from './Contact'
import './Works_Contact.css'

const Works_Contact = () => {
  return (
    <div className='Works_Contact'>
      <div className='Works_Contact_Bodys'>
        <div className='Works_Contact_Bodys_Body'>
            <Works />
        </div>
        <div className='Works_Contact_Bodys_Body'>
            <Contact />
        </div>
      </div>
    </div>
  )
}

export default Works_Contact