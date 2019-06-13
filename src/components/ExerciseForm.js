import React from 'react'

class ExerciseForm extends React.Component{
   
   /* handleClick = () =>{
        console.log('Clicked');
    }*/
    render(){
        const { onChange,form,onSubmit } = this.props;
        return (
          <div className="container">
              <form onSubmit={onSubmit}>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={onChange}
                        value={form.title}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        onChange={onChange}
                        value={form.description}
                      />
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Image"
                        name="img"
                        onChange={onChange}
                        value={form.value}
                      />
                  </div>
                  <div className="form-row">
                      <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Left Color" 
                            name="leftColor" 
                            onChange={onChange}
                            value={form.leftcolor}/>    
                      </div>
                      <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Right Color" 
                            name="rightColor" 
                            onChange={onChange}
                            value={form.rightcolor} />
                      </div>
                  </div>
                  <button type="submit" className="btn btn-primary my-1 float-right">Submit</button>
              </form>
          </div>
        )
    }
}

export default ExerciseForm