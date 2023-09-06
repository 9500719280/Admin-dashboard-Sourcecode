import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';


export default function About(){
    return(
        <>
         <Box height={60} />
            <Navbar/> 
                <Box sx={{ display: 'flex' }}>
                <Sidenav/>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div>
                        For more than 80 years, Praveen Product has been India's 
                        leading provider of Sales and Market.
                        Each month, our award-winning Products, Sales, 
                        and social media channels offer guidance to tens 
                        of millions of visitors. All Praveen products and services are backed 
                        by the largest team of professional Workers in India.

                        Thanks for joining us.
                    </div>
                    </Box>
                </Box>
               
        </>
           
    )
}
