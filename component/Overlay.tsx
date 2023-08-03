import React from "react";

export function Overlay() {
  return (
    <>
    {/* Brand */}
      <a
        href="https://wootiv.ai/"
        style={{
          color: "white",
          position: "absolute",
          bottom: 40,
          width: "60%",
          left: '8vw',
          fontSize: "14px",
        }}
      >
        &copy; Wootiv Corporation
        <br />
        <span style={{ color: '#999999'}}>

        Because every customer truly deserves to be seen and heard.
        </span>
      </a>

      {/* Logo */}
      <div style={{ position: "absolute", top: 40, left: '8vw', fontSize: "14px" }}>
        <img src="/wootiv-logo.png" alt={'wootiv'} />
      </div>

{/* Greeting tag */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "14px",
        }}
      >
        xoxo —
      </div>
    </>
  );
}
