import React from 'react';
import '../styles/Experience.css'; 
import csss from '../images/csss.png';
import ubcea from '../images/ubcea.png';
import biztech from '../images/biztech.png';

function CommunityExperience({ theme }) {  // Receive the 'theme' as a prop
  const experiences = [
    {
      title: "Senior Developer",
      company: "BizTech",
      duration: "Feb 2025 - Present",
      description: "Involved with the PC time-tracker project and a Discord bot for",
      logo: biztech,
    },
  ];

  return (
    <section className={`experience-section ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {experiences.map((exp, index) => (
        <div key={index} className={`experience-item ${theme === 'dark' ? 'dark-theme' : ''}`}>
          <div className="experience-header">
            <div class="text-content"> {/* New wrapper with class 'text-content' */}
              <h3 className={theme === 'dark' ? 'dark-theme' : ''}>{exp.title}</h3>
              <p className={`company-name ${theme === 'dark' ? 'dark-theme' : ''}`}>
                {exp.company} | <span className={`duration ${theme === 'dark' ? 'dark-theme' : ''}`}>{exp.duration}</span>
              </p>
              <p className={`description ${theme === 'dark' ? 'dark-theme' : ''}`}>{exp.description}</p>
            </div>  {/* Close the new wrapper */}
            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default CommunityExperience; 
