import React, { Component } from 'react';
import Footer from './footer.component.jsx';
import { Link } from 'react-router';

class Home extends Component {
    render(){
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                    <div className="item active slide">
                        <img src="https://w-dog.pw/android-wallpapers/1/44/326502279802725/care-hats-the-pair-tiger.jpg" alt="Los Angeles"/>
                    </div>

                    <div className="item slide">
                        <img src="https://w-dog.pw/android-wallpapers/1/37/554510857714485/stones-lions-forest-the-pair.jpg" height="100px"  alt="Chicago"/>
                    </div>
                    
                    <div className="item slide">
                        <img src="https://www.lovingkindness.co/wp-content/uploads/2020/03/tiger-2535888_1920.jpg" height="100px" alt="New york"/>
                    </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                    </a>
                    <div className="container">
                        <div className="jumbotron">
                            <h1>Wild Animals is very dangerous ⚠️</h1>      
                            <Link to="/cars"><button className="btn btn-primary">View all animals</button></Link>
                        </div>  <br/> <br/><br/><br/>   
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home