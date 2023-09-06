import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import AccordianDash from '../components/AccordianDash';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../Dash.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from '../charts/BarChart';
import CountUp from 'react-countup';


export default function Home(){
    return (
        <>
        <div className='bgcolor'>
            <Navbar/>
            <Box height={70}/>
            <Box sx={{ display: 'flex'}}>
                <Sidenav/>
                <Box component='main' sx={{ flexGrow: 1, p:3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction='row'>
                                <Card sx={{ minWidth: 49 + '%', height: 150}} className='gradient' >                       
                                    <CardContent>
                                        <div>
                                           <CreditCardIcon className='T204'/>
                                        </div>
                                        <Typography gutterBottom variant="h5" 
                                           component="div" sx={{color:"#ffffff"}}>
                                          $<CountUp delay={0.2} end={500.00} duration={0.3}  />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                                          Total Earning
                                        </Typography>
                                        
                                    </CardContent>                              
                                </Card>
                                <Card sx={{ minWidth: 49 + '%', height: 150 }}
                                     className='gradientlight'>                       
                                    <CardContent>
                                        <div>
                                          <ShoppingBagIcon className='T204'/>
                                        </div>
                                        <Typography gutterBottom variant="h5" 
                                           component="div" sx={{color:"#ffffff"}}> 
                                          $<CountUp delay={0.2} end={900.00} duration={0.3}  />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" 
                                             component="div" sx={{color:"#ccd1d1"}}>
                                          Total Order
                                        </Typography>
                                        
                                    </CardContent>                              
                                </Card>
                            </Stack>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Stack spacing={2} >
                                <Card className='gradientlight'>                       
                                        <Stack spacing={2} direction='row' > 
                                            <div>                                       
                                              <StorefrontIcon className='T204'/>
                                            </div>  
                                                <div className='T203'>
                                                  <span className='price'>$203</span><br/>
                                                  <span className='pricesub'>Total Income</span>
                                                </div>               
                                        </Stack>                               
                                </Card>
                                <Card>                                                          
                                    <Stack spacing={2} direction='row'  > 
                                            <div>                                       
                                              <StorefrontIcon className='T204'/>
                                            </div>  
                                                <div className='T203'>
                                                  <span className='price'>$203</span><br/>
                                                  <span className='pricesub'>Total Income</span>
                                                </div>               
                                    </Stack>                                                                  
                                </Card>
                            </Stack>
                        </Grid>
                      
                    </Grid>
                    <Box height={20}/>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{height:60 + "vh"}}>                       
                                <CardContent>
                                    <BarChart/>
                                </CardContent>                              
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{height:60 + "vh"}}>                       
                                <CardContent>
                                    <div className='T203'>
                                        <span className='price'>Popular Products</span>                                      
                                    </div>                                       
                                   <AccordianDash/>
                                </CardContent>                              
                            </Card>
                        </Grid>
                    </Grid>
                </Box>              
            </Box>
        </div>
            
        </>   
    )
}
