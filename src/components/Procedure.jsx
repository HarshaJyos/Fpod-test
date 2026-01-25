import React from 'react';
import './Procedure.css';

const Procedure = () => {
    const steps = [
        { num: 1, text: "Scan QR", icon: "📱" },
        { num: 2, text: "Unlock Door", icon: "🔓" },
        { num: 3, text: "Place Helmet", icon: "⛑️" },
        { num: 4, text: "Lock Door", icon: "🔒" },
        { num: 5, text: "Start Clean", icon: "✨" },
        { num: 6, text: "Ride Fresh", icon: "🏍️" },
    ];

    return (
        <section className="procedure" id="procedure">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">How It Works</span>
                    <h2 className="section-title">Helmet Hygiene in Just 6 Easy Steps</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            <div className="step-number">{step.num}</div>
                            <div className="step-text">
                                {step.text} <br />
                                <span className="step-icon">{step.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Procedure;
