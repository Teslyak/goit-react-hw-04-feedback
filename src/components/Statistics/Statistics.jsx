import { ListStat } from "./Statistics.styled"

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