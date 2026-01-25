import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [inputs, setInputs] = useState({
        costPerMachine: 150000, // Default assumption, editable
        numMachines: 1,
        cleaningPrice: 50,
        cleansPerDay: 20
    });

    const [result, setResult] = useState(null);

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

        // Simple ROI calculation: (Annual Revenue / Total Investment) * 100
        // Assuming Total Investment = Cost of Machines (simplification)
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
                <div className="calc-headers">
                    <span className="section-subtitle">Business Opportunity</span>
                    <h2>Calculate Your Returns</h2>
                    <p>
                        See how profitable a Freshpod installation can be. Ideal for fleets, rentals,
                        petrol pumps, and malls. Calculate your potential earnings now.
                    </p>

                    {result && (
                        <div className="result-box">
                            <h3 className="result-title">Estimated Annual Revenue</h3>
                            <span className="result-value">₹{result.annual.toLocaleString('en-IN')}</span>
                            <p className="result-roi">ROI: {result.roi}% per year</p>
                            <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>Monthly: ₹{result.monthly.toLocaleString('en-IN')}</p>
                        </div>
                    )}
                </div>

                <div className="calc-form">
                    <form onSubmit={calculateProfit}>
                        <div className="form-group">
                            <label>Cost of Machine (₹)</label>
                            <input
                                type="number"
                                name="costPerMachine"
                                value={inputs.costPerMachine}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Number of Machines</label>
                            <input
                                type="number"
                                name="numMachines"
                                value={inputs.numMachines}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Price per Clean (₹)</label>
                            <input
                                type="number"
                                name="cleaningPrice"
                                value={inputs.cleaningPrice}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Cleans per Day (Avg)</label>
                            <input
                                type="number"
                                name="cleansPerDay"
                                value={inputs.cleansPerDay}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="calc-btn">Calculate Profit</button>
                        <div className="reset-btn" onClick={resetCalculator}>Reset Calculator</div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
