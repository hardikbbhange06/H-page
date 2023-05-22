import React from "react";
import "./Banner.css";
import headerImage from "./shape1..svg";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function Banner() {
  return (
    
    <Container className="love1" maxWidth="100%" sx={{mr:'55'}}>
      <div className="banner2">
        
          <div className="row align-items-center">
            <div className="Book">
              <div className="bo12">
                <h2>
                Permanent Relief from adenoids
                  {" "}
                </h2>

                <h2>with <span className="red">minimal-invasive</span></h2>
              </div>
              
              <h5>Get full medical assistance and consultation for diseases</h5>
              <h5 className="H">
                {" "}
                Hassle-free experience throughout your treatment.
              </h5>
              <br />
              <br />
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  color="warning"
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  Book Appointments{" "}
                </Button>
                <br />
                <br />&nbsp;
                <hr className="hr" />
                <br />
                <br />&nbsp;&nbsp;
                <Button>Call our Agent </Button>
              </ButtonGroup>
            </div>
            <div>{/* <img className="imgg" src={headerImage} /> */}</div>
          </div>
        
      </div>
    </Container>
  );
}

export default Banner;
