import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
