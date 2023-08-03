import { ExecException } from "child_process";
import { resolve } from "path";
import React from "react";

export default async function TodoDetail({
  params,
}: {
  params: { id: number };
}) {
  await sleep(1000);
  console.log("SALAM");
  return <div>TodoDetail {params.id}</div>;
}

function sleep(ms: number) {
  return new Promise((resolve: any, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
