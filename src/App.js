import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Blog, SignUp, Login, ResetPassword, SinglePost } from "./pages";
import { SharedLayout, ScrollToTop, NotFound } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<SinglePost/>} />
          {/*<Route path="account" element={<Account />} />*/}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />}/>
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="*"  element={<NotFound />} />
          <Route path="notFound"  element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App;