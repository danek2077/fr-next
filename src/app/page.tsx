"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { prismaDeleteById } from "./(routes)/new/citation.action";
import Link from "next/link";
import { prisma } from "./db";
type GetDataType = { id: number; author: string; citation: string }[];
export default async function Home() {
  const [citations, setCitations] = React.useState<GetDataType>([]);
  // const xzkak = await prisma.sampleForm.findMany();
  // console.log(xzkak);
  const router = useRouter();
  const fetchGet = async () => {
    const res = await fetch("api/citations");
    setCitations(await res.json());
  };
  React.useEffect(() => {
    fetchGet();
  }, []);
  const deleteCitation = async (id: number) => {
    await prismaDeleteById(id);
    router.refresh();
    fetchGet();
  };
  return (
    <div>
      <div>home</div>
      {citations.length > 0 &&
        citations.map((el) => (
          <div key={el.id}>
            <h1>
              {el.id} {el.author}
            </h1>
            <div>{el.citation}</div>
            <button onClick={() => deleteCitation(el.id)}>delete</button>
            <Link href={`/admin/${el.id}`}>change</Link>
          </div>
        ))}
    </div>
  );
}
