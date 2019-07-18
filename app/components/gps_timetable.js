import React, { Component } from 'react'
import { Button } from 'antd'
import newsUp from '../images/newsUp.png'
import PBright from '../images/PBright.png'
import "./gps_timetable.css"


export default class GPS extends Component {
    render() {
        return (
            <div>
                <section id="gps_timetable" className="section gps">
                    <div className="section-content ">
                        <div className="GPSnTime">
                            <div className="GPSBlock">
                                <div onClick={() => window.open("http://med.tori.narlabs.org.tw/Ship/gpsOutput/showGPStMap.php")}>
                                    <div className="gpsTitle">
                                        <span>想知道航行進度 ?</span>
                                        <span>點我看船隻位置 !</span>
                                    </div>
                                    <div className="gpsLocation">
                                        開啟GPS定位
                                    </div>
                                </div>
                            </div>
                            <div className="timeTableBlock">
                                <div className="timeTable">
                                    <div>
                                        <img src={newsUp} alt="chart" />
                                    </div>
                                    <div className="programnews">
                                        <div style={{ margin: "35px" }}>
                                            <h5 style={{ marginBottom: "unset", color: "#FFF" }}>{"即時訊息 : "}</h5>
                                            <h6 style={{ marginBottom: "unset", color: "#FFF" }}>{this.props.programNews}</h6>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <div
                                            className="programButton"
                                            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1sAEsifwTcuck1DE8JCdlRXFb-VtsWTjvp6v28Mh6BXQ/edit?usp=sharing")}
                                        >
                                            節目表
                                        </div>
                                        <img style={{ width: "45%" }} src={PBright} alt="wave" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
