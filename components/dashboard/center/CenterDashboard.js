import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";

import { useSelector } from "react-redux";
import Template1 from "../../templates/template-1/Template1";
import Template2 from "../../templates/template-2/Template2";
import Template3 from "../../templates/template-3/Template3";

function CenterDashboard() {
  const state = useSelector((state) => state.template);
  const { templateId } = state;
  
  return (
    <div className={styles.dashboardDiv}>
      {templateId === "" && <Template1 />}
      {templateId === "resume-001" && <Template1 />}
      {templateId === "resume-002" && <Template2 />}
      {templateId === "resume-003" && <Template3 />}
    </div>
  );
}

export default CenterDashboard;
