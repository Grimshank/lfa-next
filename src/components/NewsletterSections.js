"use client";

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import {getPlaneKeyframes} from "@/lib/getPlaneKeyframes";
import {getTrailsKeyframes} from "@/lib/getTrailsKeyframes";

function NewsletterSection() {
  const [input, setInput] = useState('');
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input;

    if (!email || !button) {
      return;
    }

    const res = await fetch('/api/addSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    });

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
      </div>
    </div>
  );
}

export default NewsletterSection;
