import {Outlet} from "react-router";
import MainNav from "../components/Navigation/MainNav.jsx";

export default function LayoutPage(){
    return <>
        <MainNav/>
        <Outlet/>
    </>
}