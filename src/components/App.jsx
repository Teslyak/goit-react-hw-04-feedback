import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Sectoin';
import { Notification } from './Notification/Notification';
import { RootStyle } from './RootStyle/RootStyle.styled';

export class App extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    handleClickGood = (e) => {
        this.setState(pState => {
            return {
                good: pState.good + 1
             
            };
        })   
    }

    handleClickNeutral = (e) => {
        this.setState(pState => {
            return {
                neutral: pState.neutral + 1
             
            };
        })   
    }

     handleClickBad = (e) => {
        this.setState(pState => {
            return {
                bad: pState.bad + 1
             
            };
        })   
    }

    countTotalFeedback ({ good, neutral, bad}) {
         return good + neutral + bad
         
    }

    countPositiveFeedbackPercentage({good}, total) {
        return ((good / total) * 100) ^ 0;
  }

    render() {
      const { good, neutral, bad } = this.state;
      const getTotalFeedBack = this.countTotalFeedback(this.state);
      const getPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(this.state, getTotalFeedBack)
      const onLeaveFeedback = {
      handleClickGood: this.handleClickGood,
      handleClickNeutral: this.handleClickNeutral,
      handleClickBad: this.handleClickBad
      }

      const options = {
        good: 'good',
        neutral: 'neutral',
        bad: 'bad'
      }
      return ( 
          <>
        <Section  title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
         
          <Section title="Statistics">
            {good || neutral || bad ?
              <Statistics good={good} neutral={neutral} bad={bad} total={getTotalFeedBack} positivePercentage={getPositiveFeedbackPercentage} />
              : <Notification message="There is no feedback" />}
          </Section>
          <RootStyle></RootStyle>



          </>
           
          
              
)}

};