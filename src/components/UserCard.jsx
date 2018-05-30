import React, { Component } from 'react';



class UserCard extends Component {
    render() {
        return ( 
            <div>
                <div className="logo">
                   <a href="/"><img id='logo' alt='logo' src={"images/Adminlogo.png"}/></a>
                </div>  
                <div className="user-info">
                    <img src="images/profile_72px.png" alt="" className="avatar"/> 
                    <h5>超级管理员</h5>
                    <a href="/">个人信息</a>
                    <a href="/">修改密码</a>
                </div>          
                
            </div>
        );
    }
}

export default UserCard;