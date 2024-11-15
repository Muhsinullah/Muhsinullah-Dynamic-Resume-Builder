import React from "react";
import Head from "next/head";
import CenterDashboard from "../components/dashboard/center/CenterDashboard";
import LeftSideBar from "../components/dashboard/left/LeftSideBar";
import RightSideBar from "../components/dashboard/right/RightSideBar";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Typography } from "@mui/material";

export default function Editor() {

  return (
    <div className={styles.container}>
      <ReactNotification />
      <Head>
        <title>MT Resume Builder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main}>
        <Box className={styles.dashboard}>
          <LeftSideBar />
          <CenterDashboard />
          <RightSideBar />
        </Box>
      </Box>
    </div>
  );
}
