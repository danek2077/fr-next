import Link from "next/link";
import DeleteButton from "./widgets/DeleteButton";
import { prisma } from "./db";

type GetDataType = { id: number; author: string; citation: string }[];
export default async function Home() {
  const citations = await prisma.sampleForm.findMany();
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
            <DeleteButton id={el.id} />
            <Link href={`/admin/${el.id}`}>change</Link>
          </div>
        ))}
    </div>
  );
}
