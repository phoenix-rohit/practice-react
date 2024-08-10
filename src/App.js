import { useState } from "react";
import "./input.css";

export default function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-[#0061ff] to-[#60efff] p-24">
      <ProjectOne />
    </div>
  );
}

const data = [
  {
    id: 1,
    description: "2 cans of tomato sauce",
    amount: 120,
    category: "Grocery",
  },
  {
    id: 2,
    description: "3 Pasta Packets",
    amount: 150,
    category: "Grocery",
  },
  {
    id: 3,
    description: "5 Paneer Packets",
    amount: 300,
    category: "Grocery",
  },
];

function ProjectOne() {
  const [totalItems, setTotalExpenses] = useState(data);
  const totalExpenses = totalItems.reduce((acc, item) => item.amount + acc, 0);

  function handleRemoveExpense(itemToBeRemoved) {
    setTotalExpenses((items) =>
      items.filter((item) => item !== itemToBeRemoved)
    );
  }

  function handleAddExpense(itemToBeAdded) {
    setTotalExpenses((items) => [...items, itemToBeAdded]);
  }

  return (
    <div className="text-base text-white max-w-4xl mx-auto">
      <h1>
        <span className="money-emoji">🤑</span> Expense budget tracker{" "}
        <span>📅</span>
      </h1>

      <ExpenseForm onAddingExpense={handleAddExpense} />

      {/* DONE */}
      <TotalExpenseContainer
        totalItems={totalItems}
        onDelete={handleRemoveExpense}
      />

      {/* DONE */}
      <Total totalExpenses={totalExpenses} />
    </div>
  );
}

function ExpenseForm({ onAddingExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Grocery");

  function handleSubmit(e) {
    e.preventDefault();
    // Gaurd Clause for protecting empty submitions
    if (!description || !amount) return;

    const item = {
      id: crypto.randomUUID(),
      description,
      amount,
      category,
    };
    onAddingExpense(item);

    setDescription("");
    setAmount("");
    setCategory("Grocery");
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="mb-32 flex flex-col gap-y-32"
    >
      <div className="flex flex-col">
        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          type="text"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="amount">Amount:</label>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          id="amount"
          type="number"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="category">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
        >
          <option value="Grocery">Grocery</option>
          <option value="Utility">Utility</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-yellow">Sumbit</button>
      </div>
    </form>
  );
}

function TotalExpenseContainer({ totalItems, onDelete }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-80">
        <h4>Description</h4>
        <h4>Amount</h4>
        <h4>Category</h4>
        <h4> </h4>
      </div>
      {totalItems.map((item) => (
        <Expense item={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

function Expense({ item, onDelete }) {
  return (
    <>
      <div className=" pt-12 flex justify-between items-center mb-16">
        <p className="max-w-96">{item.description}</p>
        <p>₹{item.amount}</p>
        <p>{item.category}</p>
        <button onClick={() => onDelete(item)} className="btn btn-orange">
          Delete
        </button>
      </div>
      <div className="border-b border-gray-300"></div>
    </>
  );
}

function Total({ totalExpenses }) {
  return (
    <>
      <div className=" bg-[#111] px-8 font-semibold text-xl flex justify-between">
        <p>Total</p>
        <p>₹{totalExpenses}</p>
      </div>
      <div className="border-b border-gray-300"></div>
    </>
  );
}
