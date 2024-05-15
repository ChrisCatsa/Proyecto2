import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";

interface ProvidersProops {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProvidersProops> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
);

export default Providers;