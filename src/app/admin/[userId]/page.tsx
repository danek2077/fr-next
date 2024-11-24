"use client";
import { useParams } from "next/navigation";
import React from "react";
const page = () => {
  const [data, setData] = React.useState({ author: "", citation: "" });
  const params = useParams<{ userId: string }>();

  const getRequest = async () => {
    const res = await fetch("api/citations");
    console.log(await res);
  };
  React.useEffect(() => {
    getRequest();
  }, []);
  return (
    <div>
      <div>{params.userId}</div>
    </div>
  );
};

export default page;
