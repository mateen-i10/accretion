import { Instagram, LinkedIn, Twitter } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cream text-ink relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-[12.5px] font-medium text-ink/55 mb-4">Navigation</h4>
          <ul className="space-y-2 text-[14px]">
            <li><a href="#features">Features</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[12.5px] font-medium text-ink/55 mb-4">Social</h4>
          <ul className="space-y-2 text-[14px]">
            <li><a href="#" className="inline-flex items-center gap-2"><Twitter className="size-3.5" />Twitter</a></li>
            <li><a href="#" className="inline-flex items-center gap-2"><LinkedIn className="size-3.5" />LinkedIn</a></li>
            <li><a href="#" className="inline-flex items-center gap-2"><Instagram className="size-3.5" />Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[20px] font-semibold tracking-tight">What&apos;s new, straight to you</h4>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="jane@framer.com"
              className="flex-1 rounded-lg bg-white ring-1 ring-black/10 px-4 py-2.5 text-[13.5px] outline-none focus:ring-ink/30"
            />
            <button type="submit" className="rounded-lg bg-ink text-white px-4 py-2.5 text-[13.5px] font-medium">Subscribe</button>
          </form>
          <p className="mt-2 text-[12px] text-ink/55">Includes the latest product updates, productivity tips, and insights.</p>
        </div>
      </div>

      {/* Big watermark */}
      <div aria-hidden className="select-none pointer-events-none">
        <div className="mx-auto max-w-6xl px-6 -mt-2 mb-4 text-center text-ink/8 leading-none">
          <span className="block text-[16vw] font-semibold tracking-[-0.04em] text-ink/[0.06]">Accretion</span>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between text-[12.5px] text-ink/55">
          <span>© 2025 Accretion. All rights reserved.</span>
          <span>Created by <span className="font-semibold text-ink">Kreativnik</span></span>
        </div>
      </div>
    </footer>
  );
}
