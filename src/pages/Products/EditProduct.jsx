import { Button, IconButton } from '@mui/material';
import React from 'react';
import {Typography, Box} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
// import IconButton from "@mui/icons-material/IconButton";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {db} from '../../firebase-config';
import {collection, getDocs, updateDoc, doc} from "firebase/firestore";
import Swal from 'sweetalert2';
// import {addDoc } from 'firebase/firestore';
import { useAppStore } from '../../../src/appStore';


export default function EditProduct({fid, closeEvent}){
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  // const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Products");
  const setRows = useAppStore((state) => state.setRows);

  useEffect(() => {
    console.log ("FID:" + fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  },[fid.id, fid.name, fid.price, fid.category] );

  const handleNameChangePage = (event) => {
    setName(event.target.value);
  };
  const handlePriceChangePage = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChangePage = (event) => {
    setCategory(event.target.value);
  };

    const createUser = async ()=>{
        const userDoc = doc(db,'Products', fid.id);
        const newFields = {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date()),
        };
        await updateDoc (userDoc, newFields);
         getUsers();
         closeEvent();
         Swal.fire('Submitted!', 'Your file has been updated', 'success');
    };

    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };
  

    const currencies = [
            {
              value: 'Mobile',
              label: 'Mobile',
            },
            {
              value: 'Laptop',
              label: 'Laptop',
            },
            {
              value: 'Electronics',
              label: 'Electronics',
            },
            {
              value: 'Others',
              label: 'Others',
            },
          ];         
      

    return(
        <>           
           <Box sx={{ m: 2}} />
           <Typography varient="h5" align="center">
              Edit Product
            </Typography>   
            <IconButton
            style={{ position:'absolute', top:"0", right:'0' }}
            onClick={closeEvent}
            >
                <CloseIcon/>
            </IconButton>
            <Box height={20}></Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField id="outlined-basic" 
                        label="Name" onChange={handleNameChangePage} 
                        variant="outlined" size='small' 
                        sx={{minWidth:'100%'}} 
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField id="outlined-basic" label="Price" 
                        InputProps={{
                          startAdornment:(
                            <InputAdornment position="start">
                              <CurrencyRupeeIcon/>
                            </InputAdornment>
                          )
                        }}                      
                        size='small'
                        onChange={handlePriceChangePage} 
                        variant="outlined" 
                        sx={{minWidth:'100%'}} 
                      />
                    </Grid>
                    <Grid item xs={6}>
                       <TextField id="outlined-basic" 
                       label="Category" 
                       select 
                       onChange={handleCategoryChangePage} 
                       variant="outlined" 
                       size='small' 
                       
                       sx={{minWidth:'100%'}}
                       >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                       </TextField>

                        
                    </Grid>
                    <Grid item xs={12}>
                       <Typography variant='h5' align='center'>
                        <Button variant='contained' onClick={createUser}>
                            Submit
                        </Button>
                       </Typography>
                    </Grid>
                </Grid>
            <Box sx={{ m: 4}}  />
        </>           
    )
}