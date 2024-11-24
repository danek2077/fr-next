import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const citations = await prisma.sampleForm.findMany();
  return NextResponse.json(citations);
}
export async function POST(req: NextRequest) {
  const json = await req.formData();
  const data = await prisma.sampleForm.create({
    data: {
      author: String(json.get("author")),
      citation: String(json.get("citation")),
    },
  });
  return NextResponse.json({ data });
}
