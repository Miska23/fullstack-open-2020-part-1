import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad, averageCounter,}) => {

  const allVotes = good + neutral + bad;

  const countAverage = () => {
    let badPlusGood = bad + good;
    if (badPlusGood > 0) {
      let average = averageCounter / (badPlusGood)
      return average.toFixed(2);
    } else {
      return 0;
    }
  }

  const countPositive = () => {
    let all = bad + good + neutral;
    if (all > 0) {
      let positive = good / all * 100;
      return positive.toFixed(2);
    } else {
      return 0;
    }
  }

  if (allVotes > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={allVotes}/>
          <StatisticLine text="average" value={countAverage()}/>
          <StatisticLine text="positive" value={countPositive()} sign={"%"}/>
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }

}
const StatisticLine = ({ text, value, sign }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{sign}</td>
    </tr>
  )
}

const Button = ({ handleClick, text} ) => <button onClick={handleClick}> {text} </button>;

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [averageCounter, setAverageCounter] = useState(0)

  return (
    <div>
      <h4>Give Feedback</h4>
      <Button text={"good"} handleClick={() => {
          setGood(good+1)
          setAverageCounter(averageCounter + 1)} 
        }/>
      <Button text={"neutral"} handleClick={() => {
          setNeutral(neutral+1)} 
        }/>
      <Button text={"bad"} handleClick={() => {
          setBad(bad+1)
          setAverageCounter(averageCounter - 1)} 
        }/>
      <h4>Statistics</h4>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        averageCounter={averageCounter}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
