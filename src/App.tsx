import { useState, useEffect } from "react";
import AddBill from "./components/AddBill";
import AddCategory from "./components/AddCategory";

import BillsTable from "./components/BillsTable";
import NavBar from "./components/NavBar";

export type Bill = {
  amount: number;
  category: string;
  date: Date;
};

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoriesInLocalStorage = localStorage.getItem("categories");
    const billsInLocalStorage = localStorage.getItem("bills");

    if (categoriesInLocalStorage) {
      setCategories(JSON.parse(categoriesInLocalStorage) as string[]);
    }

    if (billsInLocalStorage) {
      setBills(JSON.parse(billsInLocalStorage) as Bill[]);
    }

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true);
    }

    if (!billsInLocalStorage) {
      setShouldShowAddBill(true);
    }
  }, []);

  const addCategory = (category: string) => {
    const updatedCategories = [...(categories || []), category];
    setCategories(updatedCategories);
    setShouldShowAddCategory(false);
    // localStorage.setItem("categories", "[]");

    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const showAddCategory = () => {
    setShouldShowAddCategory(true);
  };

  const [bills, setBills] = useState<Bill[]>([]);
  const [shouldShowAddBill, setShouldShowAddBill] = useState(true);

  //...
  const addBill = (amount: number, category: string, date: Date) => {
    const bill: Bill = { amount, category, date };
    const updatedBills = [...(bills || []), bill];
    setBills(updatedBills);
    setShouldShowAddBill(false);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };
  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory addCategory={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill addBill={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar categories={categories} showAddCategory={showAddCategory} />
          <BillsTable bills={bills} />
        </div>
      )}
    </div>
  );
}

export default App;
