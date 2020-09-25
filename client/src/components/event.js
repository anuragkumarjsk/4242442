import React, { Component } from 'react'
import './components.css'
export default class event extends Component {
    render() {
        return (
            <div className="flexbox-container">
                <div className="founder" style={{float:"left", backgroundColor:"#f663"}} >
                    <h2> Komal Nagraj</h2>
                    <h6>A cool minded person, who leads decision making,
                        and creates workflows that makes management easy, and delivery ontime.
                        She is an expert when it comes to machine learning and the complexities that 
                        may arise in the back end of the project. She also participates in planning
                        and training of new members in an effecient manner.
                    </h6>
                    </div>
                <div className="founder" style={{float:"right", backgroundColor:"#f163"}}>
                    <h2>Harsh Raj</h2>
                    <h6>
                        The master of negotiations and delegation. It takes a master communicator to enchant
                        the client with the product qualities and nurture a trust that makes our organization the 
                        first choice among clients. Harsh also is responsible for ideation and maintaining a check on
                        the long term implications of company policies. 
                    </h6>

                    </div>
                <div className="founder" style={{float:"left", backgroundColor:"#f263"}}>
                    <h2>Krishanu Paul</h2>
                    <h6>A member who adds newness to the team both in terms of management
                        and technology. He is a pioneer in understanding business and assessing the opportunities 
                        related to it. His idea of profit is less about money and more about how many students benefit from the organization 
                        </h6> 

                    </div>
                <div className="founder" style={{float:"right",backgroundColor:"#f763"}}>
                    <h2>Anurag Kumar</h2>
                    <h6>The key resposnibility for Anurag is team building and training freshers
                        so that they can kick start building applications. On the customer end he is also 
                        a functional consultant. He keeps a track of 
                        regular conduction of meetings and sprint planning. 
                    </h6>

                    </div>
            </div>
        )
    }
}
