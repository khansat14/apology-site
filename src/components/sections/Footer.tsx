import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-gradient-to-b from-[#fff9f5] to-[#fff0e6] py-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 fill-pink-400 text-pink-400" />
          <span className="text-sm font-semibold text-gray-700">
            For Akzeinep
          </span>
          <Heart className="h-5 w-5 fill-pink-400 text-pink-400" />
        </div>
        <p className="mb-6 text-sm leading-relaxed text-gray-500">
          Built with love, regret, and a lot of TypeScript by{" "}
          <span className="font-semibold text-pink-600">Ali</span>. <br />
          No frameworks were harmed in the making of this apology. <br />
          (My ego, however, took a significant hit.)
        </p>
        <p className="text-xs text-gray-400">
          © 2026 How To Not Lose Your Girlfriend™ — All rights reserved.
          Especially the right to be forgiven. 🙏
        </p>
      </div>
    </footer>
  );
}
