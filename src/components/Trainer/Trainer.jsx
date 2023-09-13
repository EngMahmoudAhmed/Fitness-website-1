import React from 'react'
import './trainer.style.css'
import coach1 from '../assets/coach1.png'
import coach2 from '../assets/coach2.png'
import coach3 from '../assets/coach3.png'
import coach4 from '../assets/coach4.jpg'

function Trainer() {
    return (
        <>
            <section className="trainer" id="Trainer">
                <h3 className="heading">our trainer</h3>
                <div className="box-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="icon">
                                <a href="www.facebook.com" className="fab fa-facebook-f fa-1x"></a>
                                <a href="www.twitter.com" className="fab fa-twitter fa-1x"></a>
                                <a href="www.linked-in.com" className="fab fa-linkedin fa-1x"></a>
                                <a href="www.instagram.com" className="fab fa-instagram fa-1x"></a>
                            </div>
                            <img src={coach1} alt="" />

                            <div className="title">John deo</div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <a href="www.facebook.com" className="fab fa-facebook-f fa-1x"></a>
                                <a href="www.twitter.com" className="fab fa-twitter fa-1x"></a>
                                <a href="www.linked-in.com" className="fab fa-linkedin fa-1x"></a>
                                <a href="www.instagram.com" className="fab fa-instagram fa-1x"></a>
                            </div>
                            <img src={coach2} alt="" />

                            <div className="title">John deo</div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <a href="www.facebook.com" className="fab fa-facebook-f fa-1x"></a>
                                <a href="www.twitter.com" className="fab fa-twitter fa-1x"></a>
                                <a href="www.linked-in.com" className="fab fa-linkedin fa-1x"></a>
                                <a href="www.instagram.com" className="fab fa-instagram fa-1x"></a>
                            </div>
                            <img src={coach3} alt="" />

                            <div className="title">John deo</div>
                        </div>

                        <div className="col-md-4">
                            <div className="icon">
                                <a href="www.facebook.com" className="fab fa-facebook-f fa-1x"></a>
                                <a href="www.twitter.com" className="fab fa-twitter fa-1x"></a>
                                <a href="www.linked-in.com" className="fab fa-linkedin fa-1x"></a>
                                <a href="www.instagram.com" className="fab fa-instagram fa-1x"></a>
                            </div>
                            <img src={coach4} alt="" />

                            <div className="title">John deo</div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Trainer
