import React, { Component } from 'react'
import "./livestream.css"

export default class LiveStream extends Component {
    render() {
        return (
            <div>
                <section id="livestream" className="section" style={{paddingTop:"60px"}}>
                <h2 className="textTitle">深海研究直播</h2>
                    <div className="section-content liveStream">
                         <iframe
                             title="Livestream" 
                             src="https://www.youtube.com/embed/QvT0xdbMLzE" 
                             frameBorder="0" 
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen>
                         </iframe>
                    </div>
                </section>
            </div>
        )
    }
}
