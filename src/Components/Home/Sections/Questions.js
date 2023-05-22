import React from "react";
import { QuestionCircleFilled } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import "./Questions.css";

function Questions() {
  return (
    <div className="nnnn8">
      <div className="nnn8">
        <div className="hooo8">
          <div className="Buuu8">
            <Typography.Title level={1}>
              BurlyCare in Questions
            </Typography.Title>
            <Typography level={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi
            </Typography>
            <br />
          </div>
          <Space direction="horizontal" size={50}>
            <Card className="ca28">
            <Typography.Title color="#161c32" level={1}>
              <QuestionMarkIcon
                style={{
                  color: " #ffffff",
                  backgroundColor: "#f12b2b",
                //   display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />
&nbsp;
             
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>

            <Card className="ca28">
            <Typography.Title color="#161c32" level={1}>
              <QuestionMarkIcon
                style={{
                  color: " #ffffff",
                  backgroundColor: "#f12b2b",
                //   display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />
&nbsp;
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>
          </Space>
          <Space direction="horizontal" size={50}>
            <Card className="ca28">
            <Typography.Title color="#161c32" level={1}>
              <QuestionMarkIcon
                style={{
                  color: " #ffffff",
                  backgroundColor: "#f12b2b",
                //   display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />
&nbsp;
                How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>

            <Card className="ca28">
            <Typography.Title color="#161c32" level={1}>
              <QuestionMarkIcon
                style={{
                  color: " #ffffff",
                  backgroundColor: "#f12b2b",
                //   display: "fle",
                  borderRadius: 20,
                  borderColor: "red",
                  fontSize: 50,
                  padding: 8,
                  height: 63,
                  width: 63,
                }}
              />
&nbsp; How Burlycare takes care of patients on the day of the surgery?
              </Typography.Title>
              <Typography color="#161c32" level={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
            </Card>
          </Space>
        </div>
      </div>
      <div  className="b1118" >
        <Button  variant="contained">Contained</Button>
      </div>
    </div>
  );
}

export default Questions;

//
// export default Questions