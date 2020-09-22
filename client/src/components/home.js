import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div style={{marginTop:"1.5vw"}}>
                <div className="container">
                    <div className="row">
                        <div className ="col-sm-12">
                                
                                <div id="myslider" className="carousel slide" data-ride="carousel" >
                                    
                                    <ol className="carousel-indicators">
                                        <li data-target="myslider" data-slide-to="0" className="active"></li>
                                        <li data-target="myslider" data-slide-to="1"></li>
                                        <li data-target="myslider" data-slide-to="2"></li>
                                        <li data-target="myslider" data-slide-to="3"></li>
                                    </ol>

                                    <div className="carousel-inner" style={{borderRadius:"10px"}} >
                                        <div className="carousel-item active" >
                                        <img src="./intern1.jpg" style={{maxHeight:"85vh",width:"90vw"}} alt="..."/>
                                        <div className="carousel-caption"><h2>Lead</h2></div>
                                        </div>
                                        <div className="carousel-item"  >
                                        <img src="./intern2.jpg" style={{maxHeight:"85vh",width:"90vw"}} alt="..."/>
                                        <div className="carousel-caption"><h2>Mentor</h2></div>
                                        </div>
                                        <div className="carousel-item"  >
                                        <img src="./intern3.jpg" style={{maxHeight:"85vh",width:"90vw"}}  alt="..."/>
                                        <div className="carousel-caption"><h2>Build</h2></div>
                                        </div>

                                        <div className="carousel-item"  >
                                        <img src="./oltu.jpg" style={{maxHeight:"85vh",width:"90vw"}}  alt="..."/>
                                        </div>

                                    </div>
                                    <a className="carousel-control-prev" href="#myslider" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#myslider" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>

                                </div>
                            </div>
                        </div>

        
            </div>
        )
    }
}




