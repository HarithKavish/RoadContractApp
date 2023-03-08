import React, { useState } from 'react';
import axios from 'axios';
import './css/home.css';

const Delete = () => {
const [id, setId] = useState('');
   
const handleDelete = () => {
    axios.delete(`http://localhost:8080/deletValues?id=${id}`)
        .then(response => {
            alert('Request Deleted Successfully!');
            setId(''); 
        })
        .catch(error => {
            alert('Failed to Delete the Details.');
            console.error(error);
        });
    };

    return (
        <div className="body">
            <div><h1 id='a'>Delete Road Request</h1></div>
            <form className='hello'>
                <div id='d'>
                    <label id='b' htmlFor="id">Request Number : </label>
                    <input type="text" id="id" value={id} onChange={event => setId(event.target.value)}/>
                </div>
                <br/>
                <button type="submit" onClick={handleDelete}>Delete Request</button>
            </form>
        </div>
    );
};
export default Delete;