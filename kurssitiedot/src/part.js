import React from 'react'

const Part = (props) => {

    return (
        <div>
            {props.part1Name} {props.part1Exercises}
            {props.part2Name} {props.part2Exercises}
            {props.part3Name} {props.part3Exercises}
        </div>
    )
}

export default Part