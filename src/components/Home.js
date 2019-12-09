import React from "react";
import carouselImage1 from '../assets/images/home/7f0ec8d9426043b3b22d19610d71c86f.jpg'
import carouselImage2 from '../assets/images/home/58d5b9dd33d448b1a3430eb19f6ffd48.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="topCarousel">
                <div id="myCarousel" className="carousel slide">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={carouselImage1} alt="First slide"/>
                        </div>
                        <div className="item">
                            <img src={carouselImage2} alt="Second slide"/>
                        </div>
                    </div>

                    <a className="left carousel-control" href="" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="" role="button" data-slide="next">
                        {/*<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>*/}
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        )
    }
}

export default Home