import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import Exercises from '../pages/Exercises'

function App(){
    return (
        <BrowserRouter>
            <Route path="/exercises" component={Exercises}/>
            <Route path="/exercises/new" component={Exercises}/>
        </BrowserRouter>
    )
}

export default App