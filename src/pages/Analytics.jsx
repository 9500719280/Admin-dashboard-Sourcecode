import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import '../Dash.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ChartHD from '../charts/ChartHD';
import GioChart from '../charts/GioChart';
import PieChart from '../charts/PieChart';
import CountUp from 'react-countup';


export default function Analytics(){
    return(
        <>
            <div className='bgcolor'>
                <Navbar/>
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                <Sidenav/>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ width: '100%' }}>
                            
                                <div className='w'>
                                    <div className='w2'>
                                        <div className='q'>
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                                <Grid item xs={5.8}>
                                                    <Card sx={{  height: 125}} className='gradient' >                       
                                                        <CardContent>
                                                            
                                                            <Typography gutterBottom variant="body2" 
                                                               component="div" 
                                                               sx={{color:"#ffffff"}}>
                                                                Visitors
                                                            </Typography>
                                                            <Typography gutterBottom variant="h5" 
                                                                component="div" 
                                                                sx={{color:"#ccd1d1"}}>
                                                              <CountUp delay={0.2} end={14500} duration={0.3}  />
                                                            </Typography> 
                                                            <Typography gutterBottom variant="body2" 
                                                               component="div" 
                                                               sx={{color:"#ccd1d1"}}>
                                                                Since last Two days
                                                            </Typography>                   
                                                                            
                                                        </CardContent>                              
                                                    </Card>
                                                
                                                </Grid>
                                                <Grid item xs={5.8}>
                                                    <Card sx={{ height: 125}} className='gradientlight' >                       
                                                        <CardContent>
                                                            
                                                            <Typography gutterBottom variant="body2" 
                                                               component="div" sx={{color:"#ffffff"}}>
                                                                Visitors
                                                            </Typography>
                                                            <Typography gutterBottom variant="h5" 
                                                               component="div" sx={{color:"#ccd1d1"}}
                                                            >
                                                                 <CountUp delay={0.2} end={24000} duration={0.6}  />
                                                            </Typography> 
                                                            <Typography gutterBottom variant="body2" 
                                                                component="div" sx={{color:"#ccd1d1"}}
                                                            >
                                                                Since last week
                                                            </Typography>                   
                                                                            
                                                        </CardContent>                              
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                                            <Grid item xs={5.8}>
                                                <Card sx={{  height: 125}} className='gradient' >                       
                                                    <CardContent>
                                                    
                                                        <Typography gutterBottom variant="body2" 
                                                        component="div" sx={{color:"#ffffff"}}>
                                                            Visitors
                                                        </Typography>
                                                        <Typography gutterBottom variant="h5" 
                                                        component="div" sx={{color:"#ccd1d1"}}>
                                                            <CountUp delay={0.2} end={39400} duration={0.5}  />
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" 
                                                        component="div" sx={{color:"#ccd1d1"}}>
                                                            Since last two week
                                                        </Typography>                 
                                                                        
                                                    </CardContent>                              
                                                </Card>
                                            </Grid>
                                            <Grid item xs={5.8}>
                                                <Card sx={{ height: 125}} className='gradientlight' >                       
                                                        <CardContent>
                                                        
                                                            <Typography gutterBottom variant="body2" 
                                                            component="div" sx={{color:"#ffffff"}}>
                                                                Visitors
                                                            </Typography>
                                                            <Typography gutterBottom variant="h5" 
                                                            component="div" sx={{color:"#ccd1d1"}}>
                                                                <CountUp delay={0.4} end={48700} duration={0.6}  />
                                                            </Typography>
                                                            <Typography gutterBottom variant="body2" 
                                                            component="div" sx={{color:"#ccd1d1"}}>
                                                                Since last month 
                                                            </Typography>                 
                                                                            
                                                        </CardContent>                              
                                                </Card>
                                            </Grid>                               
                                        </Grid>
                                    </div>
                                    <div className='w1'>
                                        <Grid item xs={7}>
                                            <Card>
                                                <CardContent>
                                                    <Typography>
                                                        <ChartHD/>
                                                    </Typography>  
                                                </CardContent>   
                                            </Card>
                                        </Grid>   
                                    </div>
                                </div>
                                <div className='e'>
                                    <div className='e1'>
                                        <Grid item xs={7}>
                                            <Card>
                                                <CardContent>
                                                    <Typography>
                                                       <GioChart/>
                                                    </Typography>  
                                                </CardContent>   
                                            </Card>
                                        </Grid> 
                                    </div>
                                    <div className='e2'>
                                        <Grid item xs={4}>
                                            <Card>
                                                <CardContent>
                                                    <Typography>
                                                        <PieChart/>
                                                    </Typography>  
                                                </CardContent>   
                                            </Card>
                                        </Grid> 
                                    </div>
                                </div>  


                        </Box>
                    </Box>
                </Box>      
            </div>
        </>
           
    )
}
