"use client";

import React, {useState} from 'react';

export default function InquiryForm({ title }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/addInquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, name, email, phone, comments}),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {
        (!submitted) ? (
          <form
            className="grid grid-cols-1"
            onSubmit={handleSubmit}
          >
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
              className="focus:outline-none focus:ring-2 focus:ring-[#ED9238] border border-b-gray-50 h-10 px-2"
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder="E-mail address"
              required
              className="focus:outline-none focus:ring-2 focus:ring-[#ED9238] border border-b-gray-50 h-10 px-2 mt-2"
            />
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type="text"
              placeholder="Phone"
              required
              className="focus:outline-none focus:ring-2 focus:ring-[#ED9238] border border-b-gray-50 h-10 px-2 mt-2"
            />
            <textarea
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Comments"
              required
              className="focus:outline-none h-[200px] focus:ring-2 focus:ring-[#ED9238] border border-b-gray-50 px-2 mt-2"
            />
            <button
              disabled={!name} type="submit"
              className="rounded text-white p-2 mt-2 bg-[#ED9238] w-1/2"
            >
              <span className="default">Inquire</span>
            </button>
          </form>
        ) : (
          <div>
            <div>Thanks for your interest in <b>{title}</b>.</div>
            <div className="mt-2">Your inquiry has been submitted successfully.</div>
          </div>
        )
      }
    </div>
  );
}
