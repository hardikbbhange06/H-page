import React from "react";
import {
  CarryOutOutlined,
  FileProtectOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import "./Adenoidectomy.css";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { CheckCircleOutlined } from "@mui/icons-material";
import { CardContent } from "@mui/material";

function Adenoidectomy() {
  return (
    <div className="n">
      <div className="ho">
        <div className="Bu">
          <Typography.Title level={1}>What is adenoidectomy</Typography.Title>
          <Typography level={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
        </div>
        &nbsp;&nbsp;
        <br />
        <br />
        <Space direction="horizontal" size={90}>
          <Card className="po11" style={{ paddingRight: "5px", backgroundColor: "#FFFFFF", width:231.15, height: 174.14 }}>
          
            <CheckCircleOutlined
              style={{
                color: " hwb(0 100% 0%)",
                backgroundColor: "hwb(187 5% 30%)",

                borderRadius: 20,
                borderColor: "red",
                fontSize: 50,
                padding: 8,
                height:54,
                width: 54,
              }}
            />
          

            <Typography className="po22" variant="body2">
              USFDA Approved
              <br />
              Procedures
            </Typography>
          </Card>

          <Card style={{ paddingRight: "5px", backgroundColor: "#FFFFFF" ,width:200, }}>
            <ContentCutIcon
              style={{
                color: " hwb(0 100% 0%)",
                backgroundColor: "hwb(23 36% 5%)",

                borderRadius: 20,
                borderColor: "red",
                fontSize: 50,
                padding: 8,
                height: 54,
                width: 54,
              }}
            />

            <Typography  className="po22" variant="body2">
              No Cuts, No Wounds,
              <br />
              Painless
            </Typography>
          </Card>
          <Card style={{ paddingRight: "5px", backgroundColor: "#FFFFFF",width:200, }}>
            <FileProtectOutlined
              style={{
                color: "hwb(0 100% 0%)",
                backgroundColor: "hwb(216 2% 49%)",

                borderRadius: 20,
                borderColor: "red",
                fontSize: 50,
                padding: 8,
                height: 54,
                width: 54,
              }}
            />

            <Typography className="po11" variant="body2">
              Insurance Paperwork's
              <br />
              support
            </Typography>
          </Card>
          <Card style={{ paddingRight: "5px", backgroundColor: "#FFFFFF",width:200, }}>
            <EventAvailableIcon
              style={{
                color: "hwb(0 100% 0%)",
                backgroundColor: "hwb(214 0% 91%)",

                borderRadius: 20,
                borderColor: "red",
                fontSize: 50,
                padding: 8,
                height: 54,
                width: 54,
              }}
            />

            <Typography className="po11" variant="body2">
              1 Day
              <br />
              Procedure
            </Typography>
          </Card>
        </Space>
      </div>
    </div>
  );
}

export default Adenoidectomy;

// export default Adenoidectomy
