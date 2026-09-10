import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function Home() {
  const noticeRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = noticeRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  // 일반 부드러운 스크롤 (자동 스크롤 비활성화)
  useEffect(() => {
    document.documentElement.style.scrollSnapType = "";
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollSnapType = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // --- 일반 스크롤 애니메이션 변수 ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full overflow-x-clip bg-white text-slate-900 font-sans">
      <dialog
        ref={noticeRef}
        aria-labelledby="maintenance-title"
        aria-describedby="maintenance-description"
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[500px] overflow-y-auto rounded-3xl border border-slate-100 bg-white p-8 text-center text-slate-900 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm md:p-10"
      >
        <button
          type="button"
          aria-label="안내 닫기"
          onClick={() => noticeRef.current?.close()}
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <X className="h-6 w-6" />
        </button>
        <div aria-hidden="true" className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <span className="text-3xl">🛠️</span>
        </div>
        <h2 id="maintenance-title" className="mb-4 text-2xl font-black">안내 말씀드립니다</h2>
        <div id="maintenance-description" className="mb-8 break-keep leading-relaxed text-slate-600">
          <p className="mb-2 font-bold text-slate-800">현재 홈페이지 수정 중에 있습니다.</p>
          <p>홈페이지 이용에 다소 불편함이 있더라도<br className="block sm:hidden" /> 양해 부탁드립니다.</p>
        </div>
        <button
          type="button"
          onClick={() => noticeRef.current?.close()}
          className="w-full rounded-xl bg-[#1e3a8a] py-4 font-bold text-white transition-colors hover:bg-[#0f2942]"
        >
          확인
        </button>
      </dialog>
      {/* Hero Section (Sticky Overlay) */}
      <section className="sticky top-0 w-full h-screen bg-white flex items-center justify-center overflow-hidden z-0">
        {/* 동적 배경 */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={`/images/hero.jpg`}
            alt="배경 이미지"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* 통합된 원본 텍스트 레이어 */}
        <motion.div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center text-white mt-16 flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold mb-8 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            차세대 AI 커리어 솔루션
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.1] tracking-tight break-keep mb-8 drop-shadow-2xl text-white"
          >
            미래를 설계하는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-100">
              AI 기반 맞춤형 커리어 솔루션
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-100 max-w-2xl font-medium break-keep mb-12 drop-shadow-lg leading-relaxed"
          >
            정교한 AI 진단부터 맞춤형 진학·취업·창업
            <br />
            당신만을 위한 성공적인 커리어 로드맵을 제시합니다.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#050B14] rounded-full font-black text-xl hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] group gap-2"
            >
              AI 상담 시작하기
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature 1: 간편한 상담 신청 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-white z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight break-keep text-slate-900 mb-8">
              복잡한 진로 고민은
              <br />
              <span className="text-blue-600">보다 쉽게.</span>
            </h2>
            <p className="text-lg md:text-3xl text-slate-500 font-medium leading-relaxed break-keep">
              체계적인 데이터 분석과 직업 심리 적성검사로<br />
              나에게 맞는 과정을 간편하게 선택하고,<br />
              AI 상담부터 취업 연계까지 손쉽게 신청할 수 있어요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: 맞춤형 프로그램 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-slate-50 border-y border-slate-100 z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >
            <div className="w-full lg:w-1/2">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight break-keep text-slate-900 mb-8"
              >
                AI기반 진로 진단과<br className="block md:hidden" /> 맞춤형 상담으로
                <br />
                <span className="text-blue-600">
                  나에게 딱 맞는
                  <br />
                  프로그램 매칭.
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-500 font-medium mb-12 leading-relaxed break-keep"
              >
                마이페이지에서 내 진단 결과에 맞는
                <br />
                가장 완벽한 커리어 패스를 확인하세요.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 font-bold text-2xl text-slate-900 hover:text-blue-600 transition-colors"
                >
                  프로그램 둘러보기 <ArrowRight className="w-8 h-8" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <span className="text-sm md:text-base font-bold text-blue-600 mb-3 block">AI 진단 매칭 98%</span>
                    <h4 className="text-2xl md:text-4xl font-black">청년 취업역량강화</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between translate-x-0 lg:translate-x-12 hover:-translate-y-2 transition-transform duration-300">
                  <div>
                    <span className="text-sm md:text-base font-bold text-teal-600 mb-3 block">전문가 강력 추천</span>
                    <h4 className="text-2xl md:text-4xl font-black">기업 채용 컨설팅</h4>
                  </div>
                  <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature 3: 바로 시작하는 교육 */}
      <section className="relative w-full min-h-screen flex items-center py-32 md:py-48 bg-[#050B14] text-white z-10">
        <div className="max-w-[1400px] w-full mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight break-keep mb-8">
              대기 없이
              <br />
              <span className="text-cyan-400">바로 시작하세요.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-400 font-medium mb-24 leading-relaxed break-keep">
              선착순 마감 없는 상시 교육 과정으로<br />
              내 커리어 성장을<br />
              지금 당장 시작하세요.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {[
              { id: "01", title: "AI 기초 활용", desc: "직무 효율을 높이는 생성형 AI 실무" },
              { id: "02", title: "비즈니스 매너", desc: "입사 전 반드시 알아야 할 에티켓" },
              { id: "03", title: "입사지원서 및 포트폴리오 코칭", desc: "인사담당자 눈에 띄는 작성법" },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-slate-800/30 p-10 md:p-12 rounded-[2rem] border border-slate-700/50 hover:bg-slate-800 transition-colors duration-500"
              >
                <span className="text-5xl md:text-6xl font-black text-slate-700 mb-8 block">{item.id}</span>
                <h4 className="text-xl md:text-3xl font-bold mb-4 break-keep leading-snug">{item.title}</h4>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed break-keep">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
