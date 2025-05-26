import React from "react";

export default function Downloads() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Download Tools</h2>
      <ul className="space-y-2">
        <li>
          <a
            href="/tools/exploit-tool.zip"
            download
            className="underline hover:text-white"
          >
            🧰 Exploit Tool - Download
          </a>
        </li>
        <li>
          <a
            href="/tools/port-scanner.zip"
            download
            className="underline hover:text-white"
          >
            🌐 Port Scanner - Download
          </a>
        </li>
      </ul>
    </section>
  );
}
