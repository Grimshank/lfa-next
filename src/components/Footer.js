import React from 'react';
import Link from "next/link";
import {SocialIcon} from "react-social-icons";

const Footer = () => {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-[9] text-center text-white p-5">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
        >
          LeCrone Fine Art
        </h1>
        <div>
          <a href="mailto:slecrone@gmail.com">slecrone@gmail.com</a> | Little Rock, Arkansas
        </div>

        <div className="flex flex-row items-center justify-center">
          <div>
            <SocialIcon url="https://www.instagram.com/lecronefineart" fgColor="#ED9238"
                        bgColor="transparent" className="!h-16 !w-16"/>
          </div>
          <div>
            <SocialIcon url="https://www.facebook.com/lecronefineart" fgColor="#ED9238"
                        bgColor="transparent" className="!h-16 !w-16"/>
          </div>
          <div>
            <SocialIcon url="mailto:slecrone@gmail.com" fgColor="#ED9238"
                        bgColor="transparent" className="!h-16 !w-16"/>
          </div>
        </div>

        <div className="flex w-screen flex-col md:flex-row">
          <div className="w-full md:w-1/2 text-white p-4">
            <div>
              LINKS:
            </div>
            <div>
              <Link href="/" legacyBehavior>
                <a className="underline">HOME</a>
              </Link>
            </div>
            <div>
              <Link href="/works" legacyBehavior>
                <a className="underline">WORKS</a>
              </Link>
            </div>
            <div>
              <Link href="/about" legacyBehavior>
                <a className="underline">ABOUT</a>
              </Link>
            </div>
            <div>
              <Link href="/instruction" legacyBehavior>
                <a className="underline">INSTRUCTION</a>
              </Link>
            </div>
            <div>
              <Link href="/faq" legacyBehavior>
                <a className="underline">FAQ</a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white p-4">
            <div>
              LEGAL:
            </div>
            <div>
              <Link href="/privacy_policy" legacyBehavior>
                <a className="underline">PRIVACY POLICY</a>
              </Link>
            </div>
            <div>
              <Link href="/terms_of_service" legacyBehavior>
                <a className="underline">WEBSITE TERMS OF USE</a>
              </Link>
            </div>
            <div>
              <Link href="/copyright_warning" legacyBehavior>
                <a className="underline">COPYRIGHT WARNING</a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          Copyright 2024 LeCrone Fine Art, LLC
        </div>
        <div>
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
