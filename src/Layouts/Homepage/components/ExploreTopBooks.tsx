import React from "react";
import { useHistory } from "react-router-dom";
import "./wrapper.css"; // 引入 wrapper.css 文件
import "./customButton.css"; // 引入 customButton.css 文件

export const ExploreTopBooks = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/search");
  };

  return (
    <div className="p-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center flex-column">
        <div className="header-wrapper mb-4">
          <span className="top">Welcome to GeekLib</span>
          <span className="bottom" aria-hidden="true">
            Welcome to GeekLib
          </span>
        </div>
        <button
          className="button-89"
          role="button"
          style={{ marginTop: "8rem" }} // 设置 marginTop 值
          onClick={handleClick}
        >
          Explore top books
        </button>
      </div>
    </div>
  );
};
