import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link}>{btnText}</Link>
  </div>
);

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Suman</span>👋
            <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
        text="hello"/>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo