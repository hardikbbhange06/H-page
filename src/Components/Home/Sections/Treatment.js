import * as React from "react";
import headerImage1 from "./Picture3.svg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Content1 from "./ReadMore/Content1";
import Content2 from "./ReadMore/Content2";

export default function Treatment() {
  // const theme = useTheme();

  return (
    <CardContent
      style={{ borderBlockColor: "red" }}
      sx={{
        display: "flex",
        m: 2,
        p: 3,
        marginTop: 10,
        
        justifyContent: "center",
        borderBlockColor: "red",
      }}
    >
      <Card className="shu11" sx={{ display: "flex", p: 3,
        bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "#f30808" : "#f30808",
       }}>
        <Box
         sx={{
           display: "flex",
            flexDirection: "column",
            
             width: 584 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h3"
              style={{ textDecoration: "underline red" }}
            >
              Treatment
            </Typography>
            <Typography variant="h6" component="div">
              1. Diagonois
            </Typography>
            <Content1 />
            {/*  */}

            <Typography variant="h6" component="div">
              2.Procedure
            </Typography>
            <Content2 />
            {/*  */}
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: 584 }}>
          <img className="imgbox11" src={headerImage1} />{" "}
        </Box>
      </Card>
    </CardContent>
  );
}

// export default Treatment;
