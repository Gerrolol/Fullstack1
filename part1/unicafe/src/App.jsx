import {useState} from 'react'

//component for header
const Header = ({head}) => {
  return(
    <h1>{head}</h1>
  )
}

//create a component for button
const Button = ({onClick, text}) => {
    return (
      <button onClick = {onClick}> {text} </button>
    )
}

//component for statistic header 
const Stat = ({stat}) => {
  return( 
    <h2>{stat}</h2>
  )
}

//component for displaying stats
const StatisticLine = (prop) =>{
  if(prop.flag == 1){
    return(
      <tr>
        <td>{prop.text}</td>
        <td>{prop.val} {prop.suffix}</td>
      </tr>
   )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const [all, setAll] = useState(0)
  const [average, setAvg] = useState(0)
  const [positive, setPos] = useState(0)
  const [flag, setFlag] = useState(0)

  //define functions for changing the values of good neutral and bad 

  const incGood = () => {
    const newGood = good+1;
    const newAll = all +1;
    setGood(newGood);
    setAll(newAll);
    setAvg((newGood - bad) / newAll);
    setPos(newGood/newAll);
    setFlag(1)
  };
  const incNeutral = () => {
    const newNeutral = neutral+1;
    const newAll = all + 1;
    setNeutral(newNeutral);
    setAll(newAll);
    setAvg((good - bad) / newAll);
    setPos(good/newAll);
    setFlag(1)
  };
  const incBad = () => {
    const newBad = bad+1
    const newAll = all+1
    setBad(newBad)
    setAll(newAll)
    setAvg((good-newBad)/newAll)
    setPos(good/newAll)
    setFlag(1)
  };


  return(
    <div>
        <Header head = 'give feedback'/>
        <Button onClick = {incGood} text = 'good'/>
        <Button onClick = {incNeutral} text = 'neutral'/>
        <Button onClick = {incBad} text = 'bad'/>
        <Stat stat = 'statistics'/>
        <table>
          <tbody>
            <StatisticLine text = 'good' val = {good} flag={flag}/>
            <StatisticLine text = 'neutral' val = {neutral} flag={flag}/>
            <StatisticLine text = 'bad' val = {bad} flag={flag}/>
            <StatisticLine text = 'all' val = {all} flag={flag}/>
            <StatisticLine text = 'average' val = {average} flag={flag}/>
            <StatisticLine text = 'positive' val = {positive} suffix='%' flag={flag}/>
          </tbody>
        </table>

    </div>
  )
}


export default App