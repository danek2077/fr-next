"use client";
import { updateDataApi } from "@/app/api/citation.action";
import { useRouter } from "next/navigation";
import React from "react";
type DataType = { author: string; citation: string };
type PropsType = { author: string; citation: string; userId: number };
const ChangeUser = ({ author, citation, userId }: PropsType) => {
  const [data, setData] = React.useState<DataType>({
    author: author,
    citation: citation,
  });
  const [load, setLoad] = React.useState(true);
  const router = useRouter();
  const updateData = async () => {
    setLoad(false);
    try {
      const res = await updateDataApi(userId, data.author, data.citation);
      if (res) {
        router.push("/");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoad(true);
    }
  };
  return (
    <div>
      <h2>author:</h2>
      <input
        value={data.author}
        onChange={(e) =>
          setData({ author: e.target.value, citation: data.citation })
        }
      />
      <h2>citation:</h2>
      <input
        value={data.citation}
        onChange={(e) =>
          setData({ author: data.author, citation: e.target.value })
        }
      />
      <button onClick={updateData}>{load ? "update" : "loading..."}</button>
    </div>
  );
};

export default ChangeUser;
