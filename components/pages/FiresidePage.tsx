import { Smartphone, Zap } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";
import ContentComingSoon from "@/components/shared/ContentComingSoon";

type Props = {
  highlightedId: string | null;
};

export default function FiresidePage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={11}
        group="해결 확장"
        title="Fireside 모바일 허브"
        subtitle="사무실 밖에서도 메신저 형태로 모든 AI 에이전트에 접근할 수 있습니다."
      />

      <SectionWrapper
        id="concept"
        highlightedId={highlightedId}
        className="mb-8"
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <SubHeading accent="blue">개념</SubHeading>
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              비즈니스 메신저 + AI 메시징 허브
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-2">
              <p>Fireside는 비즈니스 메신저인 동시에 AI 메시징 허브입니다.</p>
              <p>
                Wrapsody의 모든 AI 에이전트 기능을 모바일 인터페이스로 그대로
                가져와, 외부 활동 중에도 스마트폰으로 질의할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 flex items-center justify-center">
            <Smartphone className="w-16 h-16 text-blue-600" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="mobile-extension"
        highlightedId={highlightedId}
        className="mb-8"
      >
        <div className="border border-slate-200 rounded-xl p-6 float-hover bg-white">
          <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-blue-600" />
            모바일 영역으로의 인터페이스 확장
          </h4>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                K-Assistant 등 기존 Wrapsody Agent를 메신저 환경으로 완벽 연계
              </span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>장소 제약 없이 언제 어디서나 AI 지식에 접근 가능</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="open-api"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="border border-slate-200 rounded-xl p-6 float-hover bg-white">
          <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            개방형 API 연결 및 범용성
          </h4>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                기본 Agent 외 서드파티 AI Agent와도 채팅 인터페이스 연동 가능
              </span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                기업 내 모든 AI 시스템을 하나의 메신저로 연결하는 단일 창구
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="fireside-demo" highlightedId={highlightedId}>
        <SubHeading accent="blue">Live Demo</SubHeading>
        <ContentComingSoon
          variant="mediaSlot"
          title="모바일 시연 캡처·영상 미정"
          description="Fireside 모바일 사용 시연 캡처나 영상이 준비되면 이 영역에 연결됩니다. 현재는 자리만 확보한 상태입니다."
        />
      </SectionWrapper>
    </div>
  );
}
