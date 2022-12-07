import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import JiraKanbanBoard from "../../components/JiraKanbanBoard";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Kanban Board" subtitle="Kanban Project Management Board" />
      <Box height="75vh">
        <JiraKanbanBoard />
      </Box>
    </Box>
  );
};

export default Line;
