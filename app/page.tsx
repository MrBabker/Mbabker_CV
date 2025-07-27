"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MyProfilePic from "@/components/MyProfilePic";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mohammed Babiker CV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-blue-100 font-sans leading-relaxed min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 border-gray-300 gap-4 text-center sm:text-left">
            <div>
              <h1 className="text-2xl font-bold text-blue-800 sticky top-0 bg-white z-500">
                Mohammed Babiker Alamin Alsunni
              </h1>
              <p className="font-semibold mt-1 text-gray-400">Game Developer</p>
              <p className="text-sm mt-2 text-gray-400">
                Email: smilemedo@outlook.com
              </p>
              <p className="text-sm text-gray-400">
                Phone / WhatsApp: 0502385815 +971502385815
              </p>
              <p className="text-sm text-gray-400">Location: Abu Dhabi, UAE</p>
            </div>

            <div onClick={() => setOpen((s) => !s)}>
              <Image
                src="/profile.png"
                alt="Profile Photo"
                className="w-28 h-28 rounded-full object-cover cursor-pointer shadow-2xl hover:shadow-blue-700"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-2 sticky top-0 bg-white">
              Summary
            </h2>
            <p className="text-gray-700">
              I have diverse and extensive experience in analysis, planning,
              software application design, and programming. <br />
              <br />I am highly passionate and motivated to continue learning
              and gaining expertise, particularly in Artificial Intelligence,
              Business Analysis, and Business Management. I aim for a deep and
              comprehensive understanding of these fields and their integration.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-2 sticky top-0 bg-white">
              Work Experience
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>
                  Game Developer at CTR A Studio, Sudan (2022 - 2023)
                </strong>
                <Link
                  href="https://breaklogic249.com/"
                  className="text-blue-600 pl-2"
                >
                  Break Logic studios
                </Link>
                <br />
                Developed various game projects using Unity.
              </li>
              <li>
                <strong>
                  Game Developer at Mizrab Studio, Abu Dhabi, UAE (2023 - 2025)
                </strong>
                <Link
                  href="https://store.steampowered.com/app/2599770/Tactical_Warfare/"
                  className="text-blue-600 pl-2"
                >
                  Tactical warfare game
                </Link>
                <br />
                Contributed to the development and design of mobile and PC
                games.
              </li>
              <li>
                <strong>
                  Front-End Game Developer (Online) at Rahebeen Studio and other
                  studios, Saudi Arabia (2024 - 2025)
                </strong>
                <Link
                  href="https://raheebeen.com/en/"
                  className="text-blue-600 pl-2"
                >
                  Raheebeen studio
                </Link>
              </li>
              <div>
                <span className="text-amber-600">
                  Kindly find below the links to my individual works :
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
                  <Link href="https://mbabker.itch.io/fighters">
                    <Image
                      src="/itcho.png"
                      alt="itcho Photo"
                      className="w-18 h-18 mt-2 rounded-full object-cover cursor-pointer shadow-xs hover:shadow-red-200 hover:shadow-xl"
                      width={100}
                      height={100}
                    />
                    <span className="pl-2 text-rose-600">Fighters</span>
                  </Link>
                  <Link href="https://mbabker.itch.io/followers-game">
                    <Image
                      src="/itcho.png"
                      alt="itcho Photo"
                      className="w-18 h-18 mt-2 rounded-full object-cover cursor-pointer shadow-xs hover:shadow-red-200 hover:shadow-xl"
                      width={100}
                      height={100}
                    />
                    <span className="pl-4 text-rose-600">Tabx</span>
                  </Link>
                  <Link href="https://mbabker.itch.io/social-media-game">
                    <Image
                      src="/itcho.png"
                      alt="itcho Photo"
                      className="w-18 h-18 mt-2 rounded-full object-cover cursor-pointer shadow-xs hover:shadow-red-200 hover:shadow-xl"
                      width={100}
                      height={100}
                    />
                    <span className="pl-3 text-rose-600">Social</span>
                  </Link>
                  <Link href="https://store.steampowered.com/app/3784950/SUBS/">
                    <Image
                      src="/steam.png"
                      alt="steam Photo"
                      className="w-18 h-18 mt-2 rounded-full object-cover cursor-pointer shadow-xs hover:shadow-blue-200 hover:shadow-xl"
                      width={100}
                      height={100}
                    />
                    <span className="pl-3 text-blue-600">SUBS</span>
                  </Link>
                </div>
              </div>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-2 sticky top-0 bg-white">
              Education
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>BSc in Electronic System Software Engineering</strong>,
                University of Science and Technology, Khartoum, Sudan (2014 -
                2019)
                <br />
                GPA: 3.48 / 4.0
              </li>
              <li>
                UAE Certification, Vision Private School, Abu Dhabi, UAE (2014)
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-2 sticky top-0 bg-white">
              Skills
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Strong computer and device handling</li>
              <li>Self-learning and quick learning</li>
              <li>Project analysis and planning</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Teamwork and management</li>
              <li>UI/UX design and UML diagrams</li>
              <li>Software Development Life Cycle (SDLC)</li>
              <li>Microsoft Office: Excel, PowerPoint, Word</li>
              <li>3D Modeling using Blender 3D</li>
              <li>Game development using Unity (Mobile, PC)</li>
              <li>Online game development using Unity (NetCode, Photon)</li>
              <li>Programming Languages: C/C++, HTML, CSS, Java, C# (Unity)</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-2 sticky top-0 bg-white">
              Languages
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Arabic: Native</li>
              <li>English: Proficient</li>
            </ul>
          </div>
        </div>
        {open && (
          <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50">
            {<MyProfilePic onClose={() => setOpen(false)} />}
          </div>
        )}
      </div>
    </>
  );
}
