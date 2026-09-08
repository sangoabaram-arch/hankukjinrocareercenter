import { Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Organization from './pages/Organization';
import Youth from './pages/programs/Youth';
import AiConsulting from './pages/programs/AiConsulting';
import Corporate from './pages/programs/Corporate';
import Special from './pages/programs/Special';

import Partners from './pages/Partners';
import Apply from './pages/Apply';
import Notices from './pages/Notices';
import Instructors from './pages/Instructors';
import Mentoring from './pages/Mentoring';
import Contact from './pages/Contact';
import JobInfo from './pages/JobInfo';
import ConsultationWidget from './components/ConsultationWidget';

import ScrollToTop from './components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const titles: Record<string, string> = {
  '/': '한국진로커리어센터',
  '/about': '센터 안내 | 한국진로커리어센터',
  '/organization': '조직도 | 한국진로커리어센터',
  '/programs/youth': '청년취업 역량 강화 | 한국진로커리어센터',
  '/programs/youth-career-empowerment': '청년취업 역량 강화 | 한국진로커리어센터',
  '/programs/ai': 'AI 진단 및 상담 | 한국진로커리어센터',
  '/programs/ai-career-counseling': 'AI 진단 및 상담 | 한국진로커리어센터',
  '/programs/corporate': '기업 채용 컨설팅 | 한국진로커리어센터',
  '/programs/corporate-recruitment-consulting': '기업 채용 컨설팅 | 한국진로커리어센터',
  '/programs/special': '특강·위탁교육 | 한국진로커리어센터',
  '/partners': '협력기관 | 한국진로커리어센터',
  '/apply': '상담신청 | 한국진로커리어센터',
  '/notices': '공지·소식 | 한국진로커리어센터',
  '/mentoring': '진로 멘토링 | 한국진로커리어센터',
  '/instructors': '강사 매칭 | 한국진로커리어센터',
  '/contact': '오시는 길 | 한국진로커리어센터',
  '/job-info': '취업정보 | 한국진로커리어센터',
};

function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location.pathname] || '한국진로커리어센터';
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <ReactLenis root>
      <TitleUpdater />
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/programs" element={<Navigate to="/programs/youth" replace />} />
          <Route path="/programs/youth" element={<Youth />} />
          <Route path="/programs/youth-career-empowerment" element={<Youth />} />
          <Route path="/programs/ai" element={<AiConsulting />} />
          <Route path="/programs/ai-career-counseling" element={<AiConsulting />} />
          <Route path="/programs/corporate" element={<Corporate />} />
          <Route path="/programs/corporate-recruitment-consulting" element={<Corporate />} />
          <Route path="/programs/special" element={<Special />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/mentoring" element={<Mentoring />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-info" element={<JobInfo />} />
        </Route>
      </Routes>
      <ConsultationWidget />
    </ReactLenis>
  );
}

export default App;

