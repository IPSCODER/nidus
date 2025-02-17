import React from "react";
import { TextField } from "@mui/material";

const CustomInput = ({ label, type = "text", value, onChange, placeholder,name }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      name={name ? name : null}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      sx={{ minWidth: 250,height:40,
        "& .MuiOutlinedInput-root": {
          height: 40, // Set input height
          fontSize: 14, // Adjust text size if needed
          border: "none", // Remove default border
          "& fieldset": { border: "none" }, // Ensures no outline
        },
        "& .MuiInputLabel-root": {
          fontSize: 14, // Adjust label size
        },

       }}
    />
  );
};

export default CustomInput;
