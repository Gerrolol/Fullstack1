const Header = (prop) => {
  console.log(prop)
  return(
    <h1>{prop.course}</h1>
  )
}

const Part = (prop1) => {
  return(
    <p>{prop1.name} {prop1.exercises}</p>
  )
}

const Content = (prop2) => {
  return(
    <div>
        <Part name = {prop2.parts[0].name} exercises = {prop2.parts[0].exercises}/>
        <Part name = {prop2.parts[1].name} exercises = {prop2.parts[1].exercises}/>
        <Part name = {prop2.parts[2].name} exercises = {prop2.parts[2].exercises}/>
    </div>
  )
}

const Total = (prop3) => {
  return (
    <p>Number of exercises {prop3.parts[0].exercises + prop3.parts[1].exercises+ prop3.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App