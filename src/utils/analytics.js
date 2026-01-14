// src/utils/analytics.js
export function track(eventName, payload = {}) {
  // 1) Console-da görünsün (debug)
  console.log(`[track] ${eventName}`, payload);

  // 2) Google Analytics varsa (gtag)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  // 3) Plausible varsa
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(eventName, { props: payload });
  }
}
