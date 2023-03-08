import axios from "axios";
import './css/home.css';
import React, { useState, useEffect } from "react";
function Main(){
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getValues')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  
    return (
        <div className="body">
            <div ><h1 id="a">Road Requests</h1></div>
            <br/>
            <div className="table">
                <table border={2} id="m">
                    <thead id="q">
                        <tr>
                            <th>Request Number</th>
                            <th>Applicant Name</th>
                            <th>Applicant Mail ID</th>
                            <th>Applicant Phone Number</th>
                            <th>Area Type</th>
                            <th>Street & Address</th>
                            <th>Required Road Type</th>
                            <th>Total Width</th>
                            <th>Total Length</th>
                            <th>Tree Space Width</th>
                            <th>Special Purpose Width</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map(quote =>(
                            <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.appname}</td>
                            <td>{quote.appmailid}</td>
                            <td>{quote.appphno}</td>
                            <td>{quote.rdrestype}</td>
                            <td>{quote.streetname}</td>
                            <td>{quote.rdtype}</td>
                            <td>{quote.totwidth}</td>
                            <td>{quote.totlength}</td>
                            <td>{quote.tspwidth}</td>
                            <td>{quote.splpurpwidth}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Main;