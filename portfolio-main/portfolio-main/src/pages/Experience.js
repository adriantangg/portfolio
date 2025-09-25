import React from 'react';
import '../styles/Experience.css'; 
import atpco from '../images/atpco.png';
import enerflex from '../images/enerflex.png';
import csss from '../images/csss.png';
import ubcea from '../images/ubcea.png';
import sap from '../images/sap.png'
import interninsider from '../images/interninsider.png'

function Experience({ theme }) {  // Receive the 'theme' as a prop
  const experiences = [
    {
      title: "Logistics",
      company: "Amazon",
      duration: "Sep 2025 - Present",
      description: "Supporting internal tools used by developers to deploy and manage microservices. Gaining hands-on experience with Kubernetes, Docker, and cloud-based systems (AWS/GCP/Azure).",
      logo: sap,
    },
    {
      title: "Operations",
      company: "HelloFresh",
      duration: "Nov. 2023 - Feb. 2025",
      description: "Gained experience in the food delivery industry on the strategy and operations team. Developed modelling tools to fulfil D2C orders at a lower unit cost.",
      logo: interninsider,
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

export default Experience;
