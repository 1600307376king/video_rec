import React from "react";
import '../assets/css/bg.css'
import siteTitle from '../assets/images/login/site_title.png'
// import AdminLogin from "../components/AdminLogin";
// import Home from "../components/Home";



class Base extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="totalBackground" id="main">

                <div className="topNav">
                    <img src={siteTitle} alt="图片加载失败"/>
                </div>

                <div className="footerNav">

                </div>
            </div>
        )
    }
}


export default Base