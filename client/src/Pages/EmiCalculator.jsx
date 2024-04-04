import React, { useState } from "react";
import "../assets/Style/emiCal.css";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEmi = () => {
    const principle = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm);

    const emiValue =
      (principle * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    setEmi(emiValue.toFixed(2));

    const totalInterestPayable = emiValue * time - principle;
    setTotalInterest(totalInterestPayable.toFixed(2));

    const totalPayment = emiValue * time;
    setTotalAmount(totalPayment.toFixed(2));
  };

  return (
    <>
      <div className="loan-calculator ">
        <div className="top p-10 bg-slate-700 text-white   ">
          <h2 className="font-semibold text-2xl text-center mb-4">
            EMI Calculator
          </h2>

          <form action="#">
            <div className="group ">
              <div className="title">Amount</div>
              <input
                value={loanAmount}
                type="number"
                onChange={(e) => setLoanAmount(e.target.value)}
                className=" text-black p-2 w-full rounded-lg"
              />
            </div>

            <div className="group">
              <div className="title">Interest Rate</div>
              <input
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                className=" text-black p-2 w-full rounded-lg"
              />
            </div>

            <div className="group">
              <div className="title">Tenure (in months)</div>
              <input
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                type="number"
                className=" text-black p-2 w-full rounded-lg"
              />
            </div>
          </form>
        </div>

        <div className="result ">
          <div className="left">
            <div className="loan-emi ">
              <h3>Loan EMI</h3>
              <div className="value">{emi}</div>
            </div>

            <div className="total-interest mt-2">
              <h3>Total Interest Payable</h3>
              <div className="value">{totalInterest}</div>
            </div>

            <div className="total-amount mt-2">
              <h3>Total Amount</h3>
              <div className="value">{totalAmount}</div>
            </div>

            <button
              className="calculate-btn bg-slate-700 "
              onClick={calculateEmi}
            >
              Calculate
            </button>
          </div>

          {/* <div className="right">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div> */}
        </div>
      </div>
    </>
  );
}
