import { Button } from "./FeedbackOptions.styled";
import propTypes from 'prop-types'

export const FeedbackOptions = (props) => {
    return (
        props.options.map((el => (
    <Button key={el} name={props.options} onClick={() => props.onLeaveFeedback(el)}>{el}</Button>)))
              
)

}

FeedbackOptions.propTypes = {
    onLeaveFeedback: propTypes.func,
    options: propTypes.arrayOf(propTypes.string).isRequired
}