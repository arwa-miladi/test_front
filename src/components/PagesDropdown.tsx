import React, { useState } from "react";
import ListItem from "./ListItem";
import {DesktopCheckbox} from "./DesktopCheckbox";
import {buttonStyle} from "./Buttons";

// Checkbox states type
type CheckboxState = "unchecked" | "tickLightGray" | "tickGray" | "blurBlue" | "tickBlue";
const PagesDropdownCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // dropdown state
    const [allPagesChecked, setAllPagesChecked] = useState<CheckboxState>("unchecked");
    const [pages, setPages] = useState<{ name: string; state: CheckboxState }[]>([
        { name: "Page1", state: "unchecked" },
        { name: "Page2", state: "unchecked" },
        { name: "Page3", state: "unchecked" },
        { name: "Page4", state: "unchecked" },
    ]);

    // Toggle All Pages checkbox
    const toggleAllPages = () => {
        const newState: CheckboxState = allPagesChecked === "unchecked" ? "tickBlue" : "unchecked";
        setAllPagesChecked(newState);
        setPages(pages.map(p => ({ ...p, state: newState })));
        setIsOpen(!isOpen); // open/close dropdown
    };

    // Toggle individual page
    const togglePage = (index: number) => {
        const newPages = [...pages];
        newPages[index].state = newPages[index].state === "unchecked" ? "tickBlue" : "unchecked";
        setPages(newPages);

        const allChecked = newPages.every(p => p.state === "tickBlue");
        setAllPagesChecked(allChecked ? "tickBlue" : "unchecked");
    };

    return (
        <div
            style={{
                width: "380px",
                height: "395px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "370px",
                    height: "42px",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#FFFFFF",
                    fontSize: "16px",
                }}
                onClick={toggleAllPages}
            >
                <span
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        verticalAlign: "middle",
                        letterSpacing: "0px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#1F2128",
                    }}
                >
                All pages
                </span>
                <DesktopCheckbox state={allPagesChecked}/>
            </div>


            {isOpen && (
                <div style={{display: "flex", flexDirection: "column", gap: "3px", paddingLeft: "12px"}}>
                    {pages.map((page, idx) => (
                        <ListItem key={idx} index={idx} state={page.state} name={page.name} onTogglePage={(i) => {
                            const newPages = [...pages];
                            newPages[i].state = newPages[i].state === "unchecked" ? "tickBlue" : "unchecked";
                            setPages(newPages);

                            // update All Pages checkbox
                            const allChecked = newPages.every(p => p.state === "tickBlue");
                            setAllPagesChecked(allChecked ? "tickBlue" : "unchecked");
                        }}/>
                    ))}
                </div>
            )}

            <div style={{height: "1px", backgroundColor: "#ccc", margin: "10px 0"}}/>
            {/* Button at the bottom */}
            <div style={{display: "flex", justifyContent: "center", marginTop: "auto"}}>
                <button style={buttonStyle}>Done</button>

            </div>
        </div>
    );
};

export default PagesDropdownCard;
