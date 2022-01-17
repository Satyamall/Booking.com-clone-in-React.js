import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function SideBar({handleSupplier,handleFair,handleMilage}) {
  const drawer = (
    <div>
      <List>
        <h3>Supplier</h3>
        {['Alamo', 'Avis', 'Budget', 'Citi Rental', 'Currie Motors Car & Van Rental','Easirent','Enterprise','All'].map((text) => (
          <ListItem button key={text} sx={{display: "flex", gap: "1rem",m: 0,p:0}} onClick={()=>handleSupplier(text)}>
            <input type="checkbox" />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <h3>Fair Less Than</h3>
        {[ 1000,2000, 3000,5000,7000,10000,"All"].map((text) => (
          <ListItem button key={text} sx={{display: "flex", gap: "1rem",m: 0,p:0}} onClick={()=>handleFair(text)}>
            <input type="checkbox" />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
          <h3>Milage Less or Equal</h3>
          {[200,250,300,350,400,"All"].map((text) => (
          <ListItem button key={text} sx={{display: "flex", gap: "1rem",m: 0,p:0}} onClick={()=>handleMilage(text)}>
            <input type="checkbox" />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
      <Box sx={{width: 280, borderRight: "1px solid black"}}>
          {drawer}
      </Box>
  );
}

