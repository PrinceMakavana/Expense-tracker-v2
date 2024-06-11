
import React from "react";
import { Box, Typography , Divider  , Container} from "@mui/material";
import AddInvestmentForm from "./addInvestmentForm";

function InvestmentList() {
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
          Your Investment
        </Typography>
        <AddInvestmentForm
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
            Investment Data Table Goes Here
        </Box>
      </Container>
        </>
    )
}

export default InvestmentList;
