import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

const H1 = styled.h1`
font-size:38px;
position:relative;
z-index:110;
`
const P = styled.p`
position:absolute;
top:60%;
z-index:109;
`

const PlanetUI = ({name,population}) => {
  return (
    <Box
      sx={{
        width: 300,  // Adjust size
        height: 300,  // Half of width to make it 50% circular
        backgroundColor: "#4CAF50", // Earth-like color
        borderRadius: "50%", // Half-circle shape
        position: "relative",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <H1>{name}</H1>
        <P>{population}</P>
          <Box
              sx={{
                animation: `spin ${10}s infinite linear`,
                "@keyframes spin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >

      <Box
        sx={{
          width: "30%",
          height: "30%",
          backgroundColor: "#2E7D32",
          borderRadius: "50%",
          position: "absolute",
          top: "20%",
          left: "20%",
        }}
        
      />
      <Box
        sx={{
          width: "20%",
          height: "20%",
          backgroundColor: "#388E3C",
          borderRadius: "50%",
          position: "absolute",
          top: "40%",
          left: "60%",
        }}
      />
            </Box>

    </Box>
  );
};

export default PlanetUI;
