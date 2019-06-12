import React from 'react';
import './styles/Welcome.css'
import addImage from '../images/add.png'


function AddButton(props){
    return (
        <a href="/exercise/new">
            <img src={addImage} class="Fitness-Add" />
        </a>
        
    )
}

export default AddButton