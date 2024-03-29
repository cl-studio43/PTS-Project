import React, { Component } from 'react'
import "./about.css"

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about" className="section aboutBG">
                    <div className="section-content" style={{textShadow: "2px 1px 0px rgba(18, 67, 106, 1)"}}>
                        <div className="phone">
                            <div className="wordBlockPhone">
                                <h5 className="aboutTitle">
                                    深海，是什麼樣的世界呢？
                                </h5>
                                <h5 className="aboutTitle">
                                    科學家們亟欲解密。
                                </h5>
                                <p className="paragraph1">
                                7/22起連續五天，公視將全程網路直播深海研究過程，並且在電視播出兩小時特別節目。我們將搭乘勵進研究船，前往台灣東北海域，和國研院海洋中心、經濟部中央地調所共同合作，透過ROV水下遙控載具，尋找生命起源--<a href="https://www.youtube.com/watch?v=2pbDVQWayDE&t=10s" target="_blank">海底黑煙囪</a>。
                                </p>
                            </div>
                        </div>
                        <div className="web">
                            <div className="wordBlockWeb">
                                <h4 className="aboutTitle">
                                深海，是什麼樣的世界呢？
                                </h4>
                                <h4 className="aboutTitle">
                                黑暗無光、有熱液噴泉及巨大的生物？
                                </h4>
                                <h4 className="aboutTitle">
                                科學家不斷克服挑戰，亟欲解密。
                                </h4>
                                <p className="paragraph1">
                                公共電視和國家實驗研究院海洋科技研究中心、經濟部中央地質調查所共同合作，將搭乘勵進研究船，前往台灣東北海域，透過ROV水下遙控載具，下潛千米，尋找跟生命起源有關的海底黑煙囪。
                                </p>
                                <p className="paragraph2">
                                「我們的島」團隊將隨船紀錄，從7/22至7/26連續五天，全程網路直播108小時海上研究過程。「有話好說」及「我們的島」並共同製作「<a href="https://www.youtube.com/watch?v=2pbDVQWayDE&t=10s" target="_blank">尋找海底黑煙囪﹣108小時直擊</a>」特別節目，於7/22週一晚間八點到十點播出。
                                </p>
                                <p className="paragraph2">
                                 七月，跟我們一起探索深海吧！
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
