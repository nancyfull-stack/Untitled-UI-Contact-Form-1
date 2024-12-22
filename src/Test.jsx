import React from "react";

function Test() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1>Heading</h1>
      <input
        type="text"
        name=""
        id=""
        className="rounded border-2 border-black"
        placeholder="Enter some text"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default Test;
