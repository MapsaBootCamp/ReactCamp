import React from "react";
import { useSelector } from "react-redux";

export default function TestCounter() {
  const count = useSelector((state) => state.handleCount);
  return <div>{count}</div>;
}
