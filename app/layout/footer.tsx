import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t pt-4 text-sm text-gray-600 text-center">
      <p>
        © {new Date().getFullYear()} alyssadannielle.design - All rights
        reserved.
      </p>
      <p className="mt-2">
        This pattern is for personal use only. Do not redistribute, sell, or
        share this pattern.
      </p>
    </footer>
  );
}
