import React from "react";
function Pre({load}) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      role="status"
      aria-live="polite"
      aria-label={load ? "Loading" : undefined}
      aria-hidden={!load}
    />
  );
}

export default Pre;