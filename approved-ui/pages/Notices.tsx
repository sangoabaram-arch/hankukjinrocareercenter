import {
  Calendar,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  X,
  Phone,
  Globe,
  CheckCircle2,
  Award,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  FileText,
  Gift,
  Monitor,
  Users,
  Clock,
  Layers,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { useLenis } from "lenis/react";

type ScheduleItem = {
  round: string;
  period: string;
};

type CurriculumStep = {
  step: string;
  title: string;
  desc: string;
};

type CourseFeature = {
  label: string;
  desc: string;
};

type NoticeDetail = {
  type?: "recruitment" | "course" | "general";
  recruitmentTarget?: string;
  tuitionBenefit?: string;
  curriculum?: string;
  employmentRate?: string;
  majorEmployers?: string[];
  schedule?: ScheduleItem[];
  applyMethods?: string[];
  blogReviewSummary?: string[];
  courseFeatures?: CourseFeature[];
  curriculumSteps?: CurriculumStep[];
  specialGifts?: string[];
};

type NoticeItem = {
  id: number;
  isPinned: boolean;
  category: "소식" | "언론보도";
  badge?: string;
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  url: string;
  blogUrl?: string;
  applyUrl?: string;
  kopoUrl?: string;
  tel?: string;
  images: string[];
  press?: string;
  details?: NoticeDetail;
};

export default function Notices() {
  const notices: NoticeItem[] = [
    {
      id: 6,
      isPinned: true,
      category: "소식",
      badge: "전액 무료 교육",
      title: "구직자·재직자를 위한 ‘생성형 AI 활용’ 실무 과정 교육생 모집",
      subtitle: "인공지능 기초부터 실무 활용까지! 수강료 전액 무료 & 생성형 AI 1개월 무료 이용권 제공",
      date: "상시 모집 (인원 충원 시 개강)",
      content:
        "한국폴리텍대학 로봇캠퍼스에서 구직자 및 재직자의 인공지능 실무 역량 강화를 위해 ‘생성형 AI 활용’ 교육생을 상시 모집합니다. 수강료 전액 무료, 총 32시간 100% 온라인 교육으로 누구나 공간 제약 없이 참여 가능하며, 수강생 전원에게 생성형 AI 1개월 무료 이용권을 특별 제공합니다.",
      url: "https://www.kopo.ac.kr/robot",
      kopoUrl: "https://www.kopo.ac.kr/robot",
      tel: "054-706-1008",
      images: ["/images/news/generative_ai_course.jpg"],
      details: {
        type: "course",
        recruitmentTarget: "만 15세 이상 구직자 및 재직자 (상시 모집 / 인원 충원 시 개강)",
        tuitionBenefit: "수강료 전액 무료 (교재비·실습비 0원) + 생성형 AI 1개월 무료 이용권 증정",
        curriculum: "총 32시간 (주 8시간 × 4주, 주 3회 2~3시간 / 100% 온라인 교육)",
        employmentRate: "구직자 취업 경쟁력 강화 및 재직자 업무 생산성 극대화",
        courseFeatures: [
          { label: "상시 모집", desc: "인원 충원 시 교육 즉시 시작" },
          { label: "총 32시간", desc: "주 8시간 × 4주 (총 32시간)" },
          { label: "온라인 교육", desc: "모든 교육 100% 온라인 진행" },
          { label: "주 3회·3일", desc: "1회 2~3시간, 4주간 진행" },
          { label: "지원 자격", desc: "만 15세 이상 구직자 및 재직자" },
        ],
        curriculumSteps: [
          {
            step: "01",
            title: "인공지능 기초 개념",
            desc: "AI 기본 원리, 핵심 용어, 최신 생성형 AI 트렌드 및 프롬프트 기초 학습",
          },
          {
            step: "02",
            title: "데이터 분석 활용",
            desc: "실무 데이터 수집 및 정제, AI 도구를 활용한 데이터 분석 및 시각화 실습",
          },
          {
            step: "03",
            title: "생성형 AI 실무 활용",
            desc: "다양한 직무별 업무 자동화, 기획서·보고서 작성, 실무 생산성 도구 완벽 습득",
          },
        ],
        applyMethods: [
          "QR코드 온라인 간편 신청: 포스터 내 QR코드를 스마트폰으로 스캔하여 간편 신청",
          "방문 접수: 한국폴리텍대학 로봇캠퍼스 교학처 (경상북도 영천시 로봇캠퍼스로 1, 평일 09:00~17:00)",
          "전화 문의: 교학처 054-706-1008 (평일 09:00~18:00)",
        ],
        specialGifts: [
          "수강료 전액 100% 무료 (자부담금 없음)",
          "생성형 AI 1개월 무료 이용권 특별 제공",
          "100% 온라인 비대면 진행으로 시공간 제약 없는 학습",
          "인공지능 기초부터 실무 자동화까지 실전형 커리큘럼",
        ],
      },
    },
    {
      id: 5,
      isPinned: true,
      category: "소식",
      badge: "2027 신입생 모집",
      title: "한국폴리텍대학 로봇캠퍼스 2027학년도 신입생 모집",
      subtitle: "로봇이 바꾸는 세상! 2025 취업률 92.1% 달성 국내 유일 로봇 특화 대학",
      date: "2026.09 ~ 2027.01",
      content:
        "한국진로커리어센터 산학협력 협약 기관인 한국폴리텍대학 로봇캠퍼스에서 2027학년도 신입생(2년제 학위과정 / 산업학사)을 모집합니다. 한 학기 108만원의 파격적인 등록금과 영천시 최대 110만원 장학금 혜택, 2년제 3학기 수업+1학기 조기취업으로 한화에어로스페이스, 현대자동차 등 주요 대기업 취업에 도전하세요.",
      url: "https://blog.naver.com/hwanheeci/224415846223",
      blogUrl: "https://naver.me/FDcOdjJ7",
      applyUrl: "https://www.jinhakapply.com",
      kopoUrl: "https://www.kopo.ac.kr/robot",
      tel: "054-706-1010",
      images: ["/images/news/polytech_robot_2027.png"],
      details: {
        type: "recruitment",
        recruitmentTarget: "소수정예 100명 모집 (2년제 학위과정 / 산업학사 수여)",
        tuitionBenefit: "저렴한 등록금 한 학기 108만원 & 영천시 장학금 최대 110만원 (실질적 무상교육)",
        curriculum: "2년제 3학기 집중 수업 + 1학기 조기취업 현장 연계",
        employmentRate: "2025학년도 졸업자 취업률 92.1% (대학 자체 집계 기준, 유지취업률 80~90%)",
        majorEmployers: [
          "한화에어로스페이스",
          "현대자동차",
          "(주)화신",
          "(주)풍산",
          "농심",
          "한국전자기술연구원",
          "디와이로보틱스",
        ],
        schedule: [
          { round: "수시 1차", period: "2026. 09. 07.(월) ~ 10. 01.(목)" },
          { round: "수시 2차", period: "2026. 11. 11.(수) ~ 11. 27.(금)" },
          { round: "정시", period: "2027. 01. 04.(월) ~ 01. 22.(금)" },
        ],
        applyMethods: [
          "온라인 접수: 진학어플라이 (www.jinhakapply.com) 접수",
          "방문 접수: 한국폴리텍대학 로봇캠퍼스 교학처 (경북 영천)",
        ],
        blogReviewSummary: [
          "고용노동부 산하 국책 특수대학으로 실무 중심(실습 70~80%) 기술 교육 집중",
          "전국 4대 국가 특성화 대학 중 하나: 국내 유일 로봇 자동화 라인 구축 전문 특화",
          "모교 실습장이 국가기술자격 시험장이라 산업기사 자격증 취득에 절대적 유리",
          "단순 취업률을 넘어 1년 이상 재직하는 유지취업률 80~90% 수준의 독보적 안정성",
          "교수진의 1:1 취업 매칭 & 졸업 후 이직 상담까지 이어지는 평생 사후지도 관리",
        ],
      },
    },
    {
      id: 4,
      isPinned: false,
      category: "소식",
      badge: "행사 성료",
      title: "2026년 채용박람회 성료",
      date: "2026.09",
      content: "2026 채용박람회에 참가하여 구직자들을 위한 맞춤형 진로 상담 및 취업 컨설팅을 성황리에 진행했습니다.",
      url: "#",
      images: ["/images/news/jobfair20260917.jpg"],
    },
    {
      id: 3,
      isPinned: true,
      category: "언론보도",
      press: "성남인사이트",
      title: "한국진로커리어센터, 중랑여성인력개발센터와 MOU…'AI·디지털 일자리위' 참여",
      date: "2026.06",
      content:
        "한국진로커리어센터가 중랑여성인력개발센터와 업무협약을 체결하고, AI·디지털 일자리위원회에 공식 참여합니다.",
      url: "http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13231",
      images: [`/images/news1.jpg`, `/images/news2.jpg`, `/images/news3.jpg`],
    },
    {
      id: 2,
      isPinned: false,
      category: "언론보도",
      press: "성남인사이트",
      title: "한국진로커리어센터, 성남시일자리센터와 맞손",
      date: "2026.06",
      content:
        "성남시일자리센터와의 협력을 통해 구직자들에게 보다 전문적이고 맞춤화된 취업 지원 서비스를 제공할 예정입니다.",
      url: "http://snsite.kr/bbs/board.php?bo_table=news02&wr_id=13077",
      images: [`/images/news/seongnam1.png`, `/images/news/seongnam2.png`, `/images/news/seongnam3.jpg`],
    },
    {
      id: 1,
      isPinned: false,
      category: "언론보도",
      press: "뉴스엔잡",
      title: "한국폴리텍대학 로봇캠퍼스-한국진로커리어센터, 산학협력 MOU 체결",
      date: "2026.05",
      content:
        "국내 유일의 로봇 특화 대학인 한국폴리텍대학 로봇캠퍼스와의 산학협력 MOU 체결을 통해 로봇 분야 맞춤형 인재 양성 및 취업 경쟁력 강화에 앞장섭니다.",
      url: "https://www.newsnjob.com/news/articleView.html?idxno=33544",
      images: ["/images/news/polytech1.jpg", "/images/news/polytech2.jpg"],
    },
  ];

  const [currentPoster, setCurrentPoster] = useState(0);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "posts" | "news">("all");
  const [bannerNoticeIdx, setBannerNoticeIdx] = useState(0);

  const posts = notices.filter((n) => n.category === "소식");
  const news = notices.filter((n) => n.category === "언론보도");
  const visiblePosts = activeTab === "all" ? posts.slice(0, 2) : posts;
  const activePosterIndex = Math.min(currentPoster, Math.max(visiblePosts.length - 1, 0));

  const detailRef = useRef<HTMLDialogElement>(null);
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (!selectedNotice) return;
    const dialog = detailRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [selectedNotice, lenis]);

  const itemAnim = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    show: { opacity: 1, y: 0 },
  };

  const displayedNews = activeTab === "posts" ? [] : activeTab === "all" ? news : news;

  // 상단 배너에 노출할 2대 주요 행사/소식
  const bannerNotices = [notices[0], notices[1]];
  const currentBannerNotice = bannerNotices[bannerNoticeIdx] || notices[0];

  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24">
      {/* Top Banner Area */}
      <div className="w-full bg-gradient-to-r from-[#07192b] via-[#0f2942] to-[#12395d] text-white py-12 md:py-16 mb-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Banner Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {bannerNotices.map((bItem, idx) => (
              <button
                key={bItem.id}
                onClick={() => setBannerNoticeIdx(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  bannerNoticeIdx === idx
                    ? "bg-cyan-400 text-slate-950 shadow-md font-black"
                    : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/15"
                }`}
              >
                <span>{bItem.badge}</span>
                <span className="opacity-70 text-[11px]">|</span>
                <span className="truncate max-w-[140px] sm:max-w-none">
                  {bItem.title.split(" ")[0]} {bItem.title.split(" ")[1]}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={currentBannerNotice.id}
            initial={reducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-full border border-cyan-400/30">
                {currentBannerNotice.badge || "주요 소식"}
              </span>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-full border border-blue-400/30">
                한국폴리텍대학 로봇캠퍼스 협력
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight break-keep leading-tight">
              {currentBannerNotice.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-medium mb-8 max-w-3xl break-keep leading-relaxed">
              {currentBannerNotice.subtitle || currentBannerNotice.content}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedNotice(currentBannerNotice)}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black rounded-xl hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                상세 안내 & 신청 요강 보기 <ArrowRight className="w-5 h-5" />
              </button>

              {currentBannerNotice.applyUrl ? (
                <a
                  href={currentBannerNotice.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  진학어플라이 원서접수 <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedNotice(currentBannerNotice)}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  수강 신청 방법 확인 <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-15 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Navigation Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#0f2942] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              전체 보기 ({notices.length})
            </button>
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "posts"
                  ? "bg-[#0f2942] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              소식·모집 포스터 ({posts.length})
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "news"
                  ? "bg-[#0f2942] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              언론보도 ({news.length})
            </button>
          </div>

          <span className="text-xs text-slate-400 hidden sm:inline-block">
            * 포스터를 클릭하시면 상세 요강 및 신청 안내를 확인하실 수 있습니다.
          </span>
        </div>

        <div className={`grid gap-8 lg:gap-12 ${activeTab === "all" ? "lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]" : "grid-cols-1"}`}>
          {/* LEFT: 대표 공모전/박람회 포스터 (approx 46%) */}
          {(activeTab === "all" || activeTab === "posts") && (
            <div className="w-full min-w-0 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-cyan-600 rounded-full"></span>
                  주요 모집 & 공지 포스터
                </h2>
                <span className="text-xs text-slate-400">총 {visiblePosts.length}건</span>
              </div>

              {visiblePosts.length > 0 && (
                <div
                  aria-label="공지 포스터. 좌우로 밀어 더 볼 수 있습니다."
                  className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 touch-pan-x md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
                >
                  {visiblePosts.map((post, idx) => (
                    <motion.button
                      key={post.id}
                      type="button"
                      onClick={() => {
                        setCurrentPoster(idx);
                        setSelectedNotice(post);
                      }}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className={`group w-[84%] max-w-[360px] shrink-0 snap-start text-left overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg md:w-auto md:max-w-none md:shrink ${
                        activePosterIndex === idx
                          ? "border-cyan-300 ring-2 ring-cyan-100"
                          : "border-slate-200 hover:border-cyan-200"
                      }`}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                        <img
                          src={post.images?.[0] || "/images/news/default-poster.jpg"}
                          alt={post.title}
                          className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                          {post.isPinned && (
                            <span className="rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-black text-white shadow-sm">
                              HOT
                            </span>
                          )}
                          {post.badge && (
                            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-800 backdrop-blur-sm">
                              {post.badge}
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                            <Sparkles className="h-3 w-3 text-cyan-600" />
                            상세 보기
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between gap-2 text-[11px] font-medium text-slate-500">
                          <span>{post.date}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">{post.category}</span>
                        </div>

                        <h3 className="mb-2 line-clamp-2 text-base font-black leading-snug text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {post.title}
                        </h3>

                        {post.subtitle ? (
                          <p className="mb-3 text-xs font-semibold text-blue-600 break-keep">{post.subtitle}</p>
                        ) : null}

                        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 break-keep">{post.content}</p>

                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-blue-600">
                          <span>포스터 상세보기</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* RIGHT: 프레스 & 뉴스 (앨범 갤러리 그리드) (approx 54%) */}
          {(activeTab === "all" || activeTab === "news") && (
            <div className="w-full min-w-0 flex flex-col">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#1e3a8a] rounded-full"></span>
                    최신 보도자료 & 언론 뉴스
                  </h2>
                </div>
                <span className="text-xs text-slate-400">총 {displayedNews.length}건</span>
              </div>

              <div
                className={`grid ${activeTab === "news" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"} gap-5`}
              >
                {displayedNews.map((notice) => (
                  <motion.a
                    href={notice.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={notice.id}
                    variants={itemAnim}
                    initial="hidden"
                    animate="show"
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#1e3a8a] motion-safe:hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
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
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-700 shadow-sm">
                        {notice.category}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1e3a8a] transition-colors leading-snug line-clamp-2 break-keep">
                        {notice.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 break-keep flex-1">
                        {notice.content}
                      </p>

                      <div className="flex items-center text-[12px] text-slate-400 font-medium mt-4 pt-4 border-t border-slate-100">
                        <span className="text-blue-600 font-bold">{notice.press || "한국진로커리어센터"}</span>
                        <span className="mx-2">|</span>
                        <span>{notice.date}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DETAILED MODAL DIALOG (포스터 및 상세 정보 모달) */}
      {selectedNotice && (
        <dialog
          ref={detailRef}
          aria-labelledby="notice-detail-title"
          onCancel={() => setSelectedNotice(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedNotice(null);
          }}
          data-lenis-prevent
          className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        >
          <div>
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex items-center justify-between z-10">
                <div className="flex min-w-0 flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-[#0f2942] rounded-full text-xs font-black">
                    {selectedNotice.badge || selectedNotice.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{selectedNotice.date}</span>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  aria-label="상세 안내 닫기"
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"

                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {/* Title & Subtitle */}
                <h2 id="notice-detail-title" className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 leading-tight break-keep">
                  {selectedNotice.title}
                </h2>
                {selectedNotice.subtitle && (
                  <p className="text-base sm:text-lg font-bold text-blue-600 mb-6 break-keep">
                    {selectedNotice.subtitle}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
                  {/* Poster Image */}
                  <div className="md:col-span-5 bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-sm">
                    {selectedNotice.images && selectedNotice.images[0] ? (
                      <div className="rounded-xl overflow-hidden group relative">
                        <img
                          src={selectedNotice.images[0]}
                          alt={selectedNotice.title}
                          className="w-full h-auto object-contain rounded-xl"
                        />
                        <a
                          href={selectedNotice.images[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-3 right-3 bg-slate-900/80 hover:bg-slate-950 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> 원본 크게보기
                        </a>
                      </div>
                    ) : (
                      <div className="aspect-[3/4] flex items-center justify-center text-slate-400">이미지 없음</div>
                    )}
                  </div>

                  {/* Summary & Key Information */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">개요 및 안내</h4>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed break-keep">
                        {selectedNotice.content}
                      </p>
                    </div>

                    {/* CASE 1: 생성형 AI 교육과정일 때 */}
                    {selectedNotice.details?.type === "course" && (
                      <div className="flex flex-col gap-4">
                        {/* 4대 주요 혜택 카드 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
                              <Gift className="w-4 h-4" />
                              <span>수강료 전액 무료</span>
                            </div>
                            <div className="text-base font-black text-slate-900">0원 (전액 국비 지원)</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">교재비·실습비 일체 무료</div>
                          </div>

                          <div className="bg-purple-50 border border-purple-200 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-purple-700 font-bold text-xs mb-1">
                              <Sparkles className="w-4 h-4" />
                              <span>특별 혜택 제공</span>
                            </div>
                            <div className="text-base font-black text-slate-900">AI 1개월 무료 이용권</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">수강생 전원 무료 증정</div>
                          </div>

                          <div className="bg-cyan-50 border border-cyan-200 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-cyan-700 font-bold text-xs mb-1">
                              <Monitor className="w-4 h-4" />
                              <span>교육 방식</span>
                            </div>
                            <div className="text-base font-black text-slate-900">100% 온라인 교육</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">전국 어디서나 비대면 수강</div>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-1">
                              <Clock className="w-4 h-4" />
                              <span>교육 시간</span>
                            </div>
                            <div className="text-base font-black text-slate-900">총 32시간 (주 8시간)</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">주 3회 (1회 2~3시간, 4주)</div>
                          </div>
                        </div>

                        {/* 과정 세부 특징 리스트 */}
                        {selectedNotice.details.courseFeatures && (
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                              <Layers className="w-4 h-4 text-blue-600" /> 과정 주요 특징
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                              {selectedNotice.details.courseFeatures.map((feat, i) => (
                                <div key={i} className="bg-white p-2.5 rounded-xl border border-slate-100">
                                  <div className="font-bold text-blue-700 mb-0.5">{feat.label}</div>
                                  <div className="text-slate-600">{feat.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CASE 2: 로봇캠퍼스 2027 신입생 모집일 때 */}
                    {selectedNotice.details?.type === "recruitment" && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-blue-50/70 border border-blue-100 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs mb-1">
                              <GraduationCap className="w-4 h-4" />
                              <span>모집 정원</span>
                            </div>
                            <div className="text-sm font-black text-slate-900">소수정예 100명 (2년제)</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">산업학사 학위 취득 과정</div>
                          </div>

                          <div className="bg-emerald-50/70 border border-emerald-100 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-1">
                              <Award className="w-4 h-4" />
                              <span>등록금 & 장학 혜택</span>
                            </div>
                            <div className="text-sm font-black text-slate-900">학기당 108만원</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">영천시 장학금 최대 110만원</div>
                          </div>

                          <div className="bg-purple-50/70 border border-purple-100 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-purple-700 font-bold text-xs mb-1">
                              <Briefcase className="w-4 h-4" />
                              <span>취업 연계 학제</span>
                            </div>
                            <div className="text-sm font-black text-slate-900">3학기 수업 + 1학기 취업</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">조기 현장 투입 실무형 인재</div>
                          </div>

                          <div className="bg-amber-50/70 border border-amber-100 p-3.5 rounded-2xl">
                            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-1">
                              <Sparkles className="w-4 h-4" />
                              <span>취업률 성과</span>
                            </div>
                            <div className="text-sm font-black text-slate-900">취업률 92.1%</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">2025학년도 자체 집계 기준</div>
                          </div>
                        </div>

                        {selectedNotice.details.majorEmployers && (
                          <div>
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <Building2 className="w-4 h-4 text-blue-600" /> 주요 취업처
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedNotice.details.majorEmployers.map((emp, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                                >
                                  {emp}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* 교육 커리큘럼 3단계 (생성형 AI 과정일 때) */}
                {selectedNotice.details?.curriculumSteps && (
                  <div className="border-t border-slate-200 pt-6 mb-8">
                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      3단계 교육 커리큘럼
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedNotice.details.curriculumSteps.map((cStep, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-black text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md mb-2 inline-block">
                              STEP {cStep.step}
                            </span>
                            <h4 className="text-base font-bold text-slate-900 mb-2">{cStep.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cStep.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 수강 혜택 리스트 (생성형 AI 과정일 때) */}
                {selectedNotice.details?.specialGifts && (
                  <div className="bg-gradient-to-r from-blue-900 to-[#0e2a47] text-white p-6 sm:p-7 rounded-3xl mb-8 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-black text-white">수강생만을 위한 특별 혜택 & 지원</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {selectedNotice.details.specialGifts.map((gift, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10"
                        >
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{gift}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-slate-300">
                      * 상시 모집 중이며 정원 충원 시 순차적으로 개강합니다. 조기 마감될 수 있으니 빠른 신청을
                      권장합니다.
                    </p>
                  </div>
                )}

                {/* Schedule & Application Methods Table (신입생 모집일 때) */}
                {selectedNotice.details?.schedule && (
                  <div className="border-t border-slate-200 pt-6 mb-8">
                    <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-cyan-600" />
                      원서 접수 일정 및 방법
                    </h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                            <th className="py-3 px-4 rounded-l-xl">구분</th>
                            <th className="py-3 px-4">접수 기간</th>
                            <th className="py-3 px-4 rounded-r-xl">접수 방법</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {selectedNotice.details.schedule.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="py-3 px-4 font-bold text-slate-900">{item.round}</td>
                              <td className="py-3 px-4 text-blue-700 font-semibold">{item.period}</td>
                              <td className="py-3 px-4 text-slate-600 text-xs sm:text-sm">
                                진학어플라이 온라인 또는 교학처 방문
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 접수 안내 박스 (공통) */}
                {selectedNotice.details?.applyMethods && (
                  <div className="border-t border-slate-200 pt-6 mb-8">
                    <h3 className="text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      신청 방법 및 안내
                    </h3>
                    <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                      {selectedNotice.details.applyMethods.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0 mt-2"></span>
                          <span className="leading-relaxed">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Blog Review Summary (블로그 심층 분석 섹션 - 신입생 모집일 때) */}
                {selectedNotice.details?.blogReviewSummary && (
                  <div className="bg-gradient-to-br from-slate-900 to-[#0c2238] text-white p-6 sm:p-7 rounded-3xl mb-8 shadow-xl">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-lg font-black text-white">블로그 전문가 심층 분석 리포트</h3>
                      </div>
                      <span className="text-xs text-cyan-300 font-medium">
                        출처: 공인중개사 환희씨 입시·취업 분석 블로그
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed break-keep">
                      전국 35개 폴리텍 캠퍼스 중 영천 로봇캠퍼스는{" "}
                      <strong>국내 유일의 로봇 자동화 라인 구축 전문 특화 대학</strong>으로, 단순 이론이 아닌 70~80%의
                      집중 실습과 1:1 맞춤형 산학 네트워크를 갖춘 강력한 취업 사관학교입니다.
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {selectedNotice.details.blogReviewSummary.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {selectedNotice.blogUrl && (
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs text-slate-400">
                          폴리텍대학 인기캠퍼스, 학과, 취업률 전체 분석 내용이 궁금하시다면?
                        </span>
                        <a
                          href={selectedNotice.blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-md"
                        >
                          네이버 블로그 원문 글 읽기 <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-slate-100">
                  {selectedNotice.tel && (
                    <a
                      href={`tel:${selectedNotice.tel}`}
                      className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-slate-600" />
                      전화 문의 ({selectedNotice.tel})
                    </a>
                  )}

                  {selectedNotice.kopoUrl && (
                    <a
                      href={selectedNotice.kopoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4 text-slate-600" />
                      로봇캠퍼스 홈페이지
                    </a>
                  )}

                  {selectedNotice.applyUrl ? (
                    <a
                      href={selectedNotice.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-black rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                    >
                      진학어플라이 원서 접수 바로가기 <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={selectedNotice.images[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-black rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                    >
                      포스터 QR코드 스캔 접수 <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
