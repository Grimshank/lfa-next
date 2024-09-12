"use client";

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {getPlaneKeyframes} from "@/lib/getPlaneKeyframes";
import {getTrailsKeyframes} from "@/lib/getTrailsKeyframes";
import {CheckIcon} from "@heroicons/react/24/outline";
import {XMarkIcon} from "@heroicons/react/24/solid";

function NewsletterSection() {
  const [input, setInput] = useState('');
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input;

    const res = await fetch('/api/addSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    });

    if (!email) {
      return;
    }

    const data = await res.json();

    if (data.error) {
      setErrorMessage('Hey, you are already subscribed!');
      setSuccessMessage(undefined);
      return;
    }

    console.log(data);

    setSuccessMessage(data.res);
    setErrorMessage(undefined);
  }

  return (
    <div className="w-full px-8 py-12 bg-[#FFFFFF] grid grid-cols-1 items-center justify-center">
      <h1>
        LeCrone Fine Art Newsletter
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="email"
            placeholder="E-mail address"
            required
          />
          <button disabled={!input} type="submit">
            <span className="default">Subscribe</span>
          </button>
        </form>
      </div>
      <div>
        {(successMessage || errorMessage) && (
          <div>
            <div className="text-xs sm:text-sm text-[#4B4C52]">
              {successMessage ? (
                <p>
                  We&apos;ve added{" "}
                  <span className="text-[#ADB0B1]">
                    {successMessage.email_address}
                  </span>{" "}
                  to our waitlist. We&apos;ll let you know when we launch!
                </p>
              ) : (
                <p>
                  You are already added to our waitlist. We&apos;ll let you know when we launch!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterSection;
