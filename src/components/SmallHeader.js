import React from 'react';
import Image from "next/image";

import logo from "../../public/logo.svg";

export default function SmallHeader() {
  return (
    <div className="flex items-center space-x-4 p-4 ">
      {/* Left Image */}
      <div className="flex-shrink-0 w-20 h-20">
        <Image
          priority
          src={logo}
          alt="LeCrone Fine Art"
        />
      </div>

      {/* Right Text */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold"
            style={{fontFamily: 'mrs-eaves-roman-small-caps'}}>LeCrone Fine Art</h1>
      </div>
    </div>
  )
}
