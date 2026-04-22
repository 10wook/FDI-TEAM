"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import PageNav from "@/components/layout/PageNav";
import IntroPage from "@/components/pages/IntroPage";
import ChallengePage from "@/components/pages/ChallengePage";
import VisionPage from "@/components/pages/VisionPage";
import QuantityPage from "@/components/pages/QuantityPage";
import SecurityPage from "@/components/pages/SecurityPage";
import QualityPage from "@/components/pages/QualityPage";
import RequirementsPage from "@/components/pages/RequirementsPage";
import ExistingApproachesPage from "@/components/pages/ExistingApproachesPage";
import WrapsodyPage from "@/components/pages/WrapsodyPage";
import AgentsPage from "@/components/pages/AgentsPage";
import FiresidePage from "@/components/pages/FiresidePage";
import ConclusionPage from "@/components/pages/ConclusionPage";
import ChatPanel, { type ChatPanelHandle } from "@/components/chat/ChatPanel";
import { MainScrollContext } from "@/contexts/MainScrollContext";
import { pageMorphVariants } from "@/lib/page-motion";
import { PAGES, getPage, type PageId } from "@/lib/pages";

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<PageId>("intro");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const chatRef = useRef<ChatPanelHandle>(null);

  const currentPage = getPage(currentPageId);

  const navigateTo = useCallback(
    (pageId: PageId) => {
      if (pageId === currentPageId) return;
      setHighlightedId(null);
      setCurrentPageId(pageId);
    },
    [currentPageId],
  );

  const highlightSection = useCallback((sectionId: string) => {
    setHighlightedId(sectionId);
    window.setTimeout(() => {
      const el = document.getElementById(`section-${sectionId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, []);

  const handleHighlightFromTool = useCallback(
    (pageId: PageId, sectionId: string) => {
      if (pageId !== currentPageId) {
        navigateTo(pageId);
        window.setTimeout(() => highlightSection(sectionId), 750);
      } else {
        highlightSection(sectionId);
      }
    },
    [currentPageId, navigateTo, highlightSection],
  );

  const handleAskQuestion = useCallback((q: string) => {
    chatRef.current?.askQuestion(q);
  }, []);

  const handleOpenChat = useCallback(() => {
    chatRef.current?.open();
  }, []);

  const handlePrev = () => {
    const idx = PAGES.findIndex((p) => p.id === currentPageId);
    if (idx > 0) navigateTo(PAGES[idx - 1].id);
  };

  const handleNext = () => {
    const idx = PAGES.findIndex((p) => p.id === currentPageId);
    if (idx < PAGES.length - 1) navigateTo(PAGES[idx + 1].id);
  };

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [currentPageId]);

  const renderPage = () => {
    switch (currentPageId) {
      case "intro":
        return (
          <IntroPage
            highlightedId={highlightedId}
            onNavigate={navigateTo}
            onAskQuestion={handleAskQuestion}
          />
        );
      case "challenge":
        return <ChallengePage highlightedId={highlightedId} />;
      case "vision":
        return <VisionPage highlightedId={highlightedId} />;
      case "quantity":
        return <QuantityPage highlightedId={highlightedId} />;
      case "security":
        return <SecurityPage highlightedId={highlightedId} />;
      case "quality":
        return <QualityPage highlightedId={highlightedId} />;
      case "requirements":
        return <RequirementsPage highlightedId={highlightedId} />;
      case "existing-approaches":
        return <ExistingApproachesPage highlightedId={highlightedId} />;
      case "wrapsody":
        return <WrapsodyPage highlightedId={highlightedId} />;
      case "agents":
        return <AgentsPage highlightedId={highlightedId} />;
      case "fireside":
        return <FiresidePage highlightedId={highlightedId} />;
      case "conclusion":
        return (
          <ConclusionPage
            highlightedId={highlightedId}
            onNavigate={navigateTo}
            onOpenChat={handleOpenChat}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-white text-slate-900 overflow-hidden flex flex-col">
      <Header currentPage={currentPage.num} totalPages={PAGES.length} />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar currentPageId={currentPageId} onNavigate={navigateTo} />
        <MainScrollContext.Provider value={mainRef}>
          <main ref={mainRef} className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-12 py-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentPageId}
                  className="will-change-transform"
                  variants={pageMorphVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {renderPage()}
                  <PageNav
                    currentNum={currentPage.num}
                    total={PAGES.length}
                    onPrev={handlePrev}
                    onNext={handleNext}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </MainScrollContext.Provider>
      </div>

      <ChatPanel
        ref={chatRef}
        onNavigate={navigateTo}
        onHighlight={handleHighlightFromTool}
      />
    </div>
  );
}
