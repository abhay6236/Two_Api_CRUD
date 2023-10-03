import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FacApi from "./FacApi";
import FacApiPerform from "./FacApiPerform";
import FacForm from "./FacForm";
import StuApi from "./StuApi";

import StuApiPerform from "./StuApiPerform";
import StuForm from "./StuForm";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FacApi />}></Route>
      <Route path="/Fac/:id" element={<FacApiPerform />}></Route>
      <Route path="/Form/:id" element={<FacForm />}></Route>
      <Route path="/Student" element={<StuApi />}></Route>
      <Route path="/Student/:id" element={<StuApiPerform />}></Route>
      <Route path="/StuForm/:id" element={<StuForm />}></Route>
    </Routes>
  </BrowserRouter>
);
