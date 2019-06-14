import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

const ExerciseNew = ({form,onChange,onSubmit})=>(
      <div className="row m-5">
                <div className="col-sm">
                    <Card {...form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={onChange}
                        form={form}
                        onSubmit={onSubmit}
                    />
                </div>
        </div>
)

export default ExerciseNew