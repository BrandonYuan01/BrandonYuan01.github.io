// @ts-ignore
import React from "react";
import "./App.css";

import Main from "./LandingPage/MainBody";
import Header from "./LandingPage/Header";
import Footer from "./Footer";

// Define the App component that renders the Header, Main, and Footer components
const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;