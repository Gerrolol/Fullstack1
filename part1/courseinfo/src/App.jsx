const Header = (prop) => {
  return(
    <h1>{prop.course}</h1>
  )
}

const Part = (prop1) => {
  return(
    <p>{prop1.part} {prop1.exercise}</p>
  )
}

const Content = (prop2) => {
  return(
    <div>
        <Part part = {prop2.part1} exercise = {prop2.exercises1}/>
        <Part part = {prop2.part2} exercise = {prop2.exercises2}/>
        <Part part = {prop2.part3} exercise = {prop2.exercises3}/>
    </div>
  )
}

const Total = (prop3) => {
  return (
    <p>Number of exercises {prop3.ex1 + prop3.ex2 + prop3.ex3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1 ={exercises1} part2={part2} exercises2 ={exercises2} part3={part3} exercises3 ={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App