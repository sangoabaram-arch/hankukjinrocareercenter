import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const latestProgramPosters = [
  {
    id: 1,
    title: "구직자·재직자를 위한 “생성형 AI 활용” 실무 과정 교육생 모집",
    badge: "전액 무료 교육",
    date: "상시 모집",
    image: "/images/news/generative_ai_course.jpg",
    summary: "AI 기초부터 실무 활용까지, 온라인 무료 교육과 생성형 AI 이용권까지 제공됩니다.",
  },
  {
    id: 2,
    title: "한국폴리텍대학 로봇캠퍼스 2027학년도 신입생 모집",
    badge: "2027 신입생 모집",
    date: "2026.09 ~ 2027.01",
    image: "/images/news/polytech_robot_2027.png",
    summary: "로봇 전문 교육과 취업 연계, 실질적 비용 부담을 낮춘 특화 프로그램입니다.",
  },
];

export default function ProgramPosters() {
  return (
<section className="mb-10">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
              최신 프로그램 포스터
            </h2>
            <span className="text-xs text-slate-400">최근 2건</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {latestProgramPosters.map((poster) => (
              <Link
                to="/notices"
                key={poster.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-500/90 px-2.5 py-1 text-[10px] font-black text-white shadow-sm">
                      NEW
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-800 backdrop-blur-sm">
                      {poster.badge}
                    </span>
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
                    <span>{poster.date}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">프로그램</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 text-base font-black leading-snug text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {poster.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 break-keep">{poster.summary}</p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-blue-600">
                    <span>모집 안내 보기</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

  );
}
