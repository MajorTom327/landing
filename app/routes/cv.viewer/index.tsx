import React, { Suspense } from "react";

export let handle = {
  i18n: "cv",
};

export const CvViewer = () => {
  return (
    <div>
      <div className="flex w-full h-[85vh]">
        <iframe className="w-full h-full" title="cv.Pdf" src="/cv.pdf" />
      </div>
    </div>
  );
};

export default CvViewer;
