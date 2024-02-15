import { Demandes } from "@/app/demandes";
import { ReactNode } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Router = (): ReactNode => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Link to="/rest">Click me</Link>} />
            <Route path="/rest" element={<Demandes />} />
        </Routes>
    </BrowserRouter>
);

export { Router };
