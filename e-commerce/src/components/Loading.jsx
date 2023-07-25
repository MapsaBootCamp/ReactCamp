import React from "react";
import loadingSVG from "../assets/loading.svg";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className={styles.loading}
    >
      <img src={loadingSVG} alt="loading..." />
    </div>
  );
}
