import React from 'react';
import './HomePage.css';
import NavigationBar from './NavigationBar/NavigationBar';
import img from '../../images/Mask Group 1.png'


const HomePage = () => {
    return (
        <div className="homePage">
            <NavigationBar />
            <div className="container">
                <div className="left">
                    <h2>Your New Smile starts here</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis iusto neque veritatis accusantium? Minus temporibus officia nulla itaque sit nesciunt quae labore error nisi iusto! Quibusdam cupiditate reiciendis obcaecati.</small></p>
                    <button><a href="/getAppointment">GET APPOINTMENT</a></button>
                </div>
                <div className="right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;