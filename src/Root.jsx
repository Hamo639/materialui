import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,

  Divider,
  
  Stack,

} from "@mui/material";
import Appbarr from "./Materialui-comp/Appbar";
import Listt from "./Materialui-comp/List";
import Cardd from "./Materialui-comp/Cardd";
import Sidebar from "./Materialui-comp/Sidebar";

import Modall from "./Materialui-comp/Modall";


const Root = () => {
  const [showlist, setshowlist] = useState("none");
  

  const [mode, setmode] = useState(
    localStorage.getItem("currentmode") === null
      ? "light"
      : localStorage.getItem("currentmode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mode,
    },
  });
  return (
    <Box className={mode}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Appbarr {...{ showlist, setshowlist }} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          spacing={3}
          sx={{ justifyContent: "space-between" }}
        >
          <Listt {...{ setmode, mode, showlist, setshowlist }} />
          <Cardd />
          <Sidebar />
          <Box sx={{ position: "fixed", bottom: 11 }}>
            <Modall />
          </Box>
        </Stack>
      </ThemeProvider>
    </Box>
  );
};

export default Root;
