import React from 'react'
import Introduction from './Body_Item/Introduction'
import Future from './Body_Item/Future'
import Skill from './Body_Item/Skill'
import Record from './Body_Item/Record'
import Works_Contact from './Body_Item/Works_Contact'
import './Body.css'

const Body = () => {
  return (
    <div className='Body'>
        <div id='introduction' className='Body_Main'>
            <Introduction />
        </div>
        <div id='future' className='Body_Main'>
            <Future />
        </div>
        <div id='record' className='Body_Main_3'>
            <Record />
        </div>
        <div id='skill' className='Body_Main'>
            <Skill />  
        </div>
        <div id='works_contact' className='Body_Main'>
            <Works_Contact />
        </div>
    </div>
  );
};

export default Body