import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="my-2">
          &copy; {new Date().getFullYear()} ZenSpace. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 my-2">
          {/* Apply styles directly to Link */}
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="my-2">
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="social-icons my-2">
          {/* External links can remain as <a> tags */}
          <a
            href="https://twitter.com/zenspaceapp"
            className="hover:underline mx-2"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/zenspaceapp"
            className="hover:underline mx-2"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/zenspaceapp"
            className="hover:underline mx-2"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
