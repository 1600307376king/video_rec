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
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselImage2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

function TopBox() {
    return (
        <div className="topBox" >
            <Container style={{width:"100%", maxWidth: 1600, minWidth: 1000}}>
                <Row>
                    <Col className="homeLogo" xs={3}><img src={homeLogo} alt="加载失败"/></Col>
                    <Col className="homeSearchBox" xs={5}><input type="text"/><button>搜全网</button></Col>
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
            <Container style={{width:"100%", maxWidth: "100%", minWidth: 1000}}>
                <Row>
                    <Col xs={4}>
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
                    <Col xs={2}>
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

// function VideoBlock() {
//     return (
//         <div className="videoBlock">
//
//         </div>
//     )
// }

function Hit() {
    const hitBaseImageArray = [
        'refresh',
    ];

    const hitVideoImageArray = [
        'b6269a33d77b42f18207beed85865792',
        '2e9ba7e798c648f2ab77d38a986eb01c',
        '5112ba34832e4dedbff9dcf385b93f56',
        'ad8dd5af29244dff8fb0379734b53d54',
        'cf92182b65e54a9b8daa3314cd9f46e0',
        'qyfr92p3saq0f1zaf5l1575015784097'
    ];

    const hitBaseImage = hitBaseImageArray.map(item => require("../assets/images/home/" + item + ".png"));
    const hitVideoImage = hitVideoImageArray.map(item => require("../assets/images/home/hit_video/" + item + ".jpg"));
    return (
        <div className="hitVideo">
            <div className="hitTop">
                <h2>正在热播
                    <a href="https://www.baidu.com"><img src={hitBaseImage[0]} alt="图片加载失败"/>换一换</a>
                </h2>
            </div>
            <div className="hitVideoList">
                <Container style={{width:"100%", maxWidth: "100%", minWidth: 1000}}>
                    <Row>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#">
                                    <img src={hitVideoImage[0]} alt="图片加载失败"/>
                                    <span className="videoType">VIP</span>
                                    <span className="videoUpdateDate">12-09期</span>
                                </a>
                                <div className="videoTitle">
                                    <a href="#">热爱</a>
                                </div>
                                <div className="videoBrief">
                                    黄圣依求见已订婚的前男友
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#">
                                    <img src={hitVideoImage[1]} alt="图片加载失败"/>
                                    <span className="videoType">VIP</span>
                                    <span className="videoUpdateDate">12-09期</span>
                                </a>
                                <div className="videoTitle">
                                    <a href="#">漫游记•群口相声</a>
                                </div>
                                <div className="videoBrief">
                                    钟汉良秦岚联手调侃郭麒麟
                                </div>
                            </div>

                        </Col>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#"><img src={hitVideoImage[2]} alt="图片加载失败"/></a>
                                <div className="videoTitle">
                                    <a href="#">嘉峪关</a>
                                </div>
                                <div className="videoBrief">
                                    古代中国“黄金之地”
                                </div>
                            </div>

                        </Col>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#"><img src={hitVideoImage[3]} alt="图片加载失败"/></a>
                                <div className="videoTitle">
                                    <a href="#">花花看哭齐王妃</a>
                                </div>
                                <div className="videoBrief">
                                    小S搂抱金汉贴身热舞太撩人
                                </div>
                            </div>

                        </Col>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#"><img src={hitVideoImage[4]} alt="图片加载失败"/></a>
                                <div className="videoTitle">
                                    <a href="#">宝莱坞机器人2.0</a>
                                </div>
                                <div className="videoBrief">
                                    终结者大战机甲巨兽
                                </div>
                            </div>

                        </Col>
                        <Col xs={2}>
                            <div className="videoBox">
                                <a href="#"><img src={hitVideoImage[5]} alt="图片加载失败"/></a>
                                <div className="videoTitle">
                                    <a href="#">天作谜案</a>
                                </div>
                                <div className="videoBrief">
                                    咖喱味神片 双重谋杀案
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

function NavVideo() {
    const navVideoImageArray = [
        'c12970fcbd71411492d9e49c4bc72737',
        '1af7178c69af491e980f82faf52a866d',
        '244a734e73054369b030502b84f95486',
        '287a6eb67dd2401b9fcbe563191f8722',
        '1098f31c65764a1ba63c4613fa5935b0',
        '657144a4621f43bd8b5ad41b463e7e50',
        '9413796fb66d4c42a5b3c71ba6fddfbf',
        'edc894cde3b74369aa2627fa7c9c04f1',
        'b98f632af33a45bdac0607a6fa4e3f12'
    ];
    const navVideoImageObj = navVideoImageArray.map(item => require("../assets/images/home/navVideo/" + item + ".jpg"));

    return (
        <div className="navVideo">
            <div className="navVideoTop">
                <div className="navVideoTitle">
                    <a href="#">剧集</a>
                </div>
                <div className="navVideoTabs">
                    <div className="navVideoTab">
                        最新
                        <div className="tabActivateLine" style={{background: "dodgerblue"}}>
                        </div>
                    </div>
                    <div className="navVideoTab">
                        大陆剧
                        <div className="tabActivateLine">
                        </div>
                    </div>
                    <div className="navVideoTab">
                        日韩剧
                        <div className="tabActivateLine">
                        </div>
                    </div>
                    <div className="navVideoTab">
                        港台剧
                        <div className="tabActivateLine">
                        </div>
                    </div>
                    <div className="navVideoTab">
                        英美剧
                        <div className="tabActivateLine">
                        </div>
                    </div>
                </div>
            </div>
            <div className="navVideoBlocks">
                <Container style={{width:"100%", maxWidth: "100%", minWidth: 1000}}>
                    <Row>
                        <Col xs={4}>
                            <div className="navVideoBlockLeader">
                                <img src={navVideoImageObj[0]} alt="图片加载失败"/>
                                <div className="navVideoBrief">
                                    <a href="#">鹤唳华亭</a>
                                    <div>
                                        五十度鹤！太子“肉身”试探路文昔
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col xs={2}>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[1]} alt="图片加载失败"/>
                                <a href="#">第二次-醉酒告白</a>
                                <div>
                                    安娜亲吻潜伏却被徐朗撞见
                                </div>
                            </div>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[5]} alt="图片加载失败"/>
                                <a href="#">未经安排-有点甜</a>
                                <div>
                                    小公举公然撒狗粮追爱小哥哥
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[2]} alt="图片加载失败"/>
                                <a href="#">告别-黑帮</a>
                                <div>
                                    替妹复仇！尹哲对刚光头
                                </div>
                            </div>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[6]} alt="图片加载失败"/>
                                <a href="#">青春抛物线-超甜</a>
                                <div>
                                    妹妹受委屈 哥哥暖心安慰
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[3]} alt="图片加载失败"/>
                                <a href="#">热爱-怒气值爆表</a>
                                <div>
                                    老丈人火帽三丈怒打女婿
                                </div>
                            </div>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[7]} alt="图片加载失败"/>
                                <a href="#">栋仁-会员看全集</a>
                                <div>
                                    袁伟豪昏迷 唐诗咏深情告白
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[4]} alt="图片加载失败"/>
                                <a href="#">我怕来不及-温情</a>
                                <div>
                                    老戏骨上演矿工版“大江大河”
                                </div>
                            </div>
                            <div className="navVideoBlock">
                                <img src={navVideoImageObj[8]} alt="图片加载失败"/>
                                <a href="#">澳门人家</a>
                                <div>
                                    任达华董洁演绎老街往事
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

function HomeFooter() {
    return (
        <div className="homeFooter">
            <div>

            </div>
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
                <Hit/>
                <NavVideo/>
                <HomeFooter/>
            </div>
        )
    }
}



export default Home