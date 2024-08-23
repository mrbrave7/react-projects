import { useState } from 'react';
import "./Transaction.css";

const Transaction = () => {
  const [transactionDetail, setTransactionDetail] = useState({ transactionType: "", transactionAmount: "", transactionName: "", transactionRemarks: "" });

  function handleTransactionComplete(event) {
    event.preventDefault();
    console.log(transactionDetail);
  }

  function handleTransaction(event) {
    const { name, value } = event.target;
    setTransactionDetail({
      ...transactionDetail, // This should spread the current state
      [name]: value
    });
  }

  return (
    <main className="formContainer">
      <form
        className="transactionForm"
        onSubmit={handleTransactionComplete}
      >
        <img src="/iems.png" height={40} alt="" />
        <div className="inputField">
          <label htmlFor="transactionType">Select Transaction Type</label>
          <select
            name="transactionType"
            onChange={handleTransaction}
            value={transactionDetail.transactionType}
            id="transactionType">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="inputField">
          <label htmlFor="amount">Enter Your Amount</label>
          <input
            value={transactionDetail.transactionAmount}
            onChange={handleTransaction}
            type="number" // Changed to 'number' for proper input validation
            placeholder="Amount $"
            name="transactionAmount"
            min={0}
            max={100000}
            id="transactionAmount"
          />
        </div>
        <div className="inputField">
          <label htmlFor="transactionName">Transaction Name</label> {/* Fixed typo in label */}
          <input
            value={transactionDetail.transactionName}
            onChange={handleTransaction}
            type="text"
            name="transactionName"
            placeholder="Home Rent"
            id="transactionName"
          />
        </div>
        <div className="inputField">
          <label htmlFor="transactionRemarks">Remarks</label>
          <textarea
            name="transactionRemarks"
            onChange={handleTransaction}
            value={transactionDetail.transactionRemarks}
            className="transactionRemarks"
            id="transactionRemarks"
          ></textarea>
        </div>
        <button type="submit" className="transactionButton">Submit</button>
      </form>
    </main>
  );
}

export default Transaction;
