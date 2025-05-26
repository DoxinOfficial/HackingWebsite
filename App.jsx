import React, { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Terminal from "./components/Terminal";
import Downloads from "./components/Downloads";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Header />
      {!authenticated ? (
        <Login onLogin={() => setAuthenticated(true)} />
      ) : (
        <>
          <Terminal />
          <Downloads />
        </>
      )}
    </div>
  );
}
