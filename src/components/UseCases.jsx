import React from 'react';
import './UseCases.css';
import { FaUserAstronaut, FaMotorcycle, FaStore, FaBuilding, FaGasPump } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const UseCaseCard = ({ title, desc, icon, delay }) => {
    const cardRef = useScrollReveal(delay);

    return (
        <div className="use-case-card reveal-hidden" ref={cardRef}>
            <div className="use-case-bg"></div> {/* Placeholder for image */}
            <div className="use-case-icon">{icon}</div>
            <div className="use-case-content">
                <h3 className="use-case-title">{title}</h3>
                <p className="use-case-desc">{desc}</p>
            </div>
        </div>
    );
};

const UseCases = () => {
    const headerRef = useScrollReveal(100);

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
                <div className="section-header reveal-hidden" ref={headerRef}>
                    <span className="section-subtitle" style={{ color: 'var(--accent-dark)' }}>Target Audience</span>
                    <h2 className="section-title" style={{ color: 'var(--primary-bg)' }}>For Everyone Who Rides</h2>
                </div>

                <div className="use-cases-grid">
                    {cases.map((item, index) => (
                        <UseCaseCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            icon={item.icon}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
