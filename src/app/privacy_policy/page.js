"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white flex items-center flex-col min-h-screen pt-20">
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
          <ul style={{listStyleType: 'square'}} className="pl-7">
            <li className="py-1">
              To make the site easier for you to use by not making you enter your personal
              information more than once.
            </li>
            <li className="py-1">
              To deliver services that you request or purchase.
            </li>
            <li className="py-1">
              To help us create and publish content most relevant to you.
            </li>
            <li className="py-1">
              To alert you of new products, product upgrades, special offers, updated information
              and other new services provided from Provider.
            </li>
            <li className="py-1">
              To provide feedback in an online survey.
            </li>
            <li className="py-1">
              To participate in promotional offers, contests, surveys, events and other programs.
            </li>
            <li className="py-1">
              To request assistance or fill out support requests.
            </li>
            <li className="py-1">
              To comply with requests from law enforcement.
            </li>
            <li className="py-1">
              To make anonymous personal information provided to third parties for purposes of
              analysis and reporting.
            </li>
            <li className="py-1">
              To supplement personal information collected from you with additional information
              from publicly available and commercially available sources and/or information from
              alliances, business partners and affiliates.
            </li>
            <li className="py-1">
              To operate, assess and evaluate our business.
            </li>
            <li className="py-1">
              To associate your information with other third-party data for the purpose of
              delivering relevant customer experiences.
            </li>
            <li className="py-1">
              To protect against fraud and other unlawful activities, claims and liabilities.
            </li>
            <li className="py-1">
              To comply with applicable legal requirements, relevant industry standards,
              contractual obligations and our policies.
            </li>
          </ul>
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
            Who we share it with
          </p>
        </div>
        <div>
          <p className="py-1">
            We never sell or rent your personal information. Provider may disclose your personal
            information if required to do so by law (for example, a subpoena) or regulation, or in
            good faith to (a) comply with legal processes served on the site, or (b) protect the
            rights and property of Provider, or (c) where our records indicate fraudulent activity
            or other deceptive practices that a governmental agency should be made aware of, or (d)
            where your communication suggests possible harm to others.
          </p>
          <p className="py-1">
            Provider may transfer information about Users if Provider is acquired by or merged with
            another company. Provider is not responsible for notifying User of such changes.
          </p>
          <p className="py-1">
            Provider may share some of your information with Campaigns (as that term is defined in
            the Basic Terms of Use) for the purpose of allowing the User to receive premium
            benefits or recognition that may be offered by Campaigns on this Site.
          </p>
          <p className="py-1">
            Provider will not share your information with third parties without your permission,
            other than what is mentioned in this Privacy Policy. It will only be used for the
            purposes stated above. We use personal information to reply to inquiries, handle
            complaints, provide operational notices, keep records up to date to notify you via
            periodic e-mails of technical service issues, specials, or other related
            product/service information. Your information may be shared with agents or contractors
            of Provider for the purpose of performing service for Provider.
          </p>
        </div>
      </motion.div>

      {/*
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
            Internet Commerce
          </p>
        </div>
        <div>
          <p className="py-1">
            The online registration at Provider is designed to give you options concerning the
            privacy of your credit card information, name, address, e-mail and any other
            information you provide us. Provider is committed to data security with respect to
            information collected on our site. We offer the industry standard security measures
            available through your browser called SSL encryption.
          </p>
        </div>
      </motion.div>
      */}

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
            Security of your Personal Information
          </p>
        </div>
        <div>
          <p className="py-1">
            Provider strictly protects the security of your personal information. We carefully
            protect your data from loss, misuse, unauthorized access or disclosure, alteration, or
            destruction. Your personal information is never shared outside the company without your
            permission, except as stated herein. Inside the company, data is stored in
            password-controlled servers with limited access.
          </p>
          {/*
          <p className="py-1">
            You also have a significant role in protecting your information. No one can see or edit
            your personal information without knowing your username and password, so do not share
            these with others.
          </p>
          <p className="py-1">
            Provider strictly protects the security of your personal information. We carefully
            protect your data from loss, misuse, unauthorized access or disclosure, alteration, or
            destruction. Your personal information is never shared outside the company without your
            permission, except as stated herein. Inside the company, data is stored in
            password-controlled servers with limited access.
          </p>
          <p className="py-1">
            We use SSL encryption when collecting or transferring sensitive data such as credit
            card and personal information. Credit card numbers are only used for processing payment
            and are not used for other purposes. Our efforts to protect credit card fraud help
            protect your financial data security.
          </p>
          */}
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
            Children’s Privacy
          </p>
        </div>
        <div>
          <p className="py-1">
            We do not knowingly collect, maintain, or use information from children under 13 and we
            do not want it. We will take steps to delete it if we learn we have collected it. No
            part of Provider’s site is directed to children under the age of 13. If you learn that
            your child has provided us with personal information without your consent, please
            contact us at the link below. If we learn that we have collected any personal
            information from children under 13, we will promptly take steps to delete such
            information.
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
            Use of Cookies
          </p>
        </div>
        <div>
          <p className="py-1">
            Our websites are not set up to track, collect or distribute personal information. Our
            site may generate certain kinds of non-identifying site usage data, such as number of
            hits and visits to our sites. This information is used for internal purposes only. The
            statistics contain no personal information and cannot be used to gather such
            information.
          </p>
          <p className="py-1">
            Provider Web sites may use “cookies” to help you personalize your online experience. A
            cookie is a text file that is placed on your hard disk by a Web page server. Cookies
            cannot be used to run programs or deliver viruses to your computer. Cookies are
            uniquely assigned to you, and can only be read by a web server in the domain that
            issued the cookie to you. You have the ability to accept or decline cookies. Most Web
            browsers automatically accept cookies, but you can usually modify your browser setting
            to decline cookies if you prefer. If you choose to decline cookies, you may not be able
            to fully experience the interactive features of the Provider services or websites you
            visit.
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
            Links
          </p>
        </div>
        <div>
          <p className="py-1">
            This website may contain links to other sites. Please be aware that we are not
            responsible for the content or privacy of such other sites. We encourage our users to
            be aware when they leave our site and to read the privacy statements of any other site
            that collects personally identifiable information.
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
            Your Choices
          </p>
        </div>
        <div>
          <p className="py-1">
            We offer you a number of choices with respect to communications options:
          </p>
          <ul style={{listStyleType: 'square'}} className="pl-7">
            <li className="py-1">
              You may opt-in to our email list, to receive future offers, updates and promotions.
            </li>
            <li className="py-1">
              You may choose to interact with the websites as a visitor, without signing up to
              receive future communications.
            </li>
            <li className="py-1">
              At any point, you may unsubscribe to the opt-in email list by following the email
              links on our website.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="w-[90%] md:w-[75%] pb-20"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 2.5,
        }}
      >
        <div>
          <p className="font-bold py-2">
            Problems or complaints with Provider’s Privacy Policy
          </p>
        </div>
        <div>
          <p className="py-1">
            We value your comments and opinions. If you have questions, comments or a complaint
            about compliance with this privacy policy you may contact us at <a href="mailto:slecrone@gmail.com">slecrone@gmail.com.</a>
          </p>
        </div>
      </motion.div>

      <Footer/>
    </main>
  );
}
