import React from 'react'
import './Contact.css'
import img_1 from './Images/Contact_Img_1.png'
import img_2 from './Images/Contact_Img_2.png'
import img_3 from './Images/Contact_Img_3.png'

const Contact = () => {
  const handleGmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=kanra.work@gmail.com", "_blank");
  };
  const handleWantedlyClick = () => {
    window.open("https://www.wantedly.com/id/kanra_ishido", "_blank");
  };
  const handleXClick = () => {
    window.open("https://X.com/@KanraNo_Address", "_blank");
  };

  return (
    <div className='Contact'>
      <div className='Contact_Title'>
        <h1>お問い合わせ</h1>
      </div>
      <div className='Contact_Main'>
        <div className='Contact_Main_Items'>
          <div className='Contact_Main_Items_Item'>
            <button onClick={handleGmailClick}>
              <div className='Contact_Main_Items_Item_img'>
                <img src={img_1}></img>
              </div>
              <div className='Contact_Main_Items_Item_text'>
                <p>Gmail</p>
              </div>
            </button>
          </div>
          <div className='Contact_Main_Items_Item'>
            <button onClick={handleWantedlyClick}>
              <div className='Contact_Main_Items_Item_img'>
                <img src={img_2}></img>
              </div>
              <div className='Contact_Main_Items_Item_text'>
                <p>Wantedly</p>
              </div>
            </button>
          </div>
          <div className='Contact_Main_Items_Item'>
            <button onClick={handleXClick}>
              <div className='Contact_Main_Items_Item_img'>
                <img src={img_3}></img>
              </div>
              <div className='Contact_Main_Items_Item_text'>
                <p>X</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact