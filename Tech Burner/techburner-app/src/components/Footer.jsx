import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full mt-auto border-t border-white/5 bg-transparent">
    <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto gap-6 font-body text-[10px] uppercase tracking-widest">
      <p className="text-[#adaaaa]">© 2024 TechBurner Kinetic Core. All Rights Reserved.</p>
      <div className="flex gap-8">
        <a className="text-[#adaaaa] hover:text-[#8af2ff] transition-colors" href="#">Privacy</a>
        <a className="text-[#adaaaa] hover:text-[#8af2ff] transition-colors" href="#">Terms</a>
        <a className="text-[#adaaaa] hover:text-[#8af2ff] transition-colors" href="#">Protocol</a>
      </div>
    </div>
  </footer>
);

export default Footer;
