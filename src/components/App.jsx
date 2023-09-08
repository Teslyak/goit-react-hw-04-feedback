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
    if (e.target.name === 'good') {
      setGood(prevGood => (prevGood + 1))
    } else if ((e.target.name === 'neutral')) {
      setNeutral(prevGood => (prevGood + 1))
    } else if ((e.target.name === 'bad')) {
      setBad(prevGood => (prevGood + 1))
    }
  
  }  
  
  const getTotalFeedBack = () => {
    const total = good + neutral + bad
    return total
  }

  const getPositiveFeedbackPercentage = () => {
        return ((good / (good + neutral + bad)) * 100) ^ 0;
  }
  
      return ( 
          <>
        <Section  title="Please leave feedback">
            <FeedbackOptions options={arrOptions} onLeaveFeedback={handleClickOptions} />
        </Section>
          <Section title="Statistics">
            {getTotalFeedBack ?
              <Statistics good={good} neutral={neutral} bad={bad} total={getTotalFeedBack} positivePercentage={getPositiveFeedbackPercentage} />
              : <Notification message="There is no feedback" />}
          </Section>
          <RootStyle></RootStyle>
          </>
           
          
              
)
            }