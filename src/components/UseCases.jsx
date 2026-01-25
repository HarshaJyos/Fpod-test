import React from 'react';
import './UseCases.css';
import { FaUserAstronaut, FaMotorcycle, FaStore, FaBuilding, FaGasPump } from 'react-icons/fa';

const UseCases = () => {
    const cases = [
        {
            title: "Individual Bikers",
            desc: "Instant hygiene for your daily ride.",
            icon: <FaUserAstronaut />
        },
        {
            title: "Delivery Fleets",
            desc: "Swiggy, Zomato & logistics riders.",
            icon: <FaMotorcycle />
        },
        {
            title: "Bike Rentals",
            desc: "Premium experience for every customer.",
            icon: <FaStore />
        },
        {
            title: "Petrol Pumps",
            desc: "Value-added service for customers.",
            icon: <FaGasPump />
        },
        {
            title: "Malls & Tech Parks",
            desc: "Smart amenity for employees & visitors.",
            icon: <FaBuilding />
        }
    ];

    return (
        <section className="use-cases" id="use-cases">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Target Audience</span>
                    <h2 className="section-title">For Everyone Who Rides</h2>
                </div>

                <div className="use-cases-grid">
                    {cases.map((item, index) => (
                        <div className="use-case-card" key={index}>
                            <div className="use-case-bg"></div> {/* Placeholder for image */}
                            <div className="use-case-icon">{item.icon}</div>
                            <div className="use-case-content">
                                <h3 className="use-case-title">{item.title}</h3>
                                <p className="use-case-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
