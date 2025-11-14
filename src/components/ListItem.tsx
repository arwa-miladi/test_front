
import React from "react";
import {DesktopCheckbox} from "./DesktopCheckbox";
import {CheckboxState} from "./Desktop";

const ListItem: React.FC<{ index: number; state?: CheckboxState; name?: string ;onTogglePage?: (id: number) => void;}> = ({
                                                                                        index,
                                                                                        state,
                                                                                        name,
                                                                                        onTogglePage,

                                                                                    }) => {
    console.log("onTogglePagee",onTogglePage)
    console.log("id",index)
    return (

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "370px",
                        height: "42px",
                        padding: "8px 12px",
                        border:onTogglePage? "none" : "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#FFFFFF",
                        fontSize: "16px",
                    }}
                >
                    <span style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        marginTop: "1px",
                        marginLeft:"17px",
                        alignItems: "center"
                    }}>{name ? name : "All pages"}</span>
                    <DesktopCheckbox
                        state={state}
                        onToggle={() => onTogglePage?.(index)}
                    />

                </div>
            </div>
    );
};

export default ListItem;