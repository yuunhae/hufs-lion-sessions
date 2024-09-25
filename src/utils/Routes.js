import React from "react";
import { Route, Routes } from "react-router-dom";
import KeyWord from "../components/keyword/key_word";
import Purchase from "../components/purchase/purchase";
import Home from "../pages/home";

export const routes  = [
    {path: '/', element: <Home />},
    {path : '/keyword', element : <KeyWord/>},
    {path: '/purchase', element : <Purchase/>}
]

const RoutesSetting = () => (
    <Routes>
        {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
        ))}
    </Routes>
);

export default RoutesSetting;