import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeDash from "./Component/Dashboard/HomeDash";
import StudentReg from "./Component/Register/StudentReg";
import Layout from "./Component/Layout/Layout";

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeDash />
            </Layout>
          }
        />
        <Route
          path="/student-reg"
          element={
            <Layout>
              <StudentReg />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
