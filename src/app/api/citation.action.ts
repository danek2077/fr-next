"use server";

import { prisma } from "@/app/db";

export const createNewForm = async (formData: FormData) => {
  try {
    const res = await fetch("http://localhost:3000/api/citations", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error("failed response");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const prismaDeleteById = async (id: number) => {
  await prisma.sampleForm.delete({
    where: {
      id: id,
    },
  });

  return { message: "deleted" };
};
