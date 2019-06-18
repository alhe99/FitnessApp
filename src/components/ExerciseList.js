import React from 'react';
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <React.Fragment>
        {exercises.map((exercise) => (
            <Card
                key={exercise.id}
               {...exercise}
            />
        ))}
    </React.Fragment>
)
export default ExerciseList