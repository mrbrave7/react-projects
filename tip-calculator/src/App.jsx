import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [noOfPerson, setNoOfPerson] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [totalAmountToBePaid, setTotalAmountToBePaid] = useState("");
  const [billAmountPerPerson, setBillAmountPerPerson] = useState("");
  const tipPercentages = [5, 10, 15, 25, 35];

  function calculateTip(event) {
    event.preventDefault();
    setDisabled(true);

    if (billAmount === "" || tipPercent === "" || noOfPerson === "" || noOfPerson <= 0) {
      alert("Please fill all the fields and ensure the number of persons is greater than 0.");
      setDisabled(false);
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const people = parseFloat(noOfPerson);

    const tipAmounts = bill * (tip / 100);
    const totalBill = bill + tipAmounts;
    const totalAmountPerPerson = totalBill / people;

    setTipAmount(tipAmounts.toFixed(2)); // Round to 2 decimal places
    setTotalAmountToBePaid(totalBill.toFixed(2));
    setBillAmountPerPerson(totalAmountPerPerson.toFixed(2));
  }

  function resetBill() {
    setDisabled(false);
    setBillAmount("");
    setTipPercent("");
    setNoOfPerson("");
    setTipAmount("");
    setTotalAmountToBePaid("");
    setBillAmountPerPerson("");
  }

  return (
    <main className="main-tip-container">
      <div className="inner-tip-container">
        <form onSubmit={calculateTip}>
          <div className="input-box">
            <label htmlFor="bil-amount">Bill</label>
            <input
              value={billAmount}
              placeholder="$ Amount"
              className="bil-amount"
              type="number"
              disabled={disabled}
              onChange={(event) => setBillAmount(event.target.value)}
              name="bil-amount"
              id="bil-amount"
            />
          </div>
          <div className="input-box">
            <label htmlFor="tip-percentage">Select Tip Percent</label>
            <div className="input">
              {tipPercentages.map((tipPer, index) => (
                <button
                  disabled={disabled}
                  key={index}
                  onClick={() => setTipPercent(tipPer)}
                  type="button"
                >
                  {tipPer}%
                </button>
              ))}
              <input
                type="number"
                disabled={disabled}
                value={tipPercent}
                onChange={(event) => setTipPercent(event.target.value)}
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="person">No Of Persons Paying Bill</label>
            <input
              type="number"
              value={noOfPerson}
              onChange={(event) => setNoOfPerson(event.target.value)}
              name="person"
              id="person"
              disabled={disabled}
              placeholder="No Of Persons"
            />
          </div>
          <div className="input-box">
            <button disabled={disabled} className="submit-btn" type="submit">
              Calculate
            </button>
          </div>
        </form>
        <div className="result-show-container">
          <div className="result-box">
            <p>Your Bill Amount:</p>
            <p>{billAmount}</p>
          </div>
          <div className="result-box">
            <p>Your Tip Percent:</p>
            <p>{tipPercent}%</p>
          </div>
          <div className="result-box">
            <p>No Of Persons:</p>
            <p>{noOfPerson}</p>
          </div>
          <div className="result-box">
            <p>Your Total Tip Amount:</p>
            <p>${tipAmount}</p>
          </div>
          <div className="result-box">
            <p>Your Total Bill Amount:</p>
            <p>${totalAmountToBePaid}</p>
          </div>
          <div className="result-box">
            <p>Amount Per Person:</p>
            <p>${billAmountPerPerson}</p>
          </div>
          <div className="result-box">
            <button onClick={resetBill} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
