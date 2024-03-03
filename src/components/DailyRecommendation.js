import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Watermark,
  Tooltip,
  Collapse,
} from "antd";

const ISDEV = process.env.NODE_ENV === "development" ? true : false;

const DailyRecommendation = () => {
  const [songSrc, setSongSrc] = useState("");

  const RecommendSongs = [
    {
      name: "carry the torch for you!!",
      bv: "BV1KX4y1j7d7",
      src: "/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "FLAME KISMET",
      bv: "BV1gu41137YP",
      src: "/media/cc0-audio/t-rex-roar.mp3",
    },
    {
      name: "Starlight Fluorite",
      bv: "BV1nu4y1j7hb",
      src: "/media/cc0-audio/t-rex-roar.mp3",
    },
  ];

  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row>
          <Space direction="vertical" size="small" style={{ display: "flex" }}>
            {RecommendSongs.map((song, index) => (
              <Tooltip
                title={
                  <a
                    style={{ color: "white", textDecoration: "underline" }}
                    href={`https://www.bilibili.com/video/${song.bv}`}
                  >
                    {song.bv}
                  </a>
                }
                color={"pink"}
                key={index}
              >
                <Button
                  key={index}
                  onClick={() => {
                    if (ISDEV) {
                      console.log(
                        `song name: [ ${song.name} ]\nsong src: ${song.src}`,
                      );
                    }
                    setSongSrc(song.src);
                  }}
                >
                  {song.name}
                </Button>
              </Tooltip>
            ))}
          </Space>
        </Row>
        <audio controls src={songSrc}></audio>
      </Space>
    </>
  );
};

export default DailyRecommendation;
