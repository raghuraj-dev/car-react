import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import Footer from '../common/footer.component.jsx';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        const cars = this.props.route.data;
        const id = this.props.params.id;
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h1>{car[0].name} <i className="text-muted">({car[0].model})</i> </h1>
                        <p id="copyP">{car[0].desc}</p>
                        <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
                    </div>
                </div>
                <hr/>
                <h2>Related Animals</h2>
                <div className="row">
                <div className="card col-sm-4">
                    <img src="https://listaka.com/wp-content/uploads/2015/08/African_lion.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">African lion</h5>
                        <p className="card-text">Lions are considered the kings of the jungle, and very rightly so.</p>
                        <Link to="cars/1"><button className="btn btn-primary">Go to page</button></Link>
                    </div>
                    <br/><br/><br/><br/>
                </div>
                <div className="card col-sm-4">
                    <img src="https://listaka.com/wp-content/uploads/2015/08/Crocodile.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Crocodile</h5>
                        <p className="card-text">Among the 23 recognized species of crocodilians, the saltwater and Nile crocodiles are the most deadly creatures.</p>
                        <Link to="cars/4"><button className="btn btn-primary">Go to page</button></Link>
                    </div>
                </div>    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default CarDetail