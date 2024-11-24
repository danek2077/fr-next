"use client";
import { useParams } from "next/navigation";
import React from "react";
type ArrType = { id: string; author: string; citation: string }[];
type DataType = { author: string; citation: string } | undefined;
const page = () => {
  const [data, setData] = React.useState<DataType>({
    author: "",
    citation: "",
  });
  const params = useParams<{ userId: string }>();
  const getRequest = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/citations");
      const arr: ArrType = await res.json();
      const found = arr.find((el) => (el.id = params.userId));
      console.log(found);
      if (found) {
        setData({ author: found.author, citation: found.citation });
      }
    } catch (error) {
      console.error(error);
      throw new Error("error api");
    }
  };
  React.useEffect(() => {
    getRequest();
  }, []);
  const updateData = () => {
    
  };
  return (
    <div>
      {data ? (
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
          <button onClick={updateData}>update</button>
        </div>
      ) : (
        <div>api error</div>
      )}
    </div>
  );
};

export default page;
