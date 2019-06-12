import React from 'react';
import './styles/Welcome.css'
import addImage from '../images/add.png'
import {Link} from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercises/new">
        <img src={addImage} className="Fitness-Add" alt={addImage} />
    </Link>
)

export default AddButton