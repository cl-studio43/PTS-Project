import React, { Component } from 'react'
import CoverVideo from "../videos/coverVideo1.mp4"
import Scrollchor from "react-scrollchor";
import Cover from 'react-video-cover';
import ScrollchorItem from "./scrollchor-item";
import Scrollspy from "react-scrollspy";
import "./landingpage.css"
import titleIcon from "../images/titleIcon.png"
import liveIcon from "../images/liveIcon.png"
import { Row, Col } from 'antd'

const style = {
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: -1,
    justifyContent: "center",
    display: "flex"
};

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasScrolledDown: false,
            isOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const bodyScrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
        this.setState({
            hasScrolledDown: scrolledDownEnough
        });
    }

    render() {
        const videoOptions = {
            src: CoverVideo,
            autoPlay: true,
            muted: true,
            loop: true,
        };

        return (
            <div id='#top'>
                <div style={style} >
                    <Cover
                        videoOptions={videoOptions}
                        remeasureOnWindowResize
                    />
                    <div className="coverTitleBlock">
                        <div className="coverTitleBlockRow">
                            <div className="coverTitleBlockCol">
                                <div className="Landingtitle" >
                                    <img src={titleIcon} alt="尋找深海黑煙囪" />
                                </div>
                                <div className="LandingnewsBlock" >
                                    <div className="Landingnews">
                                        <h6 style={{ marginBottom: "unset", color: "#FFF" }}>{"即時訊息 : "}</h6>
                                        <p style={{ marginBottom: "unset" }}>{this.props.programNews}</p>
                                    </div>
                                    <div className="Landingarrow animated bounceInDown">
                                        <Scrollchor to="#livestream" className="btn liveIcon" animate={{ duration: 500 }}>
                                            <img src={liveIcon} alt="尋找深海黑煙囪" />
                                        </Scrollchor>
                                    </div>
                                </div>
                            </div>
                            <div className="Landingmenu">
                                <Scrollspy
                                    items={["about", "gps_timetable", "livestream", "videolist", "oceanwiki", "guesscard"]}
                                    currentClassName="active"
                                    className={` ml-auto navbar-nav`}
                                    style={{ padding: "0 15px" }}
                                    navbar
                                >
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#about" className="nav-link">
                                            主題企劃
                                        </ScrollchorItem>
                                    </div>
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#gps_timetable" className="nav-link">
                                            GPS / 節目表
                                            </ScrollchorItem>
                                    </div>
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#livestream" className="nav-link">
                                            深海研究直播
                                            </ScrollchorItem>
                                    </div>
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#videolist" className="nav-link">
                                            航海筆記
                                            </ScrollchorItem>
                                    </div>
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#oceanwiki" className="nav-link">
                                            深海探險去
                                            </ScrollchorItem>
                                    </div>
                                    <div className="listItem" onClick={this.handleCloseCollapse}>
                                        <ScrollchorItem to="#guesscard" className="nav-link">
                                            猜猜我是誰
                                            </ScrollchorItem>
                                    </div>
                                </Scrollspy>
                            </div>
                        </div>
                    </div>
                    <div className="LandingnewArrow animated bounceInDown">
                        <Scrollchor to="#about" className="newBtn" animate={{ duration: 500 }}>
                            <i style={{ border: "3px solid rgba(255, 255, 255, 0.8)", borderRadius: "999em", padding: "4px"}} class="fa fa-chevron-down"></i>
                            </Scrollchor>
                </div>
            </div>
            </div >
        );
    }
}

export default LandingPage
