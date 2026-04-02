import { useReactToPrint } from "react-to-print";

export default function CvDownloadButton({ contentRef }) {
  const handlePrint = useReactToPrint({
  contentRef: contentRef,
});

  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={handlePrint}
        className="px-6 py-2 rounded-full bg-primary text-white hover:opacity-80 transition"
      >
        Download CV
      </button>
    </div>
  );
}