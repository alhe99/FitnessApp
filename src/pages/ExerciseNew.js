import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import { async } from 'q';
import FatalError from './500'
import Loading from '../components/Loading'

class ExerciseNew extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading : false
    }
    handleChange = e =>{
        this.setState({
             form: {
                 ...this.state.form,
                 [e.target.name] : e.target.value
             }
        })
    }
    handleSubmit = async e =>{
        this.setState({
            loading : true
        })
        e.preventDefault();
        try{
            let config ={
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises',config)
            let json = await res.json()

            //Show Loader
            this.setState({
                loading : false
            })
            
            this.props.history.push('/exercises')

        }catch(error){
            this.setState({
                loading : false,
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
            <div className="row m-5">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>

        )
    }
}

export default ExerciseNew