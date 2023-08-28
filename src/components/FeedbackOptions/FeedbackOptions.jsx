import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = (props) => {
    return (
        props.options.map((el => (
    <Button key={el} name={props.options} onClick={() => props.onLeaveFeedback(el)}>{el}</Button>)))
              
)

}