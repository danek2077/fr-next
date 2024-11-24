"use client";
import React from "react";
import { prismaDeleteById } from "../api/citation.action";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const deleteCitation = async (id: number) => {
    await prismaDeleteById(id);
    router.refresh();
  };
  return <button onClick={() => deleteCitation(id)}>delete</button>;
};

export default DeleteButton;
