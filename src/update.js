import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/home.css';

function TodoItem() {
    const [todo, setTodo] = useState({
        id:'',
        appname:'',
        appmailid:'',
        appphno:'',
        rdrestype:'',
        streetname:'',
        rdtype:'',
        totwidth:'',
        totlength:'',
        tspwidth:'',
        splpurpwidth:''
    });

    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/putValues`, todo)
            .then((res) => {
                console.log(res.data);
                alert('Update Successful!');
                setTodo({ id:'', appname:'', appmailid:'',appphno:'', rdrestype:'', streetname:'',rdtype:'', totwidth:'', totlength:'', tspwidth:'', splpurpwidth:'' });
            })
            .catch(error => {
                alert('Update Failed.');
                console.error(error);
            });
    };
    return (
        <div className="body">
            <div><h1 id="a">Update Road Request</h1></div>
            <form className="hello" onSubmit={handleSubmit}>
                <br/>
                <div id="d">
                    <div id="b">Request Number : </div>
                    <input name="id" type="text" id="c" value={todo.id} onChange={handleChange}/>
                </div>
                <br/>
                <div id="d">
                    <div id="b">Name : </div>
                    <input name="appname" type="text" id="c" value={todo.appname} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Email ID : </div>
                    <input name="appmailid" type="email" id="c" value={todo.appmailid} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Phone Number : </div>
                    <input name="appphno" type="tel" id="c" value={todo.appphno} onChange={handleChange}/>
                </div>
                <br/>
                <br/>
                <div id="d">
                    <div id="b">Area Type : </div>
                    <input name="rdrestype" id="c" value={todo.rdrestype} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Street Name & Address : </div>
                    <textarea name="streetname" rows="" cols="" id="c" value={todo.streetname} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Required Road Type : </div>
                    <input name="rdtype" id="c" value={todo.rdtype} onChange={handleChange}/>
                </div>
                <br/>
                <br/>
                <div id="d">
                    <div id="b">Total Road Width : </div>
                    <input name="totwidth" id="c" value={todo.totwidth} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Total Road Length : </div>
                    <input name="totlength" id="c" value={todo.totlength} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Tree Space Width : </div>
                    <input name="tspwidth" id="c" value={todo.tspwidth} onChange={handleChange}/>
                </div>
                <div id="d">
                    <div id="b">Special Purpose Area Width : </div>
                    <input name="splpurpwidth" id="c" value={todo.splpurpwidth} onChange={handleChange}/>
                </div>
                <br/> 
                <br/>
                <button type="submit" onClick="window.location.reload();">Update Request</button>
                <br/>
                <br/>
            </form>
        </div>
    );
  }
export default TodoItem;