import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

class Verified extends Component {
    state = {verified: false, loading: true}

    componentDidMount(){
        var params = queryString.parse(this.props.location.search);
        console.log(params);
        var username = params.username;
        var password = params.password;
        axios.post('http://localhost:1212/auth/verified', {
            username, password
        })
        .then((res) => {
            const {token} = res.data;
            localStorage.setItem("token", token || "");
            this.props.onUserVerified(res.data);
            console.log(res.data)
            this.setState({loading:false, verified:true});
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    renderContent = () => {
        if(this.state.verified && !this.loading){
            return(
                <h1>Congrats you are verified!</h1>
            );
        }
        else if(!this.state.verified && !this.loading){
            return(
                <h1>Sorry error happened, try to reload this page!</h1>
            );
        }
        return (
            <h1>Please wait...</h1>
        )
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default Verified