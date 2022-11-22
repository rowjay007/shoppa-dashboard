// @ts-nocheck
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { tokens } from "../../context/theme";
import { mockDataTeam } from "../../data/mockData";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 const columns = [
   { field: "id", headerName: "ID" },
   {
     field: "name",
     headerName: "Name",
     flex: 1,
     cellClassName: "name-column--cell",
   },
   {
     field: "age",
     headerName: "Age",
     type: "number",
     headerAlign: "left",
     align: "left",
   },
   {
     field: "phone",
     headerName: "Phone Number",
     flex: 1,
   },
   {
     field: "email",
     headerName: "Email",
     flex: 1,
   },
   {
     field: "accessLevel",
     headerName: "Access Level",
     flex: 1,
     renderCell: ({ row: { access } }) => {
       return (
         <Box
           width="60%"
           m="0 auto"
           p="5px"
           display="flex"
           justifyContent="center"
           backgroundColor={
             access === "admin"
               ? colors.blueAccent[600]
               : access === "manager"
               ? colors.blueAccent[700]
               : colors.blueAccent[700]
           }
           borderRadius="4px"
         >
           {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
           {access === "manager" && <SecurityOutlinedIcon />}
           {access === "user" && <LockOpenOutlinedIcon />}
           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
             {access}
           </Typography>
         </Box>
       );
     },
   },
 ];

  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
