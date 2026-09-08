import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
const logoUrl = '/favicon.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header style based on page and scroll
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  const headerBg = isTransparent ? 'bg-black/10 backdrop-blur-md border-b border-white/10' : 'bg-white shadow-md border-b border-slate-100';
  const textColor = isTransparent ? 'text-white drop-shadow-md' : 'text-slate-900';

  const navItems = [
    {
      path: '/about',
      label: '센터 안내',
      children: [
        { path: '/about', label: '센터 소개 (연혁)' },
        { path: '/organization', label: '조직도' }
      ]
    },
    {
      path: '/programs',
      label: '프로그램',
      children: [
        { path: '/programs/youth', label: '청년 취업역량강화' },
        { path: '/programs/ai', label: 'AI 활용 진로상담' },
        { path: '/programs/corporate', label: '기업 채용 컨설팅' },
        { path: '/programs/special', label: '특강·위탁교육' }
      ]
    },
    {
      path: '/notices',
      label: '공지·소식'
    },
    { path: '/instructors', label: '강사 매칭' },
    { path: '/contact', label: '오시는 길' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="transition-all duration-300 flex items-center justify-center">
            <img src={logoUrl} alt="한국진로커리어센터 로고" className={`${isTransparent ? 'h-10' : 'h-10'} w-auto transition-all duration-300`} />
          </div>
          <span className={`font-extrabold tracking-tight text-lg ${textColor}`}>한국진로커리어센터</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <div key={item.path} className="relative group h-full flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  text-[15px] font-bold transition-colors flex items-center gap-1
                  ${isActive && !isTransparent ? 'text-[#1e3a8a]' : textColor}
                  hover:text-blue-500
                `}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </NavLink>

              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="py-2">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.path}
                        className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1e3a8a] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/apply"
            className="px-6 py-2.5 bg-slate-900 text-white hover:bg-slate-800 text-sm font-bold rounded-full transition-colors shadow-sm"
          >
            상담신청
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 text-slate-900`} />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-4 px-6 gap-2">
            {navItems.map((item) => (
              <div key={item.path} className="py-2 border-b border-slate-50 last:border-0">
                <Link
                  to={item.path}
                  className="block text-lg font-bold text-slate-900 mb-2"
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.path}
                        className="text-[15px] font-medium text-slate-600 hover:text-[#1e3a8a]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        - {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-slate-900 text-white text-center font-bold rounded-lg"
            >
              상담신청
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


