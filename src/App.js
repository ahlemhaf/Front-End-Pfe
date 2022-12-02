import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import '../src/views/pages/AuthCss/Auth.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './views/privateRoute/PrivateRoute'




const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Home = React.lazy(() => import('./client-side/home/Home'))
const Login = React.lazy(() => import('./views/pages/Authentification/Login'))
const Register = React.lazy(() => import('./views/pages/Authentification/Register'))
const About = React.lazy(() => import('./client-side/about/About'))
const CourseHome = React.lazy(() => import('./client-side/allcourses/CourseHome'))
const Team = React.lazy(() => import('./client-side/team/Team'))
const Price = React.lazy(() => import('./client-side/pricing/Price'))
const Blog = React.lazy(() => import('./client-side/blog/Blog'))
const Contact = React.lazy(() => import('./client-side/contact/Contact'))
const Footer = React.lazy(() => import('./client-side/common/footer/Footer'))

const ForgotPassword = React.lazy(() => import('./views/pages/Authentification/forgotPassword'))
const ResetPassword = React.lazy(() => import('./views/pages/Authentification/resetPassword'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />

        <HashRouter>

          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/home" name="home" element={<Home />} />
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/forgotPassword" name="forgot password" element={<ForgotPassword />} />
              <Route exact path="/resetPassword/:token" name="resetpassword" element={<ResetPassword />} />
              <Route exact path='/about' name="About Page" element={<About />} />
              <Route exact path='/courses' name="Courses Page" element={<CourseHome />} />
              <Route exact path='/team' name="Team Page" element={<Team />} />
              <Route exact path='/pricing' name="Prices Page" element={<Price />} />
              <Route exact path='/journal' name="Blog Page" element={<Blog />} />
              <Route exact path='/contact' name="Contact Page" element={<Contact />} />
              <Route exact path='/footer' name="footer" element={<Footer />} />



              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>} />
            </Routes>
          </Suspense>
        </HashRouter>
      </div>

    )
  }
}

export default App
