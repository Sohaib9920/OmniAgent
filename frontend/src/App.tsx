import { useEffect, useState } from "react";
import { BrowserRouter, Link, useLocation } from "react-router";
import Header from "./components/HeaderComponent";

function App() {
  return (
    <div className="h-screen bg-black">
      <Header></Header>
    </div>
  );
}

export default App;
