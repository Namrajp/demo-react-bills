import { useState, useEffect } from "react";
import AddBill from "./components/AddBill";
import AddCategory from "./components/AddCategory";

import BillsTable from "./components/BillsTable";
import NavBar from "./components/NavBar";

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoriesInLocalStorage = localStorage.getItem("categories");

    if (categoriesInLocalStorage) {
      setCategories(JSON.parse(categoriesInLocalStorage) as string[]);
    }

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true);
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

  return (
    <div>
      {shouldShowAddCategory ? (
        <AddCategory addCategory={addCategory} />
      ) : (
        <div>
          <NavBar categories={categories} showAddCategory={showAddCategory} />
          <BillsTable />
        </div>
      )}
    </div>
  );
}

export default App;
