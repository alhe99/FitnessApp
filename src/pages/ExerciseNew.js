import React from 'react'

class ExerciseNew extends React.Component{
   
   /* handleClick = () =>{
        console.log('Clicked');
    }*/
    state = {}
    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return (
          <div className="container">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Image"
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.value}
                      />
                  </div>
                  <div className="form-row">
                      <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Left Color" 
                            name="leftcolor" 
                            onChange={this.handleChange}
                            value={this.state.leftcolor}/>    
                      </div>
                      <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Right Color" 
                            name="rightcolor" 
                            onChange={this.handleChange}
                            value={this.state.rightcolor} />
                      </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        )
    }
}

export default ExerciseNew