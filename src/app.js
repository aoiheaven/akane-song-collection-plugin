import React from "react";
import { useState } from "react";
import { Watermark } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import MainWindow from "./components/MainWindow";

import "./app.less";
import logo from "../public/icon.jpg";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible ? (
        <>
          <CloseCircleOutlined
            className="Wokoo-close-icon"
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <div className="Wokoo">
            <Watermark content={["红晓音Akane", "歌单列表"]}>
              <MainWindow />
            </Watermark>
          </div>
        </>
      ) : (
        <div
          className="Wokoo-hide"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          <img src={logo} className="Wokoo-hide-logo" alt="logo" />
          Open
        </div>
      )}
    </>
  );
};

export default App;
