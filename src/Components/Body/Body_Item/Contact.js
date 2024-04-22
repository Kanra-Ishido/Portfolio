import React from 'react'
import './Contact.css'

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
    <div color='Contact'>
      <div className='Contact_Title'>
        <h1>お問い合わせ</h1>
      </div>
      <div className='Contact_Main'>
        <div className='Contact_Main_Item'>
          <button onClick={handleGmailClick}>
            Gmail<br />
            kanra.work[At]gmail.com
          </button>
        </div>
        <div className='Contact_Main_Item'>
          <button onClick={handleWantedlyClick}>
            Wantedly<br />
            https://www.wantedly.com/[Id]/kanra_ishido
          </button>
        </div>
        <div className='Contact_Main_Item'>
          <button onClick={handleXClick}>
            X<br />
            https://X.com/[At]KanraNo_Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact