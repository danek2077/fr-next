"use client";
import React, { FormEvent } from "react";
import { createNewForm } from "../../api/citation.action";
import { useRouter } from "next/navigation";

const page = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const router = useRouter();
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    try {
      const res = await createNewForm(formData);
      if (res) {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("post failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="author" placeholder="name" />
      <br />
      <input type="text" name="citation" placeholder="citation" />
      <br />
      <button type="submit">{isLoading ? "loading..." : "submit"}</button>
      {error && error}
    </form>
  );
};

export default page;
