import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import './index.css'

function App() {
    return (
        <div className="flex-wrapper">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
