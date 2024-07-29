import React from 'react';

function Test() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full sm:w-1/2 z-10 bg-blue-500">
        some content for the first box
      </div>
      <div className="absolute top-0 right-0 w-full sm-w-1/2 z-20 bg-red-500">
        some other content in the second box
      </div>
    </div>
  )
}

export default Test;

