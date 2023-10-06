import { BrowserRouter, Routes, Route } from "react-router-dom";

import Headers from "./Components/Header/header";
import Transaction from "./Components/Transaction/transaction";
import Support from "./Components/Support/support";
import Faq from "./Components/FAQ/faq";
import Contact from "./Components/Contact/contact";
import Main from "./Components/Main/main";
import { useState, useEffect } from "react";
import Login from "./Components/Auth/login";
import Register from "./Components/Auth/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route index element={<Main />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
