import React, { useState, useEffect } from 'react';
import './Work.css';

function Work() {
  const [activeSteps, setActiveSteps] = useState([1]);

  const handleStepChange = () => {
    setActiveSteps((prevActiveSteps) => {
      if (prevActiveSteps.length === 3) {
        // If all steps are active, reset to step 1
        return [1];
      } else {
        // Otherwise, add the next step to the active steps list
        const nextStep = prevActiveSteps[prevActiveSteps.length - 1] + 1;
        return [...prevActiveSteps, nextStep];
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(handleStepChange, 6000);
    return () => clearInterval(intervalId);
  }, [activeSteps]);

  return (
    <div className='work'>
      <div className='leftside'>
      <div className='hand'>
            <img src='/work/mobile.png' />
            </div>
        <div className='mobileimg'>
          {/* Show the previous image if not on step 1 */}
          {activeSteps&&<img src={`/work/mobile${activeSteps.length}.png`} />}
        </div>
      </div>

      <div className='rightside'>
        <div className='steps'>
          {/* Add the 'active' class to all steps that are active */}
          <div className={`step1 ${activeSteps.includes(1) ? 'active' : ''}`}>
            <img src='/work/download.png' />
          </div>
          <div className={`step2 ${activeSteps.includes(2) ? 'active' : ''}`}>
            <img src='/work/donate.png' />
          </div>
          <div className={`step3 ${activeSteps.includes(3) ? 'active' : ''}`}>
            <img src='/work/reward.png' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
