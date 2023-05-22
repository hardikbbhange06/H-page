import React from "react";
import {   UsergroupDeleteOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import ApartmentIcon from '@mui/icons-material/Apartment';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import "./Numbers.css"

function Numbers() {
  return (
    <div className="n6">
    <div className="ho6">
    <div className="Bu6">
      <Typography.Title level={1}>BurlyCare in Numbers</Typography.Title>
      <Typography level={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
veniam, quis nostrud exercitation ullamco laboris nisi</Typography>
</div>
      <Space direction="horizontal"  size={90}>
        <Card>
          
            <UsergroupDeleteOutlined 
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                borderColor:"red",
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
             />

            <Statistic value="300+" title="Happy Patients" />
         
        </Card>

        <Card>
          
            <ApartmentIcon
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                borderColor:"red",
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
             />

            <Statistic value="100+" title="Hospitals" />
         
        </Card>
        <Card>
          
            <Diversity1Icon
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                borderColor:"red",
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
             />

            <Statistic value="200+" title="Doctors" />
         
        </Card>
        <Card>
          
            <LocationCityIcon
              style={{
                color: " #161c32",
                backgroundColor: "#FFFFFF",

                borderRadius: 20,
                borderColor:"red",
                fontSize: 50,
                padding: 8,
                height: 63,
                width: 63,
              }}
             />

            <Statistic value="3+" title="Cites" />
         
        </Card>
        
       
        
      </Space>
      </div>
    </div>
  );
}

export default Numbers;