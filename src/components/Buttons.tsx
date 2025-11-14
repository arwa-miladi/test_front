import React from "react";


export const buttonStyle: React.CSSProperties = {
    width: "340px",
    height: "40px",
    backgroundColor: "#FFCE22",
    color: "black",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
};


const hoverStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#FFD84D",
};

const Buttons: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <button style={buttonStyle}>Done</button>
            <button style={hoverStyle}>Done</button>
            <button style={buttonStyle}>Done</button>
        </div>
    );
};

export default Buttons;
