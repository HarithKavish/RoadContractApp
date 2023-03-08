import axios from "axios";
import React, {Component} from 'react';
import './css/home.css';

class Request extends Component {
    constructor(props) {
      super(props);
      this.state = {
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
      };
    }
  
    handleappnameChange=(event)=>{
        this.setState({appname: event.target.value});
    };
    handleappmailidChange=(event)=>{
        this.setState({appmailid: event.target.value});
    };
    handleappphnoChange=(event)=>{
        this.setState({appphno: event.target.value});
    };
    handlerdrestypeChange=(event)=>{
        this.setState({rdrestype: event.target.value});
    };
    handlestreetnameChange=(event)=>{
        this.setState({streetname: event.target.value});
    };
    handlerdtypeChange=(event)=>{
        this.setState({rdtype: event.target.value});
    };
    handletotwidthChange=(event)=>{
        this.setState({totwidth: event.target.value});
    };
    handletotlengthChange=(event)=>{
        this.setState({totlength: event.target.value});
    };
    handletspwidthChange=(event)=>{
        this.setState({tspwidth: event.target.value});
    };
    handlesplpurpwidthChange=(event)=>{
        this.setState({splpurpwidth: event.target.value});
    };
  
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            appname: this.state.appname,
            appmailid: this.state.appmailid,
            appphno: this.state.appphno,
            rdrestype: this.state.rdrestype,
            streetname: this.state.streetname,
            rdtype: this.state.rdtype,
            totwidth: this.state.totwidth,
            totlength: this.state.totlength,
            tspwidth: this.state.tspwidth,
            splpurpwidth: this.state.splpurpwidth
        };
        axios.post('http://127.0.0.1:8080/postValues', data)
            .then(response => {
                alert('Request Successful!');
            })
            .catch(error => {
                alert('Request Failed.');
                console.error(error);
            });
            window.location.reload();
    };
    render(){
        return (
            <div className="body">
                    <div><h1 id="a">Request Road</h1></div>
                <form className="hello" onSubmit={this.handleSubmit}>
                    <br/>
                    <div id="d">
                        <div id="b">Name : </div>
                        <input type="text" id="c" value={this.state.appname} onChange={this.handleappnameChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Email ID : </div>
                        <input type="email" id="c" value={this.state.appmailid} onChange={this.handleappmailidChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Phone Number : </div>
                        <input type="tel" id="c" value={this.state.appphno} onChange={this.handleappphnoChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div id="d">
                        <div id="b">Area Type : </div>
                        <input id="c" value={this.state.rdrestype} onChange={this.handlerdrestypeChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Street & Address : </div>
                        <textarea rows="" cols="" id="c" value={this.state.streetname} onChange={this.handlestreetnameChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Required Road Type : </div>
                        <input id="c" value={this.state.rdtype} onChange={this.handlerdtypeChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div id="d">
                        <div id="b">Total Road Width : </div>
                        <input id="c" value={this.state.totwidth} onChange={this.handletotwidthChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Total Road Length : </div>
                        <input id="c" value={this.state.totlength} onChange={this.handletotlengthChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Tree Space Width : </div>
                        <input id="c" value={this.state.tspwidth} onChange={this.handletspwidthChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Special Purpose Area Width : </div>
                        <input id="c" value={this.state.splpurpwidth} onChange={this.handlesplpurpwidthChange}/>
                    </div>
                    <br/> 
                    <br/>
                    <button type="submit">Submit Request</button>
                     {/* <button type="reset">Reset</button>  */}
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}
export default Request;
