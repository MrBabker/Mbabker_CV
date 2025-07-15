import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/profile.png"
        alt="Profile Photo"
        className="w-60 h-60 rounded-2xl object-cover border-2 shadow-2xl"
        width={100}
        height={100}
      />
    </div>
  );
}
