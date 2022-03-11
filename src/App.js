import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Community, Home, Layout, Login, NotFound, Post, Register, User } from "./routes"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

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
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
