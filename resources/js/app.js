import "./bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/upload" element={<Upload />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
