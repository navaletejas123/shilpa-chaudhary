import React from 'react'
import "./06-comming-soon/css/responsive.css"
import "./06-comming-soon/css/styles.css"

const Commingsoon = () => {
    return (
        <div>
            <div className="main-area-wrapper">
                <div className="main-area center-text" >
                    <div className="display-table">
                        <div className="display-table-cell">
                            <h1 className="title"><b>Comming Soon</b></h1>
                            <p className="desc font-white">Our website is currently undergoing scheduled maintenance.
                                We Should be back shortly. Thank you for your patience.</p>
                            <div id="normal-countdown" data-date="2018/01/01"></div>
                            <a type="button" className="notify-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><b>NOTIFY US</b></a>
                            <ul className="social-btn">
                                <li className="list-heading">social links for update</li>
                                <li><a><i className="bi bi-facebook"></i></a></li>
                                <li><a><i className="bi bi-twitter"></i></a></li>
                                <li><a><i className="bi bi-linkedin"></i></a></li>
                                <li><a><i className="bi bi-instagram"></i></a></li>
                                <li><a><i className="bi bi-snapchat"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Mail Id</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type='email' className='form-control shadow-none rounded-pill border-danger border border-2 w-75 m-auto text-center' placeholder='enter your mail id' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-sm btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commingsoon
