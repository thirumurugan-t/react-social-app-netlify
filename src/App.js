import {Route, Routes, useNavigate } from "react-router-dom";
import About from "./Socialmedia app/About";
import Footer from "./Socialmedia app/Footer";
import Header from "./Socialmedia app/Header";
import Home from "./Socialmedia app/Home";
import Missing from "./Socialmedia app/Missing";
import Nav from "./Socialmedia app/Nav";
import Postpage from "./Socialmedia app/Postpage";
import { useState, useEffect } from "react";
import Newpost from "./Socialmedia app/Newpost";
// import axios from "axios"; 
// import api from "./api/posts";

function App() {
  const navigate = useNavigate();
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "Morning Walk",
      datetime: "1974-07-01",
      body: "Going for a walk",
    },
    {
      id: 2,
      title: "Gym Time",
      datetime: "1975-07-01",
      body: "Gone to the gym",
    },
    {
      id: 3,
      title: "School Day",
      datetime: "1976-07-01",
      body: "Going to school",
    },
    {
      id: 4,
      title: "Early Morning",
      datetime: "1977-07-01",
      body: "Woke up early",
    },
  ]);

  const [Search, setSearch] = useState("");
  const [searchresults, setsearchresults] = useState([]);
  const [updatetasks, setupdatetasks] = useState({
    id: null,
    title: "",
    datetime: "",
    body: "",
  });

  useEffect(() => {
    const filteredposts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(Search.toLowerCase()) ||
        post.body.toLowerCase().includes(Search.toLowerCase())
    );
    setsearchresults(filteredposts);
  }, [posts, Search]);

  const handleDelete = (id) => {
    const newposts = posts.filter((post) => post.id !== id);
    setposts(newposts);
    navigate("/");
  };

  const handleSubmit = () => {
    const newid = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newdate = new Date().toString().split("G")[0];
    const newpost = {
      id: newid,
      title: updatetasks.title,
      datetime: newdate,
      body: updatetasks.body,
    };
    setposts([newpost, ...posts]);
    setupdatetasks({ id: null, title: "", datetime: "", body: "" });
    navigate("/");
  };

  const EditPost = (id) => {
    const edit = posts.find((post) => post.id === id);
    setupdatetasks(edit);
  };

  const handleEdit = (id) => {
    const ExistingId = Number(id);
    setposts(
      posts.map((post) =>
        post.id === ExistingId ? { ...post,id: ExistingId, title: updatetasks.title, datetime: new Date().toString().split("G")[0], body: updatetasks.body } : post
      )
    );
    setupdatetasks({ id: null, title: "", datetime: "", body: "" });
    navigate("/");
  };
 

  return (
    <>
      <Header title="Social Media" />
      <Nav Search={Search} setSearch={setSearch} setupdatetasks={setupdatetasks} />
      <Routes>
        <Route path="/" element={<Home post={searchresults} />} />
        <Route path="/newpost">
          <Route
            index
            element={
              <Newpost
                updatetasks={updatetasks}
                setupdatetasks={setupdatetasks}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path=":id"
            element={<Postpage posts={posts} handleDelete={handleDelete} EditPost={EditPost} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
