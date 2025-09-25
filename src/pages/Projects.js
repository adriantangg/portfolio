import React, { useState } from 'react';
import '../styles/Projects.css';
import databaseproject from '../images/databaseproject.png';
import panini1 from '../images/panini1.png';
import panini2 from '../images/panini2.png';
import pandapic from '../images/pandaz.png';
import panda2 from '../images/panda2.png';
import websitepic from '../images/website.png';
import aboutme from '../images/aboutme.png';
import db1 from '../images/db1.png';
import db2 from '../images/db2.png';
import poker from '../images/poker.jpg';
import poker1 from '../images/poker1.png';
import quack1 from '../images/quack1.png';
import quack2 from '../images/quack2.png';
import nerve1 from '../images/nerve1.png';
import nerve2 from '../images/nerve2.png';



function Projects() {
  const [selectedTab, setSelectedTab] = useState('ProVestia');
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  const renderContent = () => {
    <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    switch (selectedTab) {
      case 'ProVestia':
      return (
        <div className="text-image-container">
          <div className="text-content">
            <h2>Nerve</h2>
            <p className="brief-description">Property Tech Startup</p>
            <br></br>
            <p>
              I teamed up with 4 unimelbs students and together we built <strong>ProVestia</strong>, 
            </p>
            <br></br>
            <p>
              This project placed <strong>top 10</strong> in the Startmate Student Fellowship. I got to dive deep into full-stack dev and work with data ingestion, AI, and real-time sockets, all within 2 weeks.
            </p>
            <br></br>
            <p>
              <a href="https://devpost.com/software/nerve-1vlr0m">Devpost</a>
            </p>
            <br></br>
            <ul className="tech-stack">
              <li>Next.js</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>TailwindCSS</li>
              <li>Mapbox</li>
              <li>Socket.IO</li>
              <li>TensorFlow</li>
              <li>AssemblyAI</li>
              <li>OpenAI API</li>
              <li>Supabase</li>
              <li>ngrok</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={nerve1} alt="provestia dashboard" />
            <img src={nerve2} alt="provestia demo gif or image" />
          </div>
        </div>
      );
      case 'This Website':
        return (
            <div className="text-image-container">
                <div className="text-content">
                    <h2>This Website</h2>
                    <p className="brief-description">Personal Portfolio Project + Blog</p>
                    <br></br>
                    <p>As a long time admirer of Tobin Tang - I've been influenced by his push for public creation. This inspired me to build a personal portoflio site to document my journey as a developer. I used this as an opportunity to learn about deploying a site via Gatsby and how it handles static site generation, customising React components, and making everything mobile responsive.</p>
                    <br></br>
                    <ul className="tech-stack">
                        <li>Gatsby</li>
                        <li>React</li>
                        <li>GraphQL</li>
                        <li>JavaScript</li>
                        <li>Contentful</li>
                    </ul>
                </div>
                <div className="image-stack">
                    <img src={websitepic} alt="website pic" />
                    <img src={aboutme} alt="about me pic" />
                </div>
            </div>
        );
        case 'Lotus (eToro clone)':
          return (
              <div className="text-image-container">
                  <div className="text-content">
                      <h2>Lotus</h2>
                      <p className="brief-description">Academic Project (Relational Databases)</p>
                      <br></br>
                      <p>I built a social media investing app (concenptually like eToro) with SQL, PHP and Oracle for the purpose of learning databases. I gained exporsure to different ER models, database system designs, and different types of data normalisation during this process.</p>
                      <br></br>
                      <ul className="tech-stack">
                          <li>React</li>
                          <li>JavaScript</li>
                          <li>OpenAI</li>
                          <li>Material UI</li>
                      </ul>
                  </div>
                  <div className="image-stack">
                    <img src={panini1} alt="website pic" />
                    <img src={panini2} alt="about me pic" />
                  </div>
              </div
        );

         
        default:
            return null;
    }
};


  return (
    <div className="tabbed-interface">
      <div className="tabs">
        <div className={selectedTab === 'ProVestia' ? 'active-tab' : ''} onClick={() => setSelectedTab('ProVestia')}>
          ProVestia
        </div>
        <div className={selectedTab === 'This Website' ? 'active-tab' : ''} onClick={() => setSelectedTab('This Website')}>
          This Website
        </div>
        <div className={selectedTab === 'Lotus (eToro Clone)' ? 'active-tab' : ''} onClick={() => setSelectedTab('Lotus (eToro Clone)')}>
          LinkedIn Clone
        </div>
      </div>
      
        {renderContent()}
      
    </div>
  );
}

export default Projects;
