import React from "react";
import Image from "next/image";
import logo from "../../../public/sources/images/logo.svg";
import document from "../../../public/sources/images/icon-document.svg";
import folder from "../../../public/sources/images/icon-folder.svg";
import upload from "../../../public/sources/images/icon-upload.svg";
import IconFylo from "./IconFylo";

const Fylo = () => {
  return (
    <div className="bg-neutral-darkBlue w-[min(100%-3rem,60rem)]
     flex flex-col gap-8 p-sm md:p-md rounded-xl rounded-tr-[5rem] md:rounded-tr-[6rem]  ">
      <section>
        <Image src={logo} alt="logo image" />
      </section>
      <section className="flex gap-4 ">
        <IconFylo icon={document} />
        <IconFylo icon={folder} />
        <IconFylo icon={upload} />
      </section>
    </div>
  );
};

export default Fylo;
