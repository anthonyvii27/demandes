import { Rest } from "@/app/rest";
import { ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Router = (): ReactNode => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Link to="/rest">Click me</Link>} />
            <Route path="/rest" element={<Rest />} />
        </Routes>
    </BrowserRouter>
);

export { Router };
