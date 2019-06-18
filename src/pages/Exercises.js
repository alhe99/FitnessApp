import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'
import { userInfo } from 'os';
import useFetch from '../hooks/useFetch'
import url from '../config'

const Exercises = () =>{

   const {data,loading,error} = useFetch(`${url}/exercises`)
    
    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <React.Fragment>
            <Welcome username="Alonso" />
            <ExerciseList
                exercises={data}
            />
            <AddButton />
        </React.Fragment>
    )
}
/*class Exercises extends React.Component{
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () =>{
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

     render(){
         if (this.state.loading)
             return <Loading />

        if(this.state.error)
            return <FatalError/>

         return (
              <React.Fragment>
                   <Welcome username="Alonso"/>
                   <ExerciseList
                    exercises={this.state.data}
                   />
                   <AddButton/>
              </React.Fragment>
         )
     }
}*/

export default Exercises