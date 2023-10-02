import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Products } from "./components/products";
import { Orders } from "./components/orders";
import { Inventory } from "./components/inventory";
import { Account } from "./components/account";

const cn = (...classnames: any[]) => classnames.filter(Boolean).join(" ");

function App() {
  const [selectedTab, setSelectedTab] = useState("products");

  return (
    <div className="App">
      <nav>
        <div className="tabs">
          <div
            onClick={() => setSelectedTab("products")}
            className={cn("tab", selectedTab === "products" && "active")}
          >
            Products
          </div>
          <div
            onClick={() => setSelectedTab("orders")}
            className={cn("tab", selectedTab === "orders" && "active")}
          >
            Orders
          </div>
          <div
            onClick={() => setSelectedTab("inventory")}
            className={cn("tab", selectedTab === "inventory" && "active")}
          >
            Inventory
          </div>
          <div
            onClick={() => setSelectedTab("account")}
            className={cn("tab", selectedTab === "account" && "active")}
          >
            Account
          </div>
        </div>
      </nav>

      <main>
        {selectedTab === "products" && <Products />}
        {selectedTab === "orders" && <Orders />}
        {selectedTab === "inventory" && <Inventory />}
        {selectedTab === "account" && <Account />}
      </main>
    </div>
  );
}

export default App;
