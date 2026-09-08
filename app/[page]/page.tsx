import type { Metadata } from "next";
import { ApprovedDesignHost } from "@/components/ApprovedDesignHost";

const titles: Record<string, string> = {
  about: "센터 안내",
  organization: "조직도",
  programs: "프로그램",
  partners: "협력기관",
  apply: "상담신청",
  notices: "공지·소식",
  instructors: "강사 매칭",
  mentoring: "진로 멘토링",
  contact: "오시는 길",
  "job-info": "취업정보",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return { title: titles[page] ?? "한국진로커리어센터" };
}

export default function ApprovedPage() {
  return <ApprovedDesignHost />;
}
