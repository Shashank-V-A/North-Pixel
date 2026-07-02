import Script from "next/script";

const JOTFORM_AGENT_EMBED_URL =
  "https://cdn.jotfor.ms/agent/embedjs/019f23b6e2c070008ce1b63f57b67bab4931/embed.js";

export function JotformAgent() {
  return <Script src={JOTFORM_AGENT_EMBED_URL} strategy="afterInteractive" />;
}
