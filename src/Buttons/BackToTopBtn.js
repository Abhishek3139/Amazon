import React from "react";

function BackToTopBtn(props) {
  const style = {
    backgroundColor: "black",
    width: "100.1%",
    height: "50px",
    color: "white",
    textAlign: "center",
  };
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <div style={style} onClick={handleClick}>
      <h3 style={{ margin: "14px", display: "inline-block" }}>Back To Top</h3>
    </div>
  );
}

export default BackToTopBtn;
