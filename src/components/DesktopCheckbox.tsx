import { CheckboxState } from "../App";

export const DesktopCheckbox: React.FC<{
    state?: CheckboxState;
    onToggle?: () => void;
}> = ({ state, onToggle }) => {

    const getBoxStyle = (state?: CheckboxState) => {
        switch (state) {
            case "unchecked":
                return { backgroundColor: "white", border: "1px solid gray" };
            case "tickLightGray":
            case "tickGray":
                return { backgroundColor: "#eee", border: "1px solid gray" };
            case "blurBlue":
                return {
                    backgroundColor: "#5087F8",
                    border: "1px solid blue",
                    boxShadow: "0 0 5px rgba(0,123,255,0.5)",
                };
            case "tickBlue":
                return { backgroundColor: "#2469F6", border: "1px solid #007BFF" };
            default:
                return {};
        }
    };

    const getTickStyle = (state?: CheckboxState) => {
        switch (state) {
            case "tickLightGray":
                return { borderColor: "#E3E3E3" };
            case "tickGray":
                return { borderColor: "gray" };
            case "blurBlue":
            case "tickBlue":
                return { borderColor: "white" };
            default:
                return { display: "none" };
        }
    };

    return (
        <div
            onClick={onToggle}
            style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                ...getBoxStyle(state),
            }}
        >
            <div
                style={{
                    width: "6px",
                    height: "12px",
                    border: "solid",
                    borderWidth: "0 2px 2px 0",
                    transform: "rotate(45deg)",
                    ...getTickStyle(state),
                }}
            ></div>
        </div>
    );
};
