import React from "react";
import { useState } from "react";
import { Affix, FloatButton, Watermark } from "antd";
import {
  CloseCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import MainWindow from "./components/MainWindow";

import "./app.less";
import logo from "../public/icon.jpg";

const ISDEV = process.env.NODE_ENV === "development" ? true : false;
const InitIsVisible = ISDEV ? true : false;

const App = () => {
  const [isVisible, setIsVisible] = useState(InitIsVisible);

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
          {ISDEV ? <p className="DevHint">IN DEVELOPING...</p> : null}
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
