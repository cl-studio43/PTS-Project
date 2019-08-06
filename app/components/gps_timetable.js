import React, { Component } from 'react'
import { Button } from 'antd'
import newsUp from '../images/newsUp.png'
import PBright from '../images/PBright.png'
import "./gps_timetable.css"
import gpsR from '../images/gps_R.png'
import gpsL from '../images/gps_L.png'


export default class GPS extends Component {
    render() {
        return (
            <div>
                <section id="gps_timetable" className="section gps">
                    <div className="section-content ">
                        <div className="gpsphone">
                            <div >
                                <div style={{width: "90%", margin:"0 auto"}} >
                                    <img src={gpsL} alt="map" />
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
                                                style={{ width: "50%"}}
                                            >
                                                <img src={gpsR} alt="wave" />
                                        </div>
                                            <img style={{ width: "45%" }} src={PBright} alt="wave" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gpsweb">
                            <div className="GPSnTime">
                                <div className="GPSBlock">
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
                                            <img className="programButton" src={gpsR} alt="wave" />
                                            <img style={{ width: "45%" }} src={PBright} alt="wave" />
                                        </div>
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
