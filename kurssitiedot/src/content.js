import React from 'react'
import Part from './part'

const Content = (props) => {

    return (
        <div>
            <Part part1Name={props.parts[0].name} part1Exercises={props.parts[0].exercises} />
            <Part part2Name={props.parts[1].name} part2Exercises={props.parts[1].exercises} />
            <Part part3Name={props.parts[2].name} part3Exercises={props.parts[2].exercises} />
        </div>
    )
}

export default Content