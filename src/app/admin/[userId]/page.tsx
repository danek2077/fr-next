import { prisma } from "@/app/db";
import ChangeUser from "./ui/ChangeUser";
type ArrType = { id: number; author: string; citation: string };
type PageProps = {
  params: {
    userId: string;
  };
};
const page = async ({ params }: PageProps) => {
  const { userId } = await params;
  const citation_found = await prisma.sampleForm.findFirst({
    where: { id: Number(userId) },
  });
  const res: ArrType | null = citation_found;
  if (res === null) {
    return <div>user wasn't find</div>;
  } else {
    return (
      <div>
        <ChangeUser
          author={res.author}
          citation={res.citation}
          userId={Number(userId)}
        />
      </div>
    );
  }
};

export default page;
