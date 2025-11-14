import ListItem from "./ListItem";
import React from "react";
import {CheckboxState} from "../App";

export const Home: React.FC = () => {
    const checkboxes: CheckboxState[] = [
        "unchecked",
        "tickLightGray",
        "tickGray",
        "blurBlue",
        "tickBlue",
        "blurBlue",
        "tickBlue",
        "tickLightGray",
        "unchecked",
    ];
    return (
        <div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginTop: "30px",
                alignItems: "center"
            }}>
                {checkboxes.map((state, index) => (
                    <ListItem index={index} state={state}/>
                ))}
            </div>
        </div>

    )
}
