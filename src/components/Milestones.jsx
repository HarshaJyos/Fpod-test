import React from 'react';
import './Milestones.css';
import { FaTrophy, FaAward, FaCheckCircle } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const MilestoneCard = ({ icon, title, desc, delay }) => {
    const ref = useScrollReveal(delay);
    return (
        <div className="milestone-item reveal-hidden" ref={ref}>
            {icon}
            <h3 className="milestone-title">{title}</h3>
            <p className="milestone-desc">{desc}</p>
        </div>
    );
}

const Milestones = () => {
    const headerRef = useScrollReveal(100);

    return (
        <section className="milestones">
            <div className="container">
                <div className="section-header reveal-hidden" ref={headerRef}>
                    <span className="section-subtitle">Our Journey</span>
                    <h2 className="section-title">Global Recognition</h2>
                </div>

                <div className="milestones-grid">
                    <MilestoneCard
                        icon={<FaCheckCircle className="milestone-icon" />}
                        title="1,00,000+"
                        desc="Helmets Sanitized"
                        delay={200}
                    />
                    <MilestoneCard
                        icon={<FaTrophy className="milestone-icon" />}
                        title="BRICS Silver"
                        desc="Innovation Award"
                        delay={400}
                    />
                    <MilestoneCard
                        icon={<FaAward className="milestone-icon" />}
                        title="IPITEX Bronze"
                        desc="Intl. Exhibition"
                        delay={600}
                    />
                </div>
            </div>
        </section>
    );
};

export default Milestones;
