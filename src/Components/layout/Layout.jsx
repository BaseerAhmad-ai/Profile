import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function Layout(){
    return <>
    <Header />
    <Sidebar/>
    <Outlet/>
    <Footer/>
</>
}