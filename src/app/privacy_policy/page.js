"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="bg-white flex items-center flex-col min-h-screen py-20">
      <motion.div
        className="w-[90%] md:w-[75%]"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div>
          <p className="font-bold py-2">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="py-1">
            Thank you for visiting LeCrone Fine Art. (hereinafter known as “Provider,” “us” or
            “we”), which is otherwise known as lecrone.art (the “Site”). To better protect your
            privacy we provide this notice explaining our online information practices and the
            choices you can make about the way your information is collected and used. To make this
            notice easy to find, we make it available on our homepage and at every point where
            personally identifiable information may be requested.
          </p>
          <p className="py-1">
            We are committed to protecting your privacy and committed to developing technology that
            gives you the most powerful and secure online experience. Billing and personal
            information is encrypted whenever transmitted or received online. Personal information
            is accessible only to staff, agents, or contractors of Provider.
          </p>
          <p className="py-1">
            This privacy statement applies to all Provider-owned websites and domains. This privacy
            statement covers personally identifiable information, anonymous data collection and
            aggregate reporting. Personally identifiable information is any information that is
            associated with your name or personal identity.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-[90%] md:w-[75%]"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div>
          <p className="font-bold py-2">
            What we collect
          </p>
        </div>
        <div>
          <p className="py-1">
            During either a Login / Registration or Checkout process, the types of personal
            information you provide to us may include, but are not limited to, name, address,
            phone, fax, email address, social security number, license number, date of birth,
            username and password, billing information, transaction, and credit card information.
            Other information we may collect includes third party affiliates or partnerships, or
            customer service inquiry information.
          </p>
          <p className="py-1">
            When you browse our website, you do so anonymously. We may log your IP address
            (the Internet address of your computer) to give us an idea of which part of our website
            you visit and how long you spend there. But we will not link your IP address to any
            personal information unless you have logged in to our website. Like many other
            commercial websites, the Provider website may use a standard technology called a
            “cookie”; to collect information about how you use the site. Please go to
            “Use of Cookies”; below for more information.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-[90%] md:w-[75%]"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div>
          <p className="font-bold py-2">
            How we use it
          </p>
        </div>
        <div>
          <p className="py-1">
            We may use your personal information for the following purposes:
          </p>
          <ul style={{'list-style-type': 'square'}} className="pl-7">
            <li>
              To make the site easier for you to use by not making you enter your personal
              information more than once.
            </li>
            <li>
              To deliver services that you request or purchase.
            </li>
            <li>
              To help us create and publish content most relevant to you.
            </li>
            <li>
              To alert you of new products, product upgrades, special offers, updated information
              and other new services provided from Provider.
            </li>
            <li>
              To provide feedback in an online survey.
            </li>
            <li>
              To participate in promotional offers, contests, surveys, events and other programs.
            </li>
            <li>
              To request assistance or fill out support requests.
            </li>
            <li>
              To comply with requests from law enforcement.
            </li>
            <li>
              To make anonymous personal information provided to third parties for purposes of
              analysis and reporting.
            </li>
            <li>
              To supplement personal information collected from you with additional information
              from publicly available and commercially available sources and/or information from
              alliances, business partners and affiliates.
            </li>
            <li>
              To operate, assess and evaluate our business.
            </li>
            <li>
              To associate your information with other third-party data for the purpose of
              delivering relevant customer experiences.
            </li>
            <li>
              To protect against fraud and other unlawful activities, claims and liabilities.
            </li>
            <li>
              To comply with applicable legal requirements, relevant industry standards,
              contractual obligations and our policies.
            </li>
          </ul>
        </div>
      </motion.div>

      <Footer/>
    </main>
  );
}
