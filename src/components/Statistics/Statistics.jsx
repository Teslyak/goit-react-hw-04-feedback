import { ListStat } from "./Statistics.styled"
import propTypes from 'prop-types'
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (<>
        <ul>
            <ListStat>Good: {good}</ListStat>
            <ListStat>Neutral: {neutral}</ListStat>
            <ListStat>Bad: {bad}</ListStat>
            <ListStat>Total: {total}</ListStat>
            <ListStat>Positive feedback: {positivePercentage}% </ListStat>
            </ul>
            </>
    
)    


}

Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    total: propTypes.number,
    bad: propTypes.number,
    positivePercentage: propTypes.number,
}
