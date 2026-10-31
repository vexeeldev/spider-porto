"use client";

import { ComicLoadingScreen } from "@/components/comic/ComicLoadingScreen";

export default function LoadingPreviewPage() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden overscroll-none touch-none select-none bg-black">
      <ComicLoadingScreen autoDismiss={false} />
    </div>
  );
}
