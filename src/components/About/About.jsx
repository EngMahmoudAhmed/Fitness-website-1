import React from 'react';
import './about.style.css'

function About() {
    return (

        <div>
            <section className="about" id="About">
                <div className="content">
                    <div className="img-content">
                        <img src='.././images/gm5.jpg' alt="img"/>
                    </div>
                    <div className="content-details">
                        <h1>a word about us</h1>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. A, Illo Saepe! Magnam, Unde Explicabo Amet
                            Perferendis Voluptate Distinctio Facilis Quae Ipsa Quas! Officiis Veritatis Aut Est Vero Id, Debitis
                            Pariatur?</p><br />

                        <p> Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Itaque, Soluta Laboriosam. Laborum
                            Aspernatur Laboriosam Deserunt Cupiditate Laudantium Illum Commodi. Vero.
                        </p>
                        <div className="btn">learn more</div>
                    </div>
                </div>
            </section>
            
        </div>


    );
}

export default About;
