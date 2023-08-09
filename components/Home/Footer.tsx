import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex p-4 py-10 bg-backgroundLight flex-col text-slate-200">
        <div className="pb-6 flex flex-col">
          <h3 className="footer-section">other pages</h3>
        </div>
        <div className="flex flex-col pb-6">
          <h3 className="footer-section">subscribe</h3>
          <p className="pt-2">
            Subscribe to receive updates, access to exclusive deals, and more
          </p>
          <form className="flex flex-row items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none border-2 rounded-md px-3 py-2 border-slate-300 bg-inherit text-slate-900"
            />
            <button className="border-2 border-transparent rounded-md bg-slate-50 text-slate-900 font-medium px-4 py-2 w-max">
              Subscribe
            </button>
          </form>
        </div>
        <div className="p-4 border-t-2 text-center border-slate-700">
          <a href="https://github.com/seesmof">
            © 2023 <span className="text-slate-50">seesmof</span>. All rights
            reserved
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
