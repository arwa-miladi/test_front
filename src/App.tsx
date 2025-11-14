import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Desktop from "./components/Desktop";
import PagesDropdown from "./components/PagesDropdown";
import {Home} from "./components/Home";

export type CheckboxState = "unchecked" | "tickLightGray" | "tickGray" | "blurBlue" | "tickBlue";


const App: React.FC = () => {


    return (
        <div
            style={{
                display: "flex",
                gap: "40px",
                marginTop: "30px",
                alignItems: "flex-start",
                justifyContent: "center",
            }}
        >

            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <Buttons/>
            </div>
            <Desktop/>
            <Home/>
            <PagesDropdown />
        </div>
    );
};

export default App;
