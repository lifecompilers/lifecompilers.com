import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-black text-foreground tracking-tighter">
            Life<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">COMPILERS</span>
          </span>
          <p className="mt-2 text-sm font-medium">© {new Date().getFullYear()} LifeCOMPILERS. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-sm font-bold">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
