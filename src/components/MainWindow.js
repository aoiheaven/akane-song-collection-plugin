import React from "react";
import { useState } from "react";
import { Card, Typography, Watermark, Tooltip, Collapse } from "antd";

import SearchPage from "./SearchPage";
import DailyRecommendation from "./DailyRecommendation";

import "../app.less";

const { Text, Link } = Typography;

const songlist_link = "https://docs.qq.com/sheet/DQnNjWUplaGl1WE9r?tab=000001";
const songlist_hintcolor = "#87d068";

const items = [
  {
    key: "1",
    label: "点歌搜索🔎",
    children: <SearchPage />,
  },
  {
    key: "2",
    label: "每日推荐👍",
    children: <DailyRecommendation />,
  },
  {
    key: "3",
    label: "唐唐NEED🤡",
    children: <p>😭😭😭😭😭😭😭😭😭😭😭😭😭😭</p>,
  },
];

const MainWindow = () => {
  return (
    <Card
      className="Wokoo-header"
      title={
        <Tooltip
          title={
            <>
              歌单是主播整理的👉
              <a href={songlist_link}>腾讯文档</a>
            </>
          }
          color={songlist_hintcolor}
          key={songlist_hintcolor}
        >
          🍷红晓音歌单（持续更新中）
        </Tooltip>
      }
    >
      <Collapse
        items={items}
        defaultActiveKey={["1", "2"]}
        // onChange={onChange}
      />
    </Card>
  );
};

export default MainWindow;
