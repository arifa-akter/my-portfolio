import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactMe from './components/HomePage/ContactMe';
import Home from './components/HomePage/Home';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/detail/:id" element={<ProjectDetail></ProjectDetail>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
