import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { motion } from "framer-motion";




const myCards = [
  {
    letter: "K",
    color: "royalblue",
    userName: "Mohamed Ashraf",
    imgLink:
      "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    letter: "A",
    color: "purple",
    userName: "Ashraf Shehata",
    imgLink:
      "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    letter: "N",
    color: "teal",
    userName: "Nada Ashraf",
    imgLink:
      "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    letter: "M",
    color: "royalblue",
    userName: "Hoda Yasser",
    imgLink:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
  

const Cardd = () => {
  const [anchorEl, setanchorEl] = useState(null);
  const [isopen, setisopen] = useState(false);
  const handleclick = (event) => {
    setanchorEl(event.currentTarget)
    setisopen(true)
  }
  const handleclose = (event) => {
    setanchorEl(null)
    setisopen(false)
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  

  return (
    <Box component="main" sx={{height:"2600px",flexGrow:"2"}}>
      {myCards.map((item) => {
        return(
          <motion.div
  initial={{ y: -300, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 50, duration: 1 }}
>
          <Card key={item.letter} sx={{ maxWidth: {sm:450,xs:"97%"},margin:"auto" ,marginTop:"100px",borderRadius:"10px",boxShadow: `
          0px 4px 10px rgba(255, 69, 0, 0.7), 
          0px 8px 20px rgba(178, 34, 34, 0.5)`}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: item.color }} aria-label="recipe">
                {item.letter}
              </Avatar>
            }
            action={
              <IconButton onClick={(eo) => {
                handleclick(eo)
              }
              } aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.userName}
            subheader="September 14, 2016"
          />
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isopen}
        onClose={handleclose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleclose}>Profile</MenuItem>
        <MenuItem onClick={handleclose}>My account</MenuItem>
        <MenuItem onClick={handleclose}>Logout</MenuItem>
      </Menu>
          <CardMedia
            component="img"
            height="194"
            image={item.imgLink}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
            <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
            
          </CardActions>
        
        </Card>
        </motion.div>
        )
      }
      )}
  
  
    </Box>
  );
}

export default Cardd;
