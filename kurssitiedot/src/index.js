import React from 'react'
import ReactDOM from 'react-dom'
import Content from './content'
import Header from './header'
import Total from './total'

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
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total allExercises={total} />
        </>

        /*  <h1>{course}</h1>
        <p>
            {part1} {exercises1}
        </p>
        <p>
            {part2} {exercises2}
        </p>
        <p>
            {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div> */
    )
}

ReactDOM.render(<App />, document.getElementById('root'))