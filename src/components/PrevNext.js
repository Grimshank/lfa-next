"use client";

import Link from "next/link";
import React from "react";
import {track} from "@vercel/analytics";

function PrevNext({ prev, next }) {
  return (
    <div>
      <Link className="rounded text-white p-2 bg-[#5280BB]" href={`/works/${prev.id}`}>
        <button onClick={() => track('Work Engagement', {title: prev.title})}>
          Previous
        </button>
      </Link>
      <Link className="ml-3 rounded text-white p-2 bg-[#5280BB]" href={`/works/${next.id}`}>
        <button onClick={() => track('Work Engagement', {title: next.title})}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default PrevNext;
