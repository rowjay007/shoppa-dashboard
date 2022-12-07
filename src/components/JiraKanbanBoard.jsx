// @ts-nocheck
import React, { useState } from "react";
import {
  ColumnsDirective,KanbanComponent,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-react-kanban/styles/material.css";
import { useTheme } from "@mui/material";
// import { tokens } from "../context/theme";

const JiraKanbanBoard = () => {
  const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const [data] = useState([
    {
      Id: 1,
      Title: "Task 1",
      Status: "Open",
      Category: "Story",
    },
    {
      Id: 2,
      Title: "Task 2",
      Status: "In Progress",
      Category: "Improvement",
    },
    {
      Id: 3,
      Title: "Task 3",
      Status: "Closed",
      Category: "Bug",
    },
  ]);

  return (
    <KanbanComponent
      id="kanban"
      dataSource={data}
      keyField="Id"
      swimlaneSettings={{ keyField: "Category" }}
    >
      <ColumnsDirective>
        <ColumnDirective headerText="Open" keyField="Open" />
        <ColumnDirective headerText="In Progress" keyField="In Progress" />
        <ColumnDirective headerText="Closed" keyField="Closed" />
      </ColumnsDirective>
    </KanbanComponent>
  );
};

export default JiraKanbanBoard;