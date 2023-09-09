import {useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Sectoin';
import { Notification } from './Notification/Notification';
import { RootStyle } from './RootStyle/RootStyle.styled';



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const arrOptions = ["good", "neutral", "bad"];
  

  const handleClickOptions = (e) => {
    switch (e.target.name) {
      case 'good':
      return setGood(good + 1)
      
      case 'neutral':
       return setNeutral(neutral + 1)
       
      case 'bad':
       return setBad(bad + 1)
     
      default:
       
    }
  
  }  
  
  const getTotalFeedBack = () => {
    const totalFeedback = good + neutral + bad
    const positiveFeedbackPercentage = ((good / totalFeedback) * 100) ^ 0;
    return { totalFeedback, positiveFeedbackPercentage}
  }
  
  

  
      return ( 
          <>
        <Section  title="Please leave feedback">
            <FeedbackOptions options={arrOptions} onLeaveFeedback={handleClickOptions} />
        </Section>
          <Section title="Statistics">
            {getTotalFeedBack ?
              <Statistics good={good} neutral={neutral} bad={bad} total={getTotalFeedBack()}  />
              : <Notification message="There is no feedback" />}
          </Section>
          <RootStyle></RootStyle>
          </>
           
          
              
)
            }