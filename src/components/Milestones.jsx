import React from 'react';
import './Milestones.css';
import { FaTrophy, FaAward, FaCheckCircle } from 'react-icons/fa';

const Milestones = () => {
    return (
        <section className="milestones">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Journey</span>
                    <h2 className="section-title">Global Recognition</h2>
                </div>

                <div className="milestones-grid">
                    <div className="milestone-item">
                        <FaCheckCircle className="milestone-icon" />
                        <h3 className="milestone-title">1,00,000+</h3>
                        <p className="milestone-desc">Helmets Sanitized</p>
                    </div>
                    <div className="milestone-item">
                        <FaTrophy className="milestone-icon" />
                        <h3 className="milestone-title">BRICS Silver</h3>
                        <p className="milestone-desc">Innovation Award</p>
                    </div>
                    <div className="milestone-item">
                        <FaAward className="milestone-icon" />
                        <h3 className="milestone-title">IPITEX Bronze</h3>
                        <p className="milestone-desc">International Exhibition</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Milestones;
