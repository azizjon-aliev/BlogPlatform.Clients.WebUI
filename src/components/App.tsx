import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FC} from "react";
import HomePage from "../pages/HomePage.tsx";
import PostDetail from "../pages/PostDetail.tsx";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/posts/:id" element={<PostDetail/>}/>
                <Route path={"*"} element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;