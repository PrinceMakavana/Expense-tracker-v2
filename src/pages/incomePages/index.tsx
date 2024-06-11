import { Padding } from "@mui/icons-material";
import AddIncomeForm from "./addIncomeForm"; 
import { Box, Typography , Divider , Container , Grid} from "@mui/material";
import React from "react";

    function IncomeList() {
        return (
        <>
        <Box
        margin='0px 16px'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        className='groups-page-heading'
      >
        <Typography className='groups-page-title' variant='h4' textAlign='left'>
          Your Income
        </Typography>
        <AddIncomeForm
          ModelButtonStyle={{
            borderRadius: "16px",
            width: "32px",
            margin: "5px 10px",
            height: "32px",
          }}
        />
      </Box>
      <Divider className='divider-bottom' />
      <Container maxWidth='xl' style={{padding : '16px'}}>
        <Box>
          Income Data Table Goes Here
        </Box>
      </Container>
        </>
    )
}

export default IncomeList;
