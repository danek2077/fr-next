import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href={"/admin"}>/admin</Link>
      <Link className="m-10" href={"/"}>
        home
      </Link>
      <Link className="" href={"/new"}>
        new
      </Link>
    </div>
  );
};

export default Header;
