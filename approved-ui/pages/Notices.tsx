import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Notices() {
  const reducedMotion = useReducedMotion();
  const notices = [
    {
      id: 4,
      isPinned: true,
      category: '소식',
      title: '2026 성남시 청년 채용박람회',
      date: '2026.09.17 (목) 13:00–17:00',
      content: '성남종합스포츠센터 다목적체육관에서 열리는 청년 채용박람회입니다.',
      url: '/images/news/jobfair20260917.jpg',
      images: ['/images/news/jobfair20260917.jpg']
    },
    {
      id: 3,
      isPinned: true,
      category: '언론보도',
      title: "한국진로커리어센터, 중랑여성인력개발센터와 MOU…'AI·디지털 일자리위' 참여",
      date: '2026.06',
      content: '한국진로커리어센터가 중랑여성인력개발센터와 업무협약을 체결하고, AI·디지털 일자리위원회에 공식 참여합니다.',
      url: 'http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13231',
      images: [`/images/news1.jpg`, `/images/news2.jpg`, `/images/news3.jpg`]
    },
    {
      id: 2,
      isPinned: false,
      category: '언론보도',
      title: '한국진로커리어센터, 성남시일자리센터와 맞손',
      date: '2026.06',
      content: '성남시일자리센터와의 협력을 통해 구직자들에게 보다 전문적이고 맞춤화된 취업 지원 서비스를 제공할 예정입니다.',
      url: 'http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13077',
      images: [`/images/news/seongnam1.png`, `/images/news/seongnam2.png`, `/images/news/seongnam3.jpg`]
    },
    {
      id: 1,
      isPinned: false,
      category: '언론보도',
      title: '한국폴리텍대학 로봇캠퍼스-한국진로커리어센터, 산학협력 MOU 체결',
      date: '2026.05',
      content: '국내 유일의 로봇 특화 대학인 한국폴리텍대학 로봇캠퍼스와의 산학협력 MOU 체결을 통해 로봇 분야 맞춤형 인재 양성 및 취업 경쟁력 강화에 앞장섭니다.',
      url: 'https://www.newsnjob.com/news/articleView.html?idxno=33544',
      images: ['/images/news/polytech1.jpg', '/images/news/polytech2.jpg']
    }
  ];

  const item = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0 }
  };

  const [currentPoster, setCurrentPoster] = useState(0);
  const posts = notices.filter(n => n.category === '소식');
  const news = notices.filter(n => n.category === '언론보도');

  useEffect(() => {
    if (posts.length <= 1 || reducedMotion) return;
    const timer = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [posts.length, reducedMotion]);

  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24">
      {/* Top Banner Area */}
      <div className="w-full bg-[#0f2942] text-white py-12 md:py-16 mb-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div variants={item} initial="hidden" animate="show">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-full mb-4 border border-blue-400/30">
              이달의 주요 행사
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight break-keep">
              2026 성남시 청년 채용박람회
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-8 max-w-2xl break-keep">
              9월 17일 성남종합스포츠센터 다목적체육관에서 채용면접, 현직자 멘토링과 다양한 부대행사를 만나보세요.
            </p>
            <a href="/images/news/jobfair20260917.jpg" target="_blank" rel="noopener noreferrer" className="w-fit px-6 py-3 bg-white text-[#0f2942] font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
              포스터 자세히 보기 <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" ></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] gap-8 lg:gap-12">

          {/* LEFT: 대표 공모전/박람회 포스터 (단독) (approx 45%) */}
          <div className="w-full min-w-0 flex flex-col">
            {posts.length > 0 && (
              <motion.div
                key={posts[currentPoster].id}
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-6">
                  {posts[currentPoster].isPinned && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                      주요소식
                    </span>
                  )}
                </div>

                <div className="w-full aspect-[1191/1684] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-100 relative group">
                  {posts[currentPoster].images && posts[currentPoster].images[0] ? (
                    <img
                      src={posts[currentPoster].images[0]}
                      alt="2026 성남시 청년 채용박람회 행사 안내 포스터"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">No Image</div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-slate-900 mb-3 leading-snug break-keep">
                    {posts[currentPoster].title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-6 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>일정: {posts[currentPoster].date}</span>
                  </div>

                  {posts.length > 1 && <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                    <div></div>

                    <div className="flex items-center gap-3">
                      <button aria-label="이전 포스터"
                        onClick={() => setCurrentPoster(p => (p === 0 ? posts.length - 1 : p - 1))}
                        className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-sm font-bold text-slate-500 tracking-widest">
                        <span className="text-slate-900">{currentPoster + 1}</span> / {posts.length}
                      </span>
                      <button aria-label="다음 포스터"
                        onClick={() => setCurrentPoster(p => (p + 1) % posts.length)}
                        className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>}
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT: 프레스 & 뉴스 (앨범 갤러리 그리드) (approx 55%) */}
          <div className="w-full min-w-0 flex flex-col">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#1e3a8a] rounded-full"></span>
                  최신 보도자료
                </h2>
              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {news.map((notice) => (
                <motion.a
                  href={notice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={notice.id}
                  variants={item}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#1e3a8a] hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
                >
                  <div className="w-full aspect-video bg-slate-100 relative overflow-hidden">
                    {notice.images && notice.images[0] ? (
                      <img
                        src={notice.images[0]}
                        alt={notice.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">No Image</div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-bold text-slate-700 shadow-sm">
                      {notice.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1e3a8a] transition-colors leading-snug line-clamp-2 break-keep">
                      {notice.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 break-keep flex-1">
                      • {notice.content}
                    </p>

                    <div className="flex items-center text-[12px] text-slate-400 font-medium mt-4 pt-4 border-t border-slate-100">
                      <span className="text-blue-600 font-bold">{notice.url.includes("newsnjob.com") ? "뉴스엔잡" : "성남인사이트"}</span>
                      <span className="mx-2">|</span>
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


