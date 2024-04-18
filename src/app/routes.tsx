import { Projects } from "@/app/projects";
import { Workspace } from "@/app/workspace";
import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = (): ReactNode => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/workspace" element={<Workspace />} />
        </Routes>
    </BrowserRouter>
);

export { Router };
