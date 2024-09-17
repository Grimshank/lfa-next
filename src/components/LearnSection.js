import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function LearnSection({ work }) {
  return (
    <div className="bg-[#5280BB] py-4 my-8 grid grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-3xl font-medium mx-auto mb-4 text-white"
          style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
        >
          Learn
        </h1>
        <div className="mx-4 text-white">
          Sean teaches oil and acrylic painting to both beginning and accomplished students, find out more
        </div>
        <Link href="/instruction" legacyBehavior>
          <div
            className="bg-[#ED9238] p-6 mt-4 rounded-xl"
          >
            LEARN WITH SEAN
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 md:mt-0">
          <Image src="/class_students.jpg" alt="class" width={256} height={256}/>
        </div>
      </div>
    </div>
  )
}
