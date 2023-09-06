import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AddCirclelcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Editlicon from "@mui/icons-material/Edit";
import Deletelcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
// import { useAppStore } from '../../appStore';
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import {db} from '../../firebase-config';
import {collection,getDocs, deleteDoc,doc } from "firebase/firestore";

import Modal from '@mui/material/Modal';
import AddProduct from '../../pages/Products/AddProduct';
import { useAppStore } from '../../appStore';
import EditProduct from './EditProduct';
import Skeleton from '@mui/material/Skeleton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const empCollectionRef = collection(db, "Products");
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);



  useEffect(()=> {
    getUsers();
  }, );

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",   
    confirmButtonText: "Yes delete it!",
    }).then((result) => {    
      if (result.value) {     
        deleteApi(id);
        }
    });
  }

  const deleteApi = async (id) => {
    const userDoc = doc(db, "Products", id);
    await deleteDoc (userDoc);
    Swal.fire ('Deleted', "Your file has been deleted", 'success');
    getUsers();
  };

  const filterData = (v) => {
    if (v) {   
      setRows([v]);   
    } else {
        getUsers();
    }
  }; 
  const editData = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category
    };
    setFormid(data);
    handleEditOpen();
  };



  return (
    <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct closeEvent={handleClose}/>
        </Box>
      </Modal>

      <Modal
        open={editopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProduct closeEvent={handleEditClose} fid={formid}/>
        </Box>
      </Modal>
    </div>
    {rows.length > 0 &&(
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{padding: '20px'}}>
          Product List
        </Typography>
        <Divider/>
        <Box height={10}/>

          <Stack direction="row" spacing={2} className="my-2 mb-2">

            <Autocomplete

              disablePortal

              id='combo-box-demo'

              options={rows}

              sx={{width: 300 }}

              onChange={(e, v) => filterData(v)}

              getOptionLabel={(rows) => rows.name || ""}

              renderInput={(params) => (

              <TextField {...params} size="small" label="Search Products" />
            )}
            />
            <Typography
              variant="16"
              component="div"
              sx={{flexGrow: 1}}
            ></Typography>
            <Button variant="contained" endlcon={<AddCirclelcon />}  onClick={handleOpen}>
              Add
            </Button>
          </Stack>
        <Box height={10} /> 

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
              
                  <TableCell align='left' style={{ minWidth: '100px'}}>
                    Name
                  </TableCell>
                  <TableCell align='left' style={{ minWidth: '100px'}}>
                    Price
                  </TableCell>
                  <TableCell align='left' style={{ minWidth: '100px'}}>
                    Category
                  </TableCell>
                  <TableCell align='left' style={{ minWidth: '100px'}}>
                    Date
                  </TableCell>
                  <TableCell align='left' style={{ minWidth: '100px'}}>
                    Action
                  </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} >
                    
                          <TableCell key={row.id} align='left'>
                            {row.name}
                          </TableCell>
                          <TableCell key={row.id} align='left'>
                            {row.price}
                          </TableCell>
                          <TableCell key={row.id} align='left'>
                            {row.category}
                          </TableCell>
                          <TableCell key={row.id} align='left'>
                            {row.date}
                          </TableCell>
                          <TableCell align='left'>
                            <Stack spacing={2} direction="row">

                              <Editlicon

                                style={{

                                fontSize: "20px",

                                color: "blue",

                                cursor: 'pointer',
                                }}

                                className='cursor-pointer'

                                onClick={() => {
                                  editData(row.id, row.name, row.price, row.category);
                                  }}
                              />

                              <Deletelcon
                                style={{
                                  fontSize: "20px",
                                  color: "darkred",
                                  cursor: 'pointer',
                                }}
                                onClick={()=>{
                                   deleteUser(row.id);
                                }} 
                              />

                            </Stack>                       
                          </TableCell>
                
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )}  
    {rows.length === 0 && (
      <>
        <Paper sx={{ width:'98%', overflow:'hidden', padding:'12px'}}>
          <Box height={20}/>
          <Skeleton variant="rectangular" width={'100%'} height={30} />
          <Box height={40}/>
          <Skeleton variant="rectangular" width={'100%'} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={'100%'} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={'100%'} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={'100%'} height={60} />
          <Box height={20}/>
          <Skeleton variant="rectangular" width={'100%'} height={60} />
          <Box height={20}/>
        </Paper>
      </>
    )}
    </>
  );
}