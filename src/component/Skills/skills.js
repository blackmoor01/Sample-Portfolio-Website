import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>WHAT I DO!</span>
        <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS and Javascript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt='UIDseign'/>
                <div className='skillBarText'>
                    <h2>UI/UX DESIGN</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt='WebDesign'/>
                <div className='skillBarText'>
                    <h2>WEBSITE DESIGN</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img className='skillBarImg' src={AppDesign} alt='AppDesign'/>
                <div className='skillBarText'>
                    <h2>APP DESIGN</h2>
                    <p>This is a demo text. You can write your own content here.</p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Skills;