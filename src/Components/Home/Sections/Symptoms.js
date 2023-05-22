import React from "react";
import "./Symptoms.css";
import Imagee4 from "./co25.jpeg";
import Imagee5 from "./co26.jpeg";
import Imagee6 from "./co27.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { red } from "@material-ui/core/colors";

const { Meta } = Card;

const Symptoms: React.FC = () => (
  <div className="Bu11">
    <Typography.Title level={1}>Symptoms</Typography.Title>
    <div >
    <div className="cc11">
      <Row gutter={100}>
        <Col span={8}>
          <Card
            className="red11"
            style={{ width: 300 }}
            cover={<img alt="example" img src={Imagee4} />}
          >
            <Meta className="me11" title="Adenoviruses" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="red11"
            style={{ width: 300 }}
            cover={<img alt="example" img src={Imagee5} />}
          >
            <Meta className="me11" title="Bacteria Streptococcus" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="red11"
            style={{ width: 300 }}
            cover={<img alt="example" img src={Imagee6} />}
          >
            <Meta className="me11" title="Bacterial infection" />
          </Card>
        </Col>
      </Row>
      </div>
      <br />
      <div className="bucc11">
        <Stack spacing={2} direction="row" justifyContent={"end"} marginRight={30}>
          <Button variant="outlined">View all</Button>
        </Stack>
      </div>
    </div>
  </div>
);

export default Symptoms;

// export default Symptoms;
