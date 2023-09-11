import React from 'react'
import "./plan.css"

export default function Plan() {
    return (
        <div>
            <section className="plan" id="Plan">
                <h4 className="heading">membership plan</h4>
                <div className="box-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="plan-title">Basic</div>
                            <div className="plan-sale">25$/<span>Mo</span> <br /> <span>3 Months</span> </div>
                            <ul className="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div className="btn">check out</div>
                        </div>

                        <div className="col-md-4">
                            <div className="plan-title">standard</div>
                            <div className="plan-sale">40$/<span>Mo</span> <br /> <span>6 Months</span> </div>
                            <ul className="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div className="btn">check out</div>
                        </div>


                        <div className="col-md-4">
                            <div className="plan-title">premium</div>
                            <div className="plan-sale">50$/<span>Mo</span> <br /> <span>12 Months</span> </div>
                            <ul className="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div className="btn">check out</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
