import React, { useEffect, useState } from 'react';
import '../../styles/work.css'
import workData from '../Data/workData.json'

const Work = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(workData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="work-container">
        <div className="header">
          <h1>{data.header.title}</h1>
          <h3>{data.header.description}</h3>
        </div>

        {data.experience.map((experience, index) => (
          <div key={index} className="experience-container">
            <div className="workcity">
              <div className="city">
                {experience.city}
              </div>

              <div className="timeline">
                {experience.timeline}
              </div>
            </div>

            <div className="workplace">
              <h1>{experience.position} <br /> </h1>
              <p>@{experience.company}</p>

              <hr className='text-zinc-600 opacity-65' />
            </div>

            <div className="work-desc">
              {experience.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>

            <div className="work-skills">
              {experience.skills.map((skill, idx) => (
                <div key={idx} className='skill'>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Work;
