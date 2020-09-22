import React from 'react'
import ReactDOM from "react-dom";

const JSX_MODAL = (
                <div className="modal" id="myModal">
                <div className="modal-dialog modal-lg" >
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">About the team</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                    <h5>
                    <p>Engineers are problem solvers. The curiosity of the team and a desire to do
                    something for people like you and me, led to the creation of our beloved organization OLTU.
                  </p>
                    <p>The primary objective for us is to provide students with training through 
                        internships. Meanwhile providing small businesses with the ability to project their presence on
                        the digital platform.</p>
                    <p>Every step forward has been a challenge which would not have been possible 
                    without the guidance of Mark Chachich and persistence of team members:
                    Komal, Harsh, Krishanu and Anurag.</p>      
                    <p>
                    Contact us : oltu.contact@gmail.com
                    </p>
                    </h5>
                        
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>
  );
  
  
  function Modal(props) {
    return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
  }
  
  
  export default Modal;