import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header">
      <div className="Header_Title">
        <h1>My Portfolio</h1>
      </div>

      <nav className="Header_Item">
        <li>
          <p onClick={() => scrollToSection('introduction')}>自己紹介</p>
        </li>
        <li>
          <p onClick={() => scrollToSection('skill')}>スキル</p>
        </li>
        <li>
          <p onClick={() => scrollToSection('record')}>実績</p>
        </li>
        <li>
          <p onClick={() => scrollToSection('works_contact')}>制作物</p>
        </li>
        <li>
          <p onClick={() => scrollToSection('works_contact')}>お問い合わせ</p>
        </li>
      </nav>
    </div>
  );
};

export default Header