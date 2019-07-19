import React, { Component } from 'react'
import './guesscard.css'
import { Modal, Icon } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import guessCard1Q from  "../images/guessCard1Q.jpg"
import guessCard2Q from  "../images/guessCard2Q.jpg"
import guessCard3Q from  "../images/guessCard3Q.jpg"
import guessCard4Q from  "../images/guessCard4Q.jpg"
import guessCard5Q from  "../images/guessCard5Q.jpg"
import guessCard6Q from  "../images/guessCard6Q.jpg"
import guessCard7Q from  "../images/guessCard7Q.jpg"
import guessCard8Q from  "../images/guessCard8Q.jpg"
import guessCard9Q from  "../images/guessCard9Q.jpg"
import guessCard1A from  "../images/guessCard1A.jpg"
import guessCard2A from  "../images/guessCard2A.jpg"
import guessCard3A from  "../images/guessCard3A.jpg"
import guessCard4A from  "../images/guessCard4A.jpg"
import guessCard5A from  "../images/guessCard5A.jpg"
import guessCard6A from  "../images/guessCard6A.jpg"
import guessCard7A from  "../images/guessCard7A.jpg"
import guessCard8A from  "../images/guessCard8A.jpg"
import guessCard9A from  "../images/guessCard9A.jpg"


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

export default class GuessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: 0,
            visible: false,
        };
    }

    toggleModal = (index) => {
        this.setState({
            visible: true,
            currentModal: index,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
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
                        arrows:false,
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const cardAnswer = [
            <img className="modalIImg" src={guessCard1A} alt="擬寄居蟹" />,
            <img className="modalIImg" src={guessCard2A} alt="甘氏巨螯蟹" />,
            <img className="modalIImg" src={guessCard3A} alt="叉齒鰆" />,
            <img className="modalIImg" src={guessCard4A} alt="深海蛇尾" />,
            <img className="modalIImg" src={guessCard5A} alt="深海鰩" />,
            <img className="modalIImg" src={guessCard6A} alt="盲鰻" />,
            <img className="modalIImg" src={guessCard7A} alt="深海帆魷" />,
            <img className="modalIImg" src={guessCard8A} alt="深海仿刺鎧蝦-" />,
            <img className="modalIImg" src={guessCard9A} alt="巧戎" />
        ]
        return (
            <div>
                <section id="guesscard" className="section guesscard">
                    <h2 className="text-center guessCardPhoneTitle">猜猜我是誰</h2>
                    <div className="phone">
                        <div className="info">
                            <p className="contents">
                            為了生存，深海生物們個個具有獨特生存本事。
                            </p>
                            <p className="contents">
                            食物稀少，得靠利齒大嘴，才能一口吞食獵物；為了適應高壓，或增加覓食優勢，演化成體型巨大；
                            暗不見光，所以眼睛特化、嗅覺敏銳；為引誘獵物、迷惑敵人，發光也能是利器。
                            </p>
                        </div>
                    </div>
                    <div className="web">
                        <div className="info">
                            <p className="contents">
                            在深海，生物要活下來，需要具備獨特的生存本事。
                            </p>
                            <p className="contents">
                            食物稀少，要靠利齒大嘴，才能快速一口咬下，吞食獵物；為增加覓食優勢，演化成體型巨大；沒有陽光黑漆漆，不能倚賴視覺，所以眼睛特化，嗅覺敏銳；要引誘獵物、迷惑敵人或找尋配偶，於是身上配置發光器。
                            深海生物們，牠們的奇特，超乎你的想像，來猜猜看，這是哪位呢？
                            </p>
                        </div>
                    </div>


                    <div className="section-content guessCardContent">
                        <div className="slider guessCardSlider">
                            <Slider {...settings}>
                                <div className="card">
                                    <img
                                        src={guessCard1Q}
                                        alt="擬寄居蟹"
                                        onClick={() => this.toggleModal(0)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard2Q}
                                        alt="甘氏巨螯蟹"
                                        onClick={() => this.toggleModal(1)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard3Q}
                                        alt="叉齒鰆"
                                        onClick={() => this.toggleModal(2)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard4Q}
                                        alt="深海蛇尾"
                                        onClick={() => this.toggleModal(3)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard5Q}
                                        alt="深海鰩"
                                        onClick={() => this.toggleModal(4)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard6Q}
                                        alt="盲鰻"
                                        onClick={() => this.toggleModal(5)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard7Q}
                                        alt="深海帆魷"
                                        onClick={() => this.toggleModal(6)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard8Q}
                                        alt="深海仿刺鎧蝦-"
                                        onClick={() => this.toggleModal(7)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src={guessCard9Q}
                                        alt="巧戎"
                                        onClick={() => this.toggleModal(8)}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <Modal
                            title={null}
                            visible={this.state.visible}
                            footer={null}
                            zIndex={1500}
                            onCancel={this.handleCancel}
                            bodyStyle={{ height: "100vh", width: "100%" }}
                            width="unset"
                        >
                            <div className="modalIframe" >
                                {cardAnswer[this.state.currentModal]}
                            </div>

                        </Modal>
                    </div>
                </section>
            </div>
        )
    }
}
