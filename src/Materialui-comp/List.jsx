import { AccountBox, Article, DarkMode,  Group, Home,  Light, Person, Settings, Storefront } from '@mui/icons-material';
import { Box,    ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import List from '@mui/material/List';
import { motion } from "framer-motion";

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const Listt = ({setmode,mode, showlist,setshowlist}) => {

  const myList = [
    { title: "Homepage", icon: <Home /> },
    { title: "Pages", icon: <Article /> },
    { title: "Groups", icon: <Group /> },
    { title: "Marketplace", icon: <Storefront /> },
    { title: "Friends", icon: <Person /> },
    { title: "Settings", icon: <Settings /> },
    { title: "Profile", icon: <AccountBox /> },
  ];
  return (
  <Box component="nav"  className="mylist" sx={{  flexGrow:"0.2", display: { xs: showlist, md: "block" } ,minWidth:"200px",}}>
      <motion.div
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, duration: 2 }}
>
    <List  sx={{position:"fixed"}}>

      {myList.map((item) => {
        return(
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        )
      }
      )}
      <ListItem>
      
        {mode==="light"?<DarkMode sx={{color:"orange"}}/>: <Light /> }
        <Box sx={{ml:"20px"}}>
        <Switch  onClick={() => {
            const newMode = mode === "light" ? "dark" : "light";
            localStorage.setItem("currentmode", newMode);
            setmode(newMode);
        }
        }{...label} defaultChecked />

        </Box>
      
      
          
          </ListItem>
              </List>

              </motion.div>
      
    </Box>
    
  );
}

export default Listt;
