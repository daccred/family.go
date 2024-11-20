import React from "react";

export function Overlay() {
  return (
    <>
      {/* Brand */}
      <a
        href="https://emissaries.xyz/"
        style={{
          color: "white",
          position: "absolute",
          bottom: 40,
          width: "60%",
          left: "8vw",
          fontSize: "14px",
        }}
      >
        &copy; The Family Corporation
        <br />
        <span style={{ color: "#999999" }}>
          You don’t need fiat, when you’ve got family.
        </span>
      </a>

      {/* Logo */}
      <div
        style={{ position: "absolute", top: 40, left: "8vw", fontSize: "14px" }}
      >
        <img src="/family-dark.png" alt={"family"} />
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
