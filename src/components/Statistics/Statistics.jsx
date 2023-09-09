import { ListStat } from "./Statistics.styled"
import propTypes from 'prop-types'
export const Statistics = ({ good, neutral, bad, total }) => {
    const {totalFeedback, positiveFeedbackPercentage } = total
    return (
        <>
        <ul>
            <ListStat>Good: {good}</ListStat>
            <ListStat>Neutral: {neutral}</ListStat>
            <ListStat>Bad: {bad}</ListStat>
            <ListStat>Total: {totalFeedback}</ListStat>
            <ListStat>Positive feedback: {positiveFeedbackPercentage}% </ListStat>
            </ul>
            </>
)    
}

Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.shape({   
    totalFeedBck: propTypes.number,
    positiveFeedbackPercentage:propTypes.number
    }) 
}
