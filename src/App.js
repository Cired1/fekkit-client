import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Community from "./routes/Community/Community";
import Home from "./routes/Home/Home";
import Layout from "./routes/Layout/Layout";
import Login from "./routes/Login/Login";
import NotFound from "./routes/NotFound/NotFound";
import Post from "./routes/Post/Post";
import User from "./routes/User/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="communities/:id" element={<Community />} />
          <Route path="communities/:id/posts/:id" element={<Post />} />
          <Route path="users/:id" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
