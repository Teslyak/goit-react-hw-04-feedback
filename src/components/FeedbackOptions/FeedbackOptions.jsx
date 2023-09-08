import { Button } from "./FeedbackOptions.styled";
import propTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(el => (
           <Button key={el} name={el} onClick={(e) => onLeaveFeedback(e)}>{el}</Button>
         )
    ))
    
            
   
              


}

FeedbackOptions.propTypes = {
    onLeaveFeedback: propTypes.func,
    options: propTypes.arrayOf(propTypes.string).isRequired
}