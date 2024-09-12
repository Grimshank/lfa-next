"use client";

import React, {useState} from 'react';

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
      <h1
        className="text-3xl font-medium mx-auto mb-4"
        style={{fontFamily: 'mrs-eaves-roman-small-caps'}}
      >
        LeCrone Fine Art Newsletter
      </h1>
      <div className="mx-auto mb-4">
        Sign up for LeCrone Fine Art news and updates, straight to your inbox.
      </div>
      <div
        className="mx-auto mb-4"
      >
        <form
          onSubmit={handleSubmit}
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="email"
            placeholder="E-mail address"
            required
            className="focus:outline-none focus:ring-2 focus:ring-[#ED9238] border border-b-gray-50 h-10 px-2"
          />
          <button disabled={!input} type="submit" className="rounded text-white p-2 ml-2 bg-[#ED9238]">
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
      <div className="mx-auto mb-4">
        We respect your privacy and will never share your information.
      </div>
    </div>
  );
}

export default NewsletterSection;
