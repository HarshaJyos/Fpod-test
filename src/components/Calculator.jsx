import React, { useState } from 'react';
import './Calculator.css';
import useScrollReveal from '../hooks/useScrollReveal';

const Calculator = () => {
    const [inputs, setInputs] = useState({
        costPerMachine: 150000,
        numMachines: 1,
        cleaningPrice: 50,
        cleansPerDay: 20
    });

    const [result, setResult] = useState(null);

    const textRef = useScrollReveal(200);
    const formRef = useScrollReveal(400);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    const calculateProfit = (e) => {
        e.preventDefault();
        const dailyRevenue = inputs.numMachines * inputs.cleaningPrice * inputs.cleansPerDay;
        const monthlyRevenue = dailyRevenue * 30;
        const annualRevenue = monthlyRevenue * 12;

        const totalInvestment = inputs.costPerMachine * inputs.numMachines;
        const roi = totalInvestment > 0 ? ((annualRevenue / totalInvestment) * 100).toFixed(0) : 0;

        setResult({
            monthly: monthlyRevenue,
            annual: annualRevenue,
            roi: roi
        });
    };

    const resetCalculator = () => {
        setInputs({
            costPerMachine: 150000,
            numMachines: 1,
            cleaningPrice: 50,
            cleansPerDay: 20
        });
        setResult(null);
    };

    return (
        <section className="calculator" id="calculator">
            <div className="container calc-container">
                <div className="calc-headers reveal-hidden" ref={textRef}>
                    <span className="section-subtitle">Business Intelligence</span>
                    <h2>Visualise Your ROI</h2>
                    <p>
                        The Freshpod business model is designed for high returns and low maintenance.
                        Use our interactive estimator to project your earnings based on machine deployment.
                    </p>

                    {result ? (
                        <div className="result-box">
                            <h3 className="result-title">Projected Annual Revenue</h3>
                            <span className="result-value">₹{result.annual.toLocaleString('en-IN')}</span>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                                <span className="result-roi">ROI: {result.roi}% / yr</span>
                                <span style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>Mo: ₹{result.monthly.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="result-box" style={{ opacity: 0.5, borderStyle: 'dashed' }}>
                            <h3 className="result-title">Ready to Calculate</h3>
                            <p style={{ color: 'var(--secondary-text)' }}>Enter your parameters to see the projection.</p>
                        </div>
                    )}
                </div>

                <div className="calc-form reveal-hidden" ref={formRef}>
                    <form onSubmit={calculateProfit}>
                        <div className="form-group">
                            <label>Machine Cost (₹)</label>
                            <input
                                type="number"
                                name="costPerMachine"
                                value={inputs.costPerMachine}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Unit Count</label>
                            <input
                                type="number"
                                name="numMachines"
                                value={inputs.numMachines}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Service Price (₹)</label>
                            <input
                                type="number"
                                name="cleaningPrice"
                                value={inputs.cleaningPrice}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Daily Cycles (Avg)</label>
                            <input
                                type="number"
                                name="cleansPerDay"
                                value={inputs.cleansPerDay}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="calc-btn">CALCULATE PROJECTION</button>
                        <div className="reset-btn" onClick={resetCalculator}>Reset Parameters</div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
