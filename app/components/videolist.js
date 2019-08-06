import React, { Component } from 'react'
import { Modal, Icon, Card } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./videolist.css"
import "./oceanwiki.css"
import img72201 from "../images/722-1.jpg"
import img72202 from "../images/722-2.jpg"
import img72203 from "../images/722-3.jpg"
import img72204 from "../images/722-4.jpg"
import img72205 from "../images/722-5.jpg"
import img72206 from "../images/722-6.jpg"
import img72301 from "../images/723-1.jpg"
import img72302 from "../images/723-2.jpg"
import img72303 from "../images/723-3.jpg"
import img72304 from "../images/723-4.jpg"
import img72305 from "../images/723-5.jpg"
import img72306 from "../images/723-6.jpg"
import img72307 from "../images/723-7.jpg"
import img72308 from "../images/723-8.jpg"
import img72309 from "../images/723-9.jpg"
import img72310 from "../images/723-10.jpg"
import img72401 from "../images/724-1.jpg"
import img72402 from "../images/724-2.jpg"
import img72403 from "../images/724-3.jpg"
import img72404 from "../images/724-4.jpg"
import img72405 from "../images/724-5.jpg"
import img72406 from "../images/724-6.jpg"
import img72407 from "../images/724-7.jpg"
import img72408 from "../images/724-8.jpg"
import img72409 from "../images/724-9.jpg"
import img72501 from "../images/725-1.jpg"
import img72502 from "../images/725-2.jpg"
import img72503 from "../images/725-3.jpg"
import img72504 from "../images/725-4.jpg"
import img72505 from "../images/725-5.jpg"
import img72506 from "../images/725-6.jpg"
import img72507 from "../images/725-7.jpg"
import img72601 from "../images/726-1.jpg"
import img72602 from "../images/726-2.jpg"
import img7260201 from "../images/726-2-1.jpg"
import img72603 from "../images/726-3.jpg"
import img72604 from "../images/726-4.jpg"
import img72605 from "../images/726-5.jpg"
import img72606 from "../images/726-6.jpg"
import img72607 from "../images/726-7.jpg"
import img72608 from "../images/726-8.jpg"
import img72609 from "../images/726-9.jpg"
import img72610 from "../images/726-10.jpg"
import img72611 from "../images/726-11.jpg"


const { Meta } = Card;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><Icon type="right" /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><Icon type="left" /></div>
    );
}

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentModal: 0,
        };
    }

    toggleModal = (index) => {
        this.setState({
            visible: true,
            currentModal: index,
        });
    };
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const cardVideo = [
            //Day1
            {
                "iframe": <iframe title="title1" src="https://www.youtube.com/embed/6G0METcElyM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">出發前的航海報告</h5>,
            },
            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/yCSQKZ1L_ys" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">引水人上船，準備出港</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/sQJxdIbmFRs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">第一課，求生、消防演習</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/Wqe9lxzZ_nE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">為什麼要做108小時直播呢？</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/1mzQXG__QW0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">特別節目連線彩排</h5>,
            },
            {
                "iframe": <iframe title="title6" src="https://www.youtube.com/embed/928azEk73BE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">明天任務會怎麼進行呢？</h5>,
            },

            //Day2
            {
                "iframe": <iframe title="title1" src="https://www.youtube.com/embed/bsq9ApNo04Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">金黃色的日出</h5>,
            },
            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/CXBFKkGuOBQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">劉紹勇航海報告-今日海象如何？</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/GYsAyyYGn3s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">動態定位系統測試</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/iNTfu9YLDPM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">勵進聊天室-操控ROV的幕後之手</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/wz0SJUKgM1w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深海講堂-劉莉蓮(熱泉生態)</h5>,
            },
            {
                "iframe": <iframe title="title6" src="https://www.youtube.com/embed/DpdpeHWX2Ok" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV前面裝的是什麼？</h5>,
            },
            {
                "iframe": <iframe title="title7" src="https://www.youtube.com/embed/vH8G9tJTcrU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV執行任務去</h5>,
            },
            {
                "iframe": <iframe title="title8" src="https://www.youtube.com/embed/10odP__5Wb8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">檢視深海標本</h5>,
            },
            {
                "iframe": <iframe title="title9" src="https://www.youtube.com/embed/YBIWbEgntyM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">劉紹勇航海報告-明天勵進任務是？</h5>,
            },
            {
                "iframe": <iframe title="title10" src="https://www.youtube.com/embed/8m4keZxseW8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深夜食堂突擊！</h5>,
            },

            //Day3
            {
                "iframe": <iframe title="title1" src="https://www.youtube.com/embed/voY-jQ4hpqg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">躲在雲層中的日頭</h5>,
            },
            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/iWRsjnTRC00" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">勵進聊天室-黃奕霖(衛星傳輸)</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/1NHyXRkZNUg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV下水前，研究人員在幹嘛</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/fyXrAVKhiUo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV下水執行任務</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/BZ2wTFbwLFk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV採集樣本整理</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/BAYsdnFw1Lw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">太陽下山囉~今晚吃什麼？</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/CzBE7C999gw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV怎麼了，原來是它</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/EOm0OOr-0J4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深海講堂-劉莉蓮(冷泉生態)</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/q7eVPY-07pU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">夜未眠的海上研究室</h5>,
            },

            //Day4
            {
                "iframe": <iframe title="title1" src="https://www.youtube.com/embed/GHzOsTw8xGk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">太陽躲在雲層後</h5>,
            },
            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/4APItDURy0U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">ROV兩度下水仍有狀況</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/Se1sOSQfGQU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">研究人員心得分享</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/A-Mdp5Vvtj8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">HI!深海連線中</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/8o50LD_diSs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">餘暉落日伴勵進</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/5QQXws92Dwg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深海講堂-何宣慶(深海生物)</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/_xathaWK0p0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">勵進聊天室-與ROV駕駛員面對面</h5>,
            },

            //Day5
            {
                "iframe": <iframe title="title1" src="https://www.youtube.com/embed/FDgHYOSNBYw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">大大的日頭出來了</h5>,
            },
            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/0HQYXv0OQR4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">船長，我們現在到哪了？</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/kBaLI-CzZU8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">豐富的早餐是活力來源</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/W0BNTtZzcPo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">海上大廚怎麼料理的？</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/Z-gU3NIDR6c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">劉莉蓮、何宣慶兩位老師有什麼發現？</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/C7onE1mR864" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">台灣西海岸，看見六輕</h5>,
            },

            {
                "iframe": <iframe title="title2" src="https://www.youtube.com/embed/kNZhSB26ICU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深海講堂-徐達偉(台灣地科教室)</h5>,
            },
            {
                "iframe": <iframe title="title3" src="https://www.youtube.com/embed/pudRBcOiQrU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">航程就要結束，研究人員有什麼成果？</h5>,
            },
            {
                "iframe": <iframe title="title4" src="https://www.youtube.com/embed/WFNTw7IZk4o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">深海講堂-許鶴瀚(海底地形)</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/LXlmlWvvnyc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">認識勵進研究船</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/efVx2BEUYtY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">在夕色中歸航</h5>,
            },
            {
                "iframe": <iframe title="title5" src="https://www.youtube.com/embed/5H05kJUqgtc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                "title": <h5 className="keyWordsTitle">空中看勵進研究船</h5>,
            }
        ];
        let windosWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        let cardWidth = windosWidth > 550
            ? "55vw"
            : "74vw"


        return (
            <div>
                <section id="videolist" className="section wiki">
                    <h2 className="text-center oceanphoneTitle">航海筆記</h2>
                    <div className="videoListInfo">
                        <p className="contents">
                            2019.7.22 第一日，天氣晴，勵進研究船從台南安平港出發。此次任務要去台灣東北海域，透過ROV水下遙控載具，下潛千米，尋找海底黑煙囪，研究船上有地質、魚類、貝類及礦物等各領域的研究學者，希望全面了解熱液噴泉的地質及生態現況，現在我們就要啟航囉…....
                        </p>
                    </div>
                    <div className="section-content oceanWikiContent marginB">

                        <div className="slider oceanWikiSlider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(0)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="出發前的航海報告" src={img72201} />}
                                >
                                    <Meta title="出發前的航海報告" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(1)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="引水人上船，準備出港" src={img72202} />}
                                >
                                    <Meta title="引水人上船，準備出港" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(2)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="第一課，求生、消防演習" src={img72203} />}
                                >
                                    <Meta title="第一課，求生、消防演習" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(3)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="為什麼要做108小時直播呢？" src={img72204} />}
                                >
                                    <Meta title="為什麼要做108小時直播呢？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(4)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="特別節目連線彩排" src={img72205} />}
                                >
                                    <Meta title="特別節目連線彩排" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(5)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="明天任務會怎麼進行呢？" src={img72206} />}
                                >
                                    <Meta title="明天任務會怎麼進行呢？" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(0)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="出發前的航海報告" src={img72201} />}
                                >
                                    <Meta title="出發前的航海報告" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(1)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="引水人上船，準備出港" src={img72202} />}
                                >
                                    <Meta title="引水人上船，準備出港" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(2)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="第一課，求生、消防演習" src={img72203} />}
                                >
                                    <Meta title="第一課，求生、消防演習" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(3)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="為什麼要做108小時直播呢？" src={img72204} />}
                                >
                                    <Meta title="為什麼要做108小時直播呢？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(4)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="特別節目連線彩排" src={img72205} />}
                                >
                                    <Meta title="特別節目連線彩排" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(5)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="明天任務會怎麼進行呢？" src={img72206} />}
                                >
                                    <Meta title="明天任務會怎麼進行呢？" />
                                </Card>
                            </Slider>
                        </div>
                        <div >
                            <Modal
                                title={
                                    <div style={{ color: "#12436a !important" }}>
                                        {cardVideo[this.state.currentModal].title}
                                    </div>}
                                visible={this.state.visible}
                                footer={null}
                                width={cardWidth}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                bodyStyle={{ backgroundColor: "#fff" }}
                                destroyOnClose={true}
                            >
                                <div className="videoContainer">
                                    {cardVideo[this.state.currentModal].iframe}
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="videoListInfo">
                        <p className="contents">
                            2019.7.23 第二日，ROV下水。從海上看日出特別美，研判海象狀況允許的話，ROV(水下遙控無人載具)就有機會下水執行任務，不過，ROV要精準佈放，就得倚靠勵進研究船的法寶﹣動態定位系統，在施放前還要先進行系統測試，並且仔細評估海流狀況，嗯~一切順利可以下放了…...
                            </p>
                    </div>
                    <div className="section-content oceanWikiContent marginB">

                        <div className="slider oceanWikiSlider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(6)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="金黃色的日出" src={img72301} />}
                                >
                                    <Meta title="金黃色的日出" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(7)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉紹勇航海報告-今日海象如何？" src={img72302} />}
                                >
                                    <Meta title="劉紹勇航海報告-今日海象如何？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(8)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="動態定位系統測試" src={img72303} />}
                                >
                                    <Meta title="動態定位系統測試" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(9)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-操控ROV的幕後之手" src={img72304} />}
                                >
                                    <Meta title="勵進聊天室-操控ROV的幕後之手" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(10)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-劉莉蓮(熱泉生態)" src={img72305} />}
                                >
                                    <Meta title="深海講堂-劉莉蓮(熱泉生態)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(11)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV前面裝的是什麼？" src={img72306} />}
                                >
                                    <Meta title="ROV前面裝的是什麼？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(12)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV執行任務去" src={img72307} />}
                                >
                                    <Meta title="ROV執行任務去" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(13)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="檢視深海標本" src={img72308} />}
                                >
                                    <Meta title="檢視深海標本" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(14)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉紹勇航海報告-明天勵進任務是？" src={img72309} />}
                                >
                                    <Meta title="劉紹勇航海報告-明天勵進任務是？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(15)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深夜食堂突擊！" src={img72310} />}
                                >
                                    <Meta title="深夜食堂突擊！" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(6)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="金黃色的日出" src={img72301} />}
                                >
                                    <Meta title="金黃色的日出" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(7)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉紹勇航海報告-今日海象如何？" src={img72302} />}
                                >
                                    <Meta title="劉紹勇航海報告-今日海象如何？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(8)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="動態定位系統測試" src={img72303} />}
                                >
                                    <Meta title="動態定位系統測試" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(9)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-操控ROV的幕後之手" src={img72304} />}
                                >
                                    <Meta title="勵進聊天室-操控ROV的幕後之手" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(10)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-劉莉蓮(熱泉生態)" src={img72305} />}
                                >
                                    <Meta title="深海講堂-劉莉蓮(熱泉生態)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(11)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV前面裝的是什麼？" src={img72306} />}
                                >
                                    <Meta title="ROV前面裝的是什麼？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(12)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV執行任務去" src={img72307} />}
                                >
                                    <Meta title="ROV執行任務去" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(13)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="檢視深海標本" src={img72308} />}
                                >
                                    <Meta title="檢視深海標本" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(14)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉紹勇航海報告-明天勵進任務是？" src={img72309} />}
                                >
                                    <Meta title="劉紹勇航海報告-明天勵進任務是？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(15)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深夜食堂突擊！" src={img72310} />}
                                >
                                    <Meta title="深夜食堂突擊！" />
                                </Card>
                            </Slider>
                        </div>
                        <div >
                            <Modal
                                title={
                                    <div style={{ color: "#12436a !important" }}>
                                        {cardVideo[this.state.currentModal].title}
                                    </div>}
                                visible={this.state.visible}
                                footer={null}
                                width={cardWidth}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                bodyStyle={{ backgroundColor: "#fff" }}
                                destroyOnClose={true}
                            >
                                <div className="videoContainer">
                                    {cardVideo[this.state.currentModal].iframe}
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="videoListInfo">
                            <p className="contents">
                                2019.7.24 第三日，發現海底黑煙囪！早晨雲層厚，還下起小雨，幸好沒多久，太陽露臉了。在海流條件允許下，決定再度施放ROV，在下潛1400米左右，找到貌似金牛角的海底黑煙囪，上面還有許多貽貝與鎧甲蝦，這是台灣首次完整記錄黑煙囪的全貌，讓整個研究團隊興奮起來…
                            </p>
                        </div>
                    <div className="section-content oceanWikiContent marginB">
                        
                        <div className="slider oceanWikiSlider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(16)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="躲在雲層中的日頭" src={img72401} />}
                                >
                                    <Meta title="躲在雲層中的日頭" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(17)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-黃奕霖(衛星傳輸)" src={img72402} />}
                                >
                                    <Meta title="勵進聊天室-黃奕霖(衛星傳輸)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(18)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV下水前，研究人員在幹嘛" src={img72403} />}
                                >
                                    <Meta title="ROV下水前，研究人員在幹嘛" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(19)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV下水執行任務" src={img72404} />}
                                >
                                    <Meta title="ROV下水執行任務" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(20)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV採集樣本整理" src={img72405} />}
                                >
                                    <Meta title="ROV採集樣本整理" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(21)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="太陽下山囉~今晚吃什麼？" src={img72406} />}
                                >
                                    <Meta title="太陽下山囉~今晚吃什麼？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(22)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV怎麼了，原來是它" src={img72407} />}
                                >
                                    <Meta title="ROV怎麼了，原來是它" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(23)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-劉莉蓮(冷泉生態)" src={img72408} />}
                                >
                                    <Meta title="深海講堂-劉莉蓮(冷泉生態)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(24)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="夜未眠的海上研究室" src={img72409} />}
                                >
                                    <Meta title="夜未眠的海上研究室" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(16)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="躲在雲層中的日頭" src={img72401} />}
                                >
                                    <Meta title="躲在雲層中的日頭" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(17)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-黃奕霖(衛星傳輸)" src={img72402} />}
                                >
                                    <Meta title="勵進聊天室-黃奕霖(衛星傳輸)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(18)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV下水前，研究人員在幹嘛" src={img72403} />}
                                >
                                    <Meta title="ROV下水前，研究人員在幹嘛" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(19)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV下水執行任務" src={img72404} />}
                                >
                                    <Meta title="ROV下水執行任務" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(20)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV採集樣本整理" src={img72405} />}
                                >
                                    <Meta title="ROV採集樣本整理" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(21)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="太陽下山囉~今晚吃什麼？" src={img72406} />}
                                >
                                    <Meta title="太陽下山囉~今晚吃什麼？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(22)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV怎麼了，原來是它" src={img72407} />}
                                >
                                    <Meta title="ROV怎麼了，原來是它" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(23)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-劉莉蓮(冷泉生態)" src={img72408} />}
                                >
                                    <Meta title="深海講堂-劉莉蓮(冷泉生態)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(24)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="夜未眠的海上研究室" src={img72409} />}
                                >
                                    <Meta title="夜未眠的海上研究室" />
                                </Card>
                            </Slider>
                        </div>
                        <div >
                            <Modal
                                title={
                                    <div style={{ color: "#12436a !important" }}>
                                        {cardVideo[this.state.currentModal].title}
                                    </div>}
                                visible={this.state.visible}
                                footer={null}
                                width={cardWidth}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                bodyStyle={{ backgroundColor: "#fff" }}
                                destroyOnClose={true}
                            >
                                <div className="videoContainer">
                                    {cardVideo[this.state.currentModal].iframe}
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="videoListInfo">
                            <p className="contents">
                                2019.7.25 第四日，深海研究挑戰多。從事海上研究工作充滿各種變數，天氣變化多端是常態，有時，萬事俱備獨欠東風。這趟航次大多時候風平浪靜；但，偏偏ROV遇上難以在船上修復的問題，必須提早結束任務返航，這時就放寬心看看夕陽吧~每次出發都會有些收穫的！
                            </p>
                        </div>
                    <div className="section-content oceanWikiContent marginB">
                        
                        <div className="slider oceanWikiSlider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(25)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="太陽躲在雲層後" src={img72501} />}
                                >
                                    <Meta title="太陽躲在雲層後" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(26)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV兩度下水仍有狀況" src={img72502} />}
                                >
                                    <Meta title="ROV兩度下水仍有狀況" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(27)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="研究人員心得分享" src={img72503} />}
                                >
                                    <Meta title="研究人員心得分享" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(28)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="HI!深海連線中" src={img72504} />}
                                >
                                    <Meta title="HI!深海連線中" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(29)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="餘暉落日伴勵進" src={img72505} />}
                                >
                                    <Meta title="餘暉落日伴勵進" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(30)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-何宣慶(深海生物)" src={img72506} />}
                                >
                                    <Meta title="深海講堂-何宣慶(深海生物)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(31)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-與ROV駕駛員面對面" src={img72507} />}
                                >
                                    <Meta title="勵進聊天室-與ROV駕駛員面對面" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(25)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="太陽躲在雲層後" src={img72501} />}
                                >
                                    <Meta title="太陽躲在雲層後" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(26)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="ROV兩度下水仍有狀況" src={img72502} />}
                                >
                                    <Meta title="ROV兩度下水仍有狀況" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(27)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="研究人員心得分享" src={img72503} />}
                                >
                                    <Meta title="研究人員心得分享" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(28)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="HI!深海連線中" src={img72504} />}
                                >
                                    <Meta title="HI!深海連線中" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(29)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="餘暉落日伴勵進" src={img72505} />}
                                >
                                    <Meta title="餘暉落日伴勵進" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(30)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-何宣慶(深海生物)" src={img72506} />}
                                >
                                    <Meta title="深海講堂-何宣慶(深海生物)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(31)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="勵進聊天室-與ROV駕駛員面對面" src={img72507} />}
                                >
                                    <Meta title="勵進聊天室-與ROV駕駛員面對面" />
                                </Card>
                            </Slider>
                        </div>
                        <div >
                            <Modal
                                title={
                                    <div style={{ color: "#12436a !important" }}>
                                        {cardVideo[this.state.currentModal].title}
                                    </div>}
                                visible={this.state.visible}
                                footer={null}
                                width={cardWidth}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                bodyStyle={{ backgroundColor: "#fff" }}
                                destroyOnClose={true}
                            >
                                <div className="videoContainer">
                                    {cardVideo[this.state.currentModal].iframe}
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className="videoListInfo">
                            <p className="contents">
                                2019.7.26 第五日，映著夕浪歸航。任務結束，每個人的表情放鬆不少，緊盯著儀器的眼神終於轉向大海，今天的日出很美，船長說有看到一群海豚游過去，可惜不是白的，沿途西海岸讓人印象最深的就是六輕離島工業區，沒想到我們從海底黑煙囪看到陸地大煙囪…
                            </p>
                        </div>
                    <div className="section-content oceanWikiContent marginB">
                        
                        <div className="slider oceanWikiSlider phone">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(32)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="大大的日頭出來了" src={img72601} />}
                                >
                                    <Meta title="大大的日頭出來了" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(33)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="船長，我們現在到哪了？" src={img72602} />}
                                >
                                    <Meta title="船長，我們現在到哪了？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(34)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="豐富的早餐是活力來源" src={img7260201} />}
                                >
                                    <Meta title="豐富的早餐是活力來源" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(35)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="海上大廚怎麼料理的？" src={img72603} />}
                                >
                                    <Meta title="海上大廚怎麼料理的？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(36)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉莉蓮、何宣慶兩位老師有什麼發現？" src={img72604} />}
                                >
                                    <Meta title="劉莉蓮、何宣慶兩位老師有什麼發現？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(37)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="台灣西海岸，看見六輕" src={img72605} />}
                                >
                                    <Meta title="台灣西海岸，看見六輕" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(38)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-徐達偉(台灣地科教室)" src={img72606} />}
                                >
                                    <Meta title="深海講堂-徐達偉(台灣地科教室)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(39)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="航程就要結束，研究人員有什麼成果？" src={img72607} />}
                                >
                                    <Meta title="航程就要結束，研究人員有什麼成果？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(40)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-許鶴瀚(海底地形)" src={img72608} />}
                                >
                                    <Meta title="深海講堂-許鶴瀚(海底地形)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(41)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="認識勵進研究船" src={img72609} />}
                                >
                                    <Meta title="認識勵進研究船" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(42)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="在夕色中歸航" src={img72610} />}
                                >
                                    <Meta title="在夕色中歸航" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(43)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="空中看勵進研究船" src={img72611} />}
                                >
                                    <Meta title="空中看勵進研究船" />
                                </Card>
                            </Slider>
                        </div>
                        <div className="slider web">
                            <Slider {...settings}>
                                <Card
                                    onClick={() => this.toggleModal(32)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="大大的日頭出來了" src={img72601} />}
                                >
                                    <Meta title="大大的日頭出來了" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(33)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="船長，我們現在到哪了？" src={img72602} />}
                                >
                                    <Meta title="船長，我們現在到哪了？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(34)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="豐富的早餐是活力來源" src={img7260201} />}
                                >
                                    <Meta title="豐富的早餐是活力來源" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(35)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="海上大廚怎麼料理的？" src={img72603} />}
                                >
                                    <Meta title="海上大廚怎麼料理的？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(36)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="劉莉蓮、何宣慶兩位老師有什麼發現？" src={img72604} />}
                                >
                                    <Meta title="劉莉蓮、何宣慶兩位老師有什麼發現？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(37)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="台灣西海岸，看見六輕" src={img72605} />}
                                >
                                    <Meta title="台灣西海岸，看見六輕" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(38)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-徐達偉(台灣地科教室)" src={img72606} />}
                                >
                                    <Meta title="深海講堂-徐達偉(台灣地科教室)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(39)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="航程就要結束，研究人員有什麼成果？" src={img72607} />}
                                >
                                    <Meta title="航程就要結束，研究人員有什麼成果？" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(40)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="深海講堂-許鶴瀚(海底地形)" src={img72608} />}
                                >
                                    <Meta title="深海講堂-許鶴瀚(海底地形)" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(41)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="認識勵進研究船" src={img72609} />}
                                >
                                    <Meta title="認識勵進研究船" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(42)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="在夕色中歸航" src={img72610} />}
                                >
                                    <Meta title="在夕色中歸航" />
                                </Card>
                                <Card
                                    onClick={() => this.toggleModal(43)}
                                    hoverable={true}
                                    style={{ width: 240 }}
                                    cover={<img alt="空中看勵進研究船" src={img72611} />}
                                >
                                    <Meta title="空中看勵進研究船" />
                                </Card>
                            </Slider>
                        </div>
                        <div >
                            <Modal
                                title={
                                    <div style={{ color: "#12436a !important" }}>
                                        {cardVideo[this.state.currentModal].title}
                                    </div>}
                                visible={this.state.visible}
                                footer={null}
                                width={cardWidth}
                                zIndex={1500}
                                onCancel={this.handleCancel}
                                bodyStyle={{ backgroundColor: "#fff" }}
                                destroyOnClose={true}
                            >
                                <div className="videoContainer">
                                    {cardVideo[this.state.currentModal].iframe}
                                </div>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
