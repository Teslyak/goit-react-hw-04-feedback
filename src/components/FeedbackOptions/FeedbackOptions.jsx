import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = (props) => {
    const { good, neutral, bad } = props.options;
    const { handleClickGood, handleClickNeutral, handleClickBad } = props.onLeaveFeedback;
    return (
        <>
            <Button type="button" onClick={handleClickGood} value={good}>{good}</Button>
            <Button type="button" onClick={handleClickNeutral} value={neutral}>{neutral}</Button>
            <Button type="button" onClick={handleClickBad} value={bad}>{bad}</Button>
        
    </>
)

}