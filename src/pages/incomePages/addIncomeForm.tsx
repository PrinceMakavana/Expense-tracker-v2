import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
interface PropType {
    ModelButtonStyle : {
        [key : string]: string
    };
} 
function AddIncomeForm({ModelButtonStyle} : PropType) {
    return (
    <>
        <Button
        sx={{
          minWidth: "16px",
          color: "rgba(189,85,189,0.9)",
          ...ModelButtonStyle,
        }}
        variant='outlined'
        color='secondary'
        size='small'
        onClick={() => {console.log("Add Income")}}
      >
         <AddIcon />
      </Button>
    </>
    )
}

export default AddIncomeForm;
