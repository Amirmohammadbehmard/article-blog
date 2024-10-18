import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";

import EditArticle from "./pages/editArticle/EditArticle";
import Article from "./pages/article/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/edit-article/:id" element={<EditArticle />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
