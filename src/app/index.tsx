import { Body } from "@/app/layout/Body";
import { Footer } from "@/app/layout/Footer";
import { Header } from "@/app/layout/Header";
import { Router } from "@/app/routes";
import { Toaster } from "@/components/ui/Toaster";
import { RequestProvider } from "@/context/request";
import { ReactNode } from "react";

const App = (): ReactNode => (
    <div className="w-full h-[100vh] flex flex-col overflow-hidden">
        <RequestProvider>
            <Header />
            <Body>
                <Router />
                <Toaster />
            </Body>
            <Footer />
        </RequestProvider>
    </div>
);

export { App };
