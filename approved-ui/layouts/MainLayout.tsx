import { Outlet, useLocation, Link } from 'react-router-dom';
import ProgramPosters from '../components/ProgramPosters';
import Header from '../components/Header';
import ConsultationButton from '../components/ConsultationButton';
const logoUrl = '/favicon.png';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
      <Header />
      <main className={`flex-1 relative w-full ${isHome ? '' : 'pt-20 pb-16'}`}>
        {location.pathname.startsWith('/programs/') && (
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4">
            <ProgramPosters />
          </div>
        )}
        <Outlet />
      </main>
      
      {/* Global Footer Area */}
      <div className="flex flex-col bg-white">
        {/* Partners Marquee Banner (Global before footer) */}
        <div className="w-full bg-white overflow-hidden border-b border-slate-100 py-6">
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex items-center w-max animate-marquee">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-14 md:gap-24 px-6 md:px-12 shrink-0">
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/dodream.png`} alt="두드림컴퓨터아카데미" className="h-9 md:h-12 w-auto object-contain" />
                  </div>
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/seongnam_job.png`} alt="성남일자리센터" className="h-6 md:h-[35px] w-auto object-contain" />
                  </div>
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/sn_insight.jpg`} alt="성남인사이트" className="h-5 md:h-[32px] w-auto object-contain mix-blend-multiply" />
                  </div>
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/jungnang.png`} alt="중랑여성인력개발센터" className="h-10 md:h-14 w-auto object-contain" />
                  </div>
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/polytech.png`} alt="한국폴리텍대학" className="h-10 md:h-14 w-auto object-contain" />
                  </div>
                  <div className="h-12 md:h-[68px] flex items-center justify-center shrink-0">
                    <img src={`/images/partners/samsungaxi.png`} alt="SAMSUNG AXI" className="h-3 md:h-[20px] w-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-50 text-slate-500 py-8 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <Link to="/" className="shrink-0">
                <img src={logoUrl} alt="한국진로커리어센터 로고" className="h-12 md:h-16 w-auto object-contain" />
              </Link>
              <p className="text-sm md:text-base leading-relaxed text-slate-500 break-keep">
                개인의 잠재력을 발견하고, 미래를 향한 최적의 커리어 패스를 설계합니다.<br />
                AI 기반 맞춤형 진단과 전문가의 깊이 있는 컨설팅으로 성공적인 내일을 함께합니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-bold mb-3 text-sm">주요 서비스</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><Link to="/programs/ai-career-counseling" className="hover:text-blue-600 transition-colors">AI 진단 및 상담</Link></li>
                <li><Link to="/programs/youth-career-empowerment" className="hover:text-blue-600 transition-colors">청년취업 역량 강화</Link></li>
                <li><Link to="/programs/corporate-recruitment-consulting" className="hover:text-blue-600 transition-colors">기업 채용 컨설팅</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-bold mb-3 text-sm">고객지원</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">공지사항</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">오시는 길</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-[1400px] mx-auto px-6 mt-8 pt-6 border-t border-slate-200 text-xs flex flex-col md:flex-row justify-between items-center text-slate-400 font-medium">
            <p>© 2026 한국진로커리어센터. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-600 transition-colors">이용약관</a>
              <a href="#" className="hover:text-slate-600 transition-colors text-slate-600 font-bold">개인정보처리방침</a>
            </div>
          </div>
        </footer>
      </div>
      <ConsultationButton />
    </div>
  );
}


