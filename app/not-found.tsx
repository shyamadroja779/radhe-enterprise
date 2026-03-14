import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display font-900 text-[#f6780a] text-8xl md:text-[160px] leading-none mb-4 opacity-20">
          404
        </div>
        <h1 className="font-display font-800 text-4xl text-white uppercase mb-3">
          Page Not Found
        </h1>
        <p className="text-[#697892] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f6780a] hover:bg-[#bf4307] text-white font-semibold rounded-sm transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
