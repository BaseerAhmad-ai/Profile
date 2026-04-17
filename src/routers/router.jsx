import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Components/layout/Layout"
import { Error } from "./Error"
import { Wrong } from "./Wrong"
//!===========================================================================//
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Contact } from "../pages/Contact";
import { Project } from "../pages/Projects";
import { SignUp, form } from "../projects/registry-system/SignUp";
import { Login} from "../projects/registry-system/Login";
import { LoginSuccess } from "../projects/registry-system/LoginSuccessfull";
//!===========================================================================//
export const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/skill", element: <Skills /> },
        { path: "/project", element: <Project /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "projects/signup", element: <SignUp />,action:form },
    { path: "projects/login", element: <Login /> },
    { path: "projects/success", element: <LoginSuccess /> },
    { path: "projects/faildlogin", element: <Wrong /> },
  ]);