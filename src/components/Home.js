import React from "react";
import carouselImage1 from '../assets/images/home/7f0ec8d9426043b3b22d19610d71c86f.jpg';
import carouselImage2 from '../assets/images/home/58d5b9dd33d448b1a3430eb19f6ffd48.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../assets/css/home.css'
import homeLogo from '../assets/images/base/site_title.png'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return(
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselImage1}
                    alt="First slide"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselImage2}
                    alt="Third slide"
                />

                {/*<Carousel.Caption>*/}
                {/*    <h3>Second slide label</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
    )
}

function TopBox() {
    return (
        <div className="topBox">
            <Container>
                <Row>
                    <Col className="homeLogo"><img src={homeLogo} alt="加载失败"/></Col>
                    <Col className="homeSearchBox"><input type="text"/><button>搜全网</button></Col>
                </Row>
            </Container>
        </div>
    )
}

function MiddleNav() {
    const imagesArray = [
        "e63ce1e68cdbd9cefa5f76a062c8c878",
        "0cd80d8dec85251f4243755c3362fa17",
        "b48d4b916075f636db02c11ed890d914",
        "aa3610d3f806ac61066dda86184e6155",
        "022608702e7996217ab6d5c288344244",
        "d242ef0c714a48f627ee03804497f756",
        "6026b0f95d91c019f3b8dd9b238a9c36",
        "e96b4cab872ad3d73b2a57a0c8824fa5",
    ];

    const imagesObj = imagesArray.map(item => require("../assets/images/home/icon/" + item + ".png"));
    // let containerStyle = {
    //     minWidth: 1000,
    //     width: '80%'
    // };
    return (
        <div className="middleNav">
            <Container style={{width:"100%", maxWidth: 1600}}>
                <Row>
                    <Col xs={3}>
                        <ul className="leftNav">
                            <li>
                                <a href="https://www.baidu.com"><img src={imagesObj[0]} alt="加载失败"/>剧集</a>
                                <a href="https://www.baidu.com"><img src={imagesObj[1]} alt="加载失败"/>综艺</a>
                             </li>
                            <li>
                                <a href="https://www.baidu.com"><img src={imagesObj[2]} alt="加载失败"/>电影</a>
                                <a href="https://www.baidu.com"><img src={imagesObj[3]} alt="加载失败"/>动漫</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com"><img src={imagesObj[4]} alt="加载失败"/>少儿</a>
                                <a href="https://www.baidu.com"><img src={imagesObj[5]} alt="加载失败"/>纪录片</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={6}>
                        <ul className="middleSmallNav">
                            <li>
                                <a href="https://www.baidu.com">文化</a>
                                <a href="https://www.baidu.com">教育</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">体育</a>
                                <a href="https://www.baidu.com">游戏</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">来疯</a>
                                <a href="https://www.baidu.com">直播</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">音乐</a>
                                <a href="https://www.baidu.com">汽车</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">时尚</a>
                                <a href="https://www.baidu.com">搞笑</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">旅游</a>
                                <a href="https://www.baidu.com">亲子</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">娱乐</a>
                                <a href="https://www.baidu.com">生活</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">资讯</a>
                                <a href="https://www.baidu.com">片库</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">公益</a>
                                <a href="https://www.baidu.com">科技</a>
                            </li>
                            <li>
                                <a href="https://www.baidu.com">财经</a>
                                <a href="https://www.baidu.com">发现</a>
                            </li>

                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ul className="rightNav">
                            <li>
                                <img src={imagesObj[6]} alt="加载失败"/>
                                <a href="https://www.baidu.com">片库</a>
                            </li>
                            <li>
                                <img src={imagesObj[7]} alt="加载失败"/>
                                <a href="https://www.baidu.com">下载中心</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="main">
                <ControlledCarousel/>
                <TopBox/>
                <MiddleNav/>
            </div>
        )
    }
}



export default Home