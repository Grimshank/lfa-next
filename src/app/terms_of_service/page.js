"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default async function Home() {
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
            Basic Terms of Service
          </p>
        </div>
        <div>
          <p className="py-1">
            Welcome to lecrone.art. By using this website (“Site”), you are agreeing to comply with
            and be bound by the following terms and conditions of use which govern the relationship
            between you and the Provider of this Site. The terms “Provider” or “us” or “we” refer
            to LeCrone Fine Art, LLC. The term “you,” or “User” refers to users or viewers of our
            Site.
          </p>
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
          <p className="py-1">
            The use of the Site is subject to the following terms of use:
          </p>
          <ol style={{listStyleType: 'decimal'}} className="pl-7">
            <li className="py-1">
              The content of the pages of the Site and courses available on the Site is for your
              general information and use only. It is subject to change without notice. It is
              important that the User does his or her due diligence regarding the information
              contained on this Site.
            </li>
            <li className="py-1">
              The Site does not knowingly collect or solicit personal information from anyone under
              the age of thirteen (13) or knowingly allow such persons to register. If you are
              under age thirteen, please do not attempt to use this Site or send any information
              about yourself to us. No one under age thirteen may provide any personal information
              to or on the Site. In the event that we learn that we have collected personal
              information from a child under age thirteen without verification of parental consent,
              we will delete that information as quickly as possible. If you believe that we might
              have any information from or about a child under thirteen, please let us know. We
              recommend that minors thirteen years of age or older ask their parents for permission
              before sending any information about themselves to anyone over the Internet.
            </li>
            <li className="py-1">
              You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide
              license to use any IP content that you post on or in connection with
              lecrone.art (“IP License”).
            </li>
            <li className="py-1">
              Your use of any information, materials or services on the Provider Site is entirely
              at your own risk, for which we shall not be liable. It shall be your own
              responsibility to ensure that any products, services or information available through
              this Site meet your specific requirements.
            </li>
            <li className="py-1">
              Provider’s liability is limited to the fullest extent permitted by law in applicable
              jurisdictions.
            </li>
            <li className="py-1">
              Any trademarks, logos, service marks and copyrights (“Marks”) displayed on the Site
              are the property of the Provider. You are strictly prohibited from using any Marks
              for any purpose including, but not limited to use as metatags on other pages or Sites
              on the World Wide Web without the written licensed agreement of Provider or such
              third party which may own the Marks. All information and content located on the Site,
              including all images, paintings, and photographs are protected by copyright. You are
              strictly prohibited from modifying, copying, distributing, transmitting, displaying,
              publishing, selling, licensing, creating derivative works or using any Content
              available on or through the Site for commercial or public purposes. Unauthorized use
              of the Provider Site may give rise to a claim for damages and/or be a criminal
              offense.
            </li>
            <li className="py-1">
              This Site may provide links to other Sites by allowing you to leave this Site to
              access third-party material or by bringing third-party material into this Site via
              “inverse” hyperlinks and framing technology (a “Linked Site”). Provider has no
              discretion to alter, update, or control the content on a linked Site. The fact that
              Provider has provided a link to a Site is not an endorsement, authorization,
              sponsorship, or affiliation with respect to such Site, its owners, or its providers.
              There are inherent risks in relying upon, using or retrieving any information found
              on the internet, and Provider urges you to make sure you understand these risks
              before relying upon, using, or retrieving any such information on a linked Site.
            </li>
            <li className="py-1">
              Unless otherwise specifically stated, all content, products and services on the Site,
              or obtained from a Site to which the Site is linked (a “linked Site”) are provided to
              you “AS IS” without warranty of any kind either express or implied including, but not
              limited to, the implied warranties of merchantability and fitness for a particular
              purpose, title, non-infringement, security or accuracy.
            </li>
            <li className="py-1">
              Provider does not endorse and is not responsible for (a) the accuracy or reliability
              of an opinion, advice or statement made through the Site by any party other than
              Provider, (b) any content provided on linked Sites or (c) the capabilities or
              reliability of any product or service obtained from a linked Site. Other than as
              required under applicable consumer protection law, under no circumstance will
              Provider be liable for any loss or damage caused by your reliance on information
              obtained through the Site or a linked Site, or your reliance on any product or
              service obtained from a linked Site. It is your responsibility to evaluate the
              accuracy, completeness or usefulness of any opinion, advice or other content
              available through the Site, or obtained from a linked Site. Please seek the advice
              of professionals, as appropriate, regarding the evaluation of any specific opinion,
              advice, product, service, or other content.
            </li>
            <li className="py-1">
              The information, software, products and descriptions of services published on the
              Site or a linked Site may include inaccuracies or typographical errors, and Provider
              specifically disclaims any liability for such inaccuracies or errors. Provider does
              not warrant or represent that the content on the Site is complete or up-to-date.
              Provider is under no obligation to update the content on the Site. Provider may
              change the content on the Site at any time without notice. Provider may make
              improvements or changes to the Site at any time.
            </li>
            <li className="py-1">
              You agree that Provider, its affiliates and any of their respective officers,
              directors, employees, or agents will not be liable, whether in contract, tort,
              strict liability or otherwise, for any indirect, punitive, special, consequential,
              incidental or indirect damages (including without limitation lost profits, cost of
              procuring substitute service or lost opportunity) arising out of or in connection
              with the delay or inability to use the Site or a linked Site, or with the delay or
              inability to use the Site or a lined Site, even if Provider is made aware of the
              possibility of such damages. This limitation on liability includes, but is not
              limited to, the transmission of any viruses which may infect your equipment, failure
              of mechanical or electronic equipment or communication lines, telephone or
              interconnect problems (e.g., you cannot access your internet service provider),
              unauthorized access, theft, operator errors, strikes or other labor problems or any
              force majeure. Provider cannot and does not guarantee continuous, uninterrupted or
              secure access to the Site.
            </li>
            <li className="py-1">
              The Provider may contract with other companies or individuals in order to provide
              you services. You agree that the Provider cannot be held liable for any actions or
              inactions of any contractor used by the Provider in connection with providing you
              services.
            </li>
            <li className="py-1">
              It is your exclusive obligation to maintain and control passwords to your account.
              You are exclusively responsible for all activities that occur in connection with
              your user name and password. You agree to immediately notify Provider of any
              unauthorized uses of your user name and password or any other breaches of security.
              Provider will not be liable for any loss or damages of any kind, under any legal
              theory, caused by your failure to comply with the foregoing security obligations or
              caused by any person to whom you grant access to your account.
            </li>
            <li className="py-1">
              The Provider may terminate your access to the Site without cause or notice, which may
              result in the forfeiture and destruction of all information associated with your
              account. All provisions of the Basic Terms of Use that by their nature should survive
              termination shall survive termination, including, without limitation, warranty
              disclaimers and limitations of liability.
            </li>
            <li className="py-1">
              You agree that you will not (a) send or otherwise post unauthorized commercial
              communications (such as spam) on the Site; (b) collect users’ content or
              identification, or otherwise access the Site using automated means (such as
              harvesting bots, robots, spiders, or scrapers), without our express permission; (c)
              upload viruses or other malicious code; (d) solicit login information or access an
              account belonging to someone else; (e) bully, intimidate, or harass any user; (f)
              use the Site to do anything unlawful, misleading, malicious, or discriminatory in
              any way; (g) facilitate or encourage any violations of this agreement; (h) provide
              any false personal information on the Site, or create an account for anyone other
              than yourself without permission; (i) use the Site if you are under thirteen (13)
              years of age; (j) share your password, let anyone else access your account, or do
              anything else that might jeopardize the security of your account; (k) transfer
              your account to anyone without first getting our written permission; or (l) take
              any action on the Site that infringes or violates someone else’s rights or otherwise
              violates the law.
            </li>
            <li className="py-1">
              The Provider may utilize a web interface such as PayPal to collect and process
              payments. You are agreeing to any applicable agreements via the payment interface.
              All purchases and payments are final and you are accepting that exchanges, returns,
              or refunds are not allowed.
            </li>
            <li className="py-1">
              Your use of the Site and any dispute arising out of such use of the Site is subject
              to the laws of the State of Arkansas, United States of America and applicable federal
              laws of the United States of America without regard to conflicts of laws principles.
              You agree that you will first attempt to resolve any concern or issue with the
              Provider or with the use of this website by communicating fully your concern with
              the Provider. Should communication with the Provider not resolve your concern or
              issue, you agree to submit your concern or issue to mediation. If mediation does not
              resolve the matter, you agree to submit to the state courts in Pulaski County,
              Arkansas, United States of America. You agree to waive any right to a jury trial.
              You also agree that the successful party in any dispute will be entitled to payment
              of its reasonable attorney fees involved in reaching a final resolution.
            </li>
            <li className="py-1">
              These Basic Terms of Use and other referenced material are the entire agreement
              between you and the Provider with respect to the Site, and supersede all prior or
              contemporaneous communications and proposals (whether oral, written or electronic)
              between you and the Provider with respect to the Site and govern the future
              relationship. If any provision of the Basic Terms of Use are found to be
              unenforceable or invalid, that provision will be limited or eliminated to the
              minimum extent necessary so that the Basic Terms of Use will otherwise remain in
              full force and effect and enforceable. The failure of either party to exercise in
              any respect any right provided for herein shall not be deemed a waiver of any
              further rights hereunder.
            </li>
            <li className="py-1">
              Without limitation on any of our other rights or remedies at law, in equity or under
              these Terms, we may terminate your license to use these Services, in whole or in
              part, including your right to use any Products, without providing any refund or
              cancelling your obligation to make installment payments where applicable, if we
              determine, in our sole discretion, that you have breached or violated any of the
              provisions of these Terms. This includes, but is not limited to, any rude, harassing
              or other damaging statements that are made on any of the Provider’s websites directed
              to any other customers of the Provider.
            </li>
          </ol>
        </div>
      </motion.div>

      <Footer/>
    </main>
  );
}
