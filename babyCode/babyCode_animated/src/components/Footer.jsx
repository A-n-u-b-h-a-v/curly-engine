const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-zinc-900 text-white mollen-bold">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl">IELTS Institute</h3>
          <p className="text-xs mt-2 max-w-[40ch]">
            Modern training for Listening, Reading, Writing and Speaking with mock
            tests and AI-powered band insights.
          </p>
        </div>
        <div>
          <h4 className="text-sm mb-2">Quick Links</h4>
          <ul className="text-xs space-y-1">
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm mb-2">Contact</h4>
          <p className="text-xs">hello@ieltsinstitute.example</p>
          <p className="text-xs">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-[10px] text-center py-3 border-t border-white/10">
        © {new Date().getFullYear()} IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


