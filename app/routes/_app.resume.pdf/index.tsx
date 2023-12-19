export let handle = {
  i18n: "cv",
};

export const CvViewer = () => {
  return (
    <div>
      <div className="flex w-full h-[90vh]">
        <iframe
          className="w-full h-full"
          title="resume.Pdf"
          src="/resume.pdf"
        />
      </div>
    </div>
  );
};

export default CvViewer;
