import React from "react";
import '../assets/css/adminLogin.css'
import axios from 'axios'


class AdminLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            admin_name: "",
            admin_password: "",

        };
        //this.ajaxToData = this.ajaxToData.bind((this))
    }

    handleInputData = (e) => {
        this.setState({
            admin_name: e.target.value,
        });
    };

    handleInputPassword = (e) => {
        this.setState({
            admin_password: e.target.value,
        })
    };

    ajaxToData= () => {
        let url = 'http://127.0.0.1:5000/admin_login/';
        axios.post(url,  {'admin_name': this.state.admin_name, 'admin_password': this.state.admin_password})
            .then(function (response) {
                let data = response.data;
                console.log(data['msg'])
            })
            .catch(function (error) {
                console.log(error)
            })
    };

    render() {
        return(

            <div className="loginForm">

                <h3>Administrator Sign In</h3>
                <div className="nameLine">
                    <input type="text" className="adminName" name="admin_name" placeholder="UserName"
                           value={this.state.admin_name} onChange={this.handleInputData}/>
                </div>
                <div className="passwordLine">
                    <input type="password" className="adminPassword" name="admin_password" placeholder="Password"
                            value={this.state.admin_password} onChange={this.handleInputPassword}/>
                </div>
                <div className="buttonLine">
                    <input className="loginButton" type="button" value="Sign In"
                    onClick={this.ajaxToData}/>
                </div>
                <div className="tipLine">
                    <input type="checkbox"/>
                    <span className="rememberMe">Remember me</span>
                    <a href="https://www.baidu.com" className="forgetPassword">Forget password?</a>
                </div>

            </div>

        )
    }
}

export default AdminLogin