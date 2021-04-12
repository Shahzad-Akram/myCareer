import React from 'react'
import PremiumImage from '../../assets/images/plan/Premium.jpg'
import {ReactComponent as IconOne } from '../../assets/images/icons/book.svg'
import {ReactComponent as IconTwo } from '../../assets/images/icons/video.svg' 
import {ReactComponent as IconThree } from '../../assets/images/icons/user-time.svg' 
import {ReactComponent as IconFour } from '../../assets/images/icons/user-dollar.svg'  
import {ReactComponent as IconFive } from '../../assets/images/icons/upload.svg'  



const PlanSection = () => {

const dataArr = [
    {iconColOne:<IconOne/>, 
        boxClassNameColOne: 'bg-white py-2 px-4',
        boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
    titleColOne: 
    `Personal Strengths & Career   
     Development Assessment:`, 
     titleClassNameColOne: 'font-weight-bold text-info pre-line',},
     {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'CAPS™ Asssessment Premium Report',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light', 
        itemColTwo: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
        itemColThree: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
        itemColFour: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
      },
      {
        boxClassNameColOne: 'bg-white py-3 px-4',titleColOne: 'CAPS™ Videos',
        boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
        itemColTwo: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
        itemColThree: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
        itemColFour: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
      },
      {iconColOne:<IconTwo/>, 
        boxClassNameColOne: 'bg-white py-2 px-4',
        boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
    titleColOne: 
    `Coaching Video Topics for
    Universities Interview:`, 
     titleClassNameColOne: 'font-weight-bold text-info pre-line',},
     {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'Self-Awareness & Personal Strengths',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light',  
        itemColTwo: '3 Questions',
        itemColThree: '3 Questions',
        itemColFour: '3 Questions',
      }, 
      {
        boxClassNameColOne: 'bg-white py-3 px-4',titleColOne: 'Core Values & Goal Setting',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',   
        itemColTwo: '-',
        itemColThree: '7 Questions',
        itemColFour: '7 Questions',
      },
      {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'Others Common Interview Questions',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light',  
        itemColTwo: '-',
        itemColThree: '-',
        itemColFour: '5 Questions',
      },   
      {
        boxClassNameColOne: 'bg-white py-3 px-4',titleColOne: 'Relating to Group Interview Questions',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',   
        itemColTwo: '-',
        itemColThree: '-',
        itemColFour: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
      },
      {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'Relating to Overseas Study Questions',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light',  
        itemColTwo: '-',
        itemColThree: '-',
        itemColFour: <span className='text-primary h2 mb-0 font-weight-bolder'>&#x2713;</span>,
      },
      {iconColOne:<IconThree/>, 
        boxClassNameColOne: 'bg-white py-2 px-4',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
    titleColOne: 
    `Mock Interview + Review Report:`, 
     titleClassNameColOne: 'font-weight-bold text-info pre-line',},
     {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'Mock Interview',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light',  
        itemColTwo: '1 practice',
        itemColThree: '3 practice',
        itemColFour: '5 practice',
      },
      {
        boxClassNameColOne: 'bg-white py-3 px-4',titleColOne: 'Review Report by Professional Evaluators',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',   
        itemColTwo: '1 practice',
        itemColThree: '3 practice',
        itemColFour: '5 practice',
      },
      {iconColOne:<IconFour/>, 
        boxClassNameColOne: 'bg-white py-2 px-4',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
    titleColOne: 
    `Top-up:`, 
     titleClassNameColOne: 'font-weight-bold text-warning pre-line',},
     {
        boxClassNameColOne: 'bg-light py-3 px-4',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light', 
        titleClassNameColOne: 'pre-line',
        titleColOne: `Additional Mock Interview + 
        Review Report`, 
        itemColTwo: 'HK$500 each practice',
        itemColThree: 'HK$450 each practice',
        itemColFour: 'HK$350 each practice',
      },
      {boxClassNameColOne: 'bg-white py-3 px-4',
      boxClassNameColTwo: 'bg-white py-6',
        boxClassNameColThree: 'bg-white py-6',
        boxClassNameColFour: 'bg-white py-6', 
      itemColTwo: <button type='button' className='btn py-4 bg-gray-500 bg-hover-gray-600 text-white font-weight-bold h6 mb-0 btn-block rounded-sm'>Start This Plan</button>,
     
      itemColThree: <button type='button' className='btn py-4 bg-gray-500 bg-hover-gray-600 text-white font-weight-bold h6 mb-0 btn-block rounded-sm'>Start This Plan</button>,
    
      itemColFour: <button type='button' className='btn py-4 bg-warning text-white font-weight-bold h6 mb-0 btn-block rounded-sm'>Start This Plan</button>,},            
]

const upgradeArr = [
    {iconColOne:<IconFive/>, 
        boxClassNameColOne: 'bg-white py-2 px-4',
                boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
    titleColOne: 
    `Upgrade`, 
     titleClassNameColOne: 'font-weight-bold text-warning pre-line',},
     {
        boxClassNameColOne: 'bg-light py-3 px-4',titleColOne: 'to Premium Plan',
        boxClassNameColTwo: 'bg-light',
        boxClassNameColThree: 'bg-light',
        boxClassNameColFour: 'bg-light',  
        itemColTwo: 'HK$2200',
        itemColThree: 'HK$900',
        itemColFour: '-',
      },
      {
        boxClassNameColOne: 'bg-white py-3 px-4',titleColOne: 'to Basic Plan',
        boxClassNameColTwo: 'bg-white',
        boxClassNameColThree: 'bg-white',
        boxClassNameColFour: 'bg-white',  
        itemColTwo: 'HK$1200',
        itemColThree: '-',
        itemColFour: '-',
      },
]

    return (
        <section>
              <div className='text-center mb-lg-30'>
            <h1 className='display-4 text-uppercase font-weight-boldest text-white'>
            Choose Your Plan
            </h1>
            <h5 className='text-white'>
            All plans provide an unlimited access to all premium content for a 6 months’ period
            </h5>
          </div>
          <div className='row row-cols-1 row-cols-md-4 text-center'>
              <div className='px-1'>
              <div className='opacity-1 rounded-top-sm h-150px d-flex flex-column align-items-center justify-content-center pb-7 px-8'>
                     <h3 className='text-capitalize font-weight-bolder mb-7'>Trail</h3>
                     <h4 className='text-uppercase font-weight-bolder mb-0 text-white'>to be announced</h4>
                 </div>
              </div>
              <div className='px-1'>
              <div className='bg-gray-400 rounded-top-sm h-150px d-flex flex-column align-items-center justify-content-center pb-7 px-8'>
                     <h3 className='text-capitalize font-weight-bolder mb-7'>Trail</h3>
                     <h4 className='text-uppercase font-weight-bolder mb-0 text-white'>to be announced</h4>
                 </div>
              </div>
              <div className='px-1 d-flex flex-column'>
              <div className='bg-gray-500 rounded-top-sm h-150px d-flex flex-column align-items-center justify-content-center pb-7 px-8 mt-n8 flex-fill'>
                     <h3 className='text-capitalize font-weight-bolder mb-7'>Basic</h3>
                     <h4 className='text-uppercase font-weight-bolder mb-0 text-white'>to be announced</h4>
                 </div>
              </div>
              <div className='px-1 d-flex flex-column'>
              <div className='bg-primary rounded-top-sm h-150px d-flex flex-column align-items-center justify-content-center pb-7 px-8 mt-n17 flex-fill'>
              <img className='h-70px mb-7' src={PremiumImage} alt="Premium"/>
                     <h4 className='text-uppercase font-weight-bolder mb-0 text-white'>to be announced</h4>
                 </div>
              </div>
          </div>
          {dataArr.map((data) => (
          <div className='row row-cols-1 row-cols-md-4'>
              <div className='px-1'>
              <div className={`row mx-0 h-100 ${data.boxClassNameColOne}`}>
                       <div className='col-1 px-0 mr-3'>
                           {data.iconColOne}  
                          </div>
                          <div className='col px-0'>
                              <p className={`mb-0 ${data.titleClassNameColOne}`}>
                               {data.titleColOne}           
                              </p>
                      </div>
                </div>  
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColTwo}`}>
                     {data.itemColTwo}
                 </div>
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColThree}`}>
                     {data.itemColThree}
                 </div>
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColFour}`}>
                     {data.itemColFour}
                 </div>
              </div>
          </div>
          ))}
          <div className='mt-2'>
          {upgradeArr.map((data) => (
          <div className='row row-cols-1 row-cols-md-4'>
              <div className='px-1'>
              <div className={`row mx-0 h-100 ${data.boxClassNameColOne}`}>
                       <div className='col-1 px-0 mr-3'>
                           {data.iconColOne}  
                          </div>
                          <div className='col px-0'>
                              <p className={`mb-0 ${data.titleClassNameColOne}`}>
                               {data.titleColOne}           
                              </p>
                      </div>
                </div>  
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColTwo}`}>
                     {data.itemColTwo}
                 </div>
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColThree}`}>
                     {data.itemColThree}
                 </div>
              </div>
              <div className='px-1'>
              <div className={`py-2 px-4 h-100 d-flex align-items-center justify-content-center ${data.boxClassNameColFour}`}>
                     {data.itemColFour}
                 </div>
              </div>
          </div>
          ))}
          </div>
        </section>
    )
}

export default PlanSection;
