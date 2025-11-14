import React from "react";
import {DesktopCheckbox} from "./DesktopCheckbox";

export  type CheckboxState = "unchecked" | "tickLightGray" | "tickGray" | "blurBlue" | "tickBlue";

const Desktop: React.FC = () => {
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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                {checkboxes.map((state, index) => (
                    <label
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        <DesktopCheckbox state={state}/>

                    </label>
                ))}
            </div>
        </div>
    );
};

export default Desktop;
