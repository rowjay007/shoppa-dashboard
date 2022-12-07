// @ts-nocheck
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./context/theme";
import Topbar from "./container/window/Topbar";
import Sidebar from "./container/window/Sidebar";
import Dashboard from "./container/dashboard";
import { useState } from "react";
import Team from "./container/team";
import Invoices from "./container/invoices";
import Contacts from "./container/contacts";
import Bar from "./container/bar";
import Form from "./container/form";
import Calendar from "./container/calendar";
import Line from "./container/line";
import Pie from "./container/pie";
import Geography from "./container/geography";
import JiraKanbanBoard from "./container/kanban";
import Faq from "./container/faq";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/kanban" element={<JiraKanbanBoard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
