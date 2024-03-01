import { Body } from "@/app/layout/Body";
import { Footer } from "@/app/layout/Footer";
import { Header } from "@/app/layout/Header";
import { Router } from "@/app/routes";
import { ReactNode } from "react";

const App = (): ReactNode => (
    <div className="w-full h-[100vh] flex flex-col overflow-hidden">
        <Header />
        <Body>
            <Router />
        </Body>
        <Footer />
    </div>
);

export { App };
