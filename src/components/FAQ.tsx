import { Plus } from "./icons";

const faqs = [
  { q: "Is there a free version?", a: "Yes! We offer a free plan designed to help individuals and small teams get started with task management. It includes essential features like creating tasks, assigning them, setting deadlines, and tracking progress. The free version is perfect for testing out the platform and seeing how it can fit into your workflow before committing to a paid plan." },
  { q: "Can I change my plan later?", a: "Absolutely. You have full flexibility to upgrade, downgrade, or switch between plans at any time. If your team grows or your needs change, you can easily adjust your plan without losing any of your data or progress. Changes are reflected immediately, so you'll always have the features you need." },
  { q: "Do you offer a mobile app?", a: "Yes! We provide mobile apps for both iOS and Android, allowing you to manage tasks, track progress, and collaborate with your team from anywhere. Whether you're commuting, traveling, or working remotely, the mobile app ensures your workflow stays seamless across all devices." },
  { q: "Do you offer discounts for yearly billing?", a: "Yes, we do! Choosing annual billing comes with a discount compared to monthly plans, allowing you to save while committing to a full year of productivity. It's a great option for teams or individuals who want to maximize value and minimize the hassle of monthly payments." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, including Visa, MasterCard, and American Express. Additionally, we support PayPal for added convenience. All payments are securely processed, giving you peace of mind when subscribing to our plans." },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-ink text-white px-6 pt-24 pb-32 relative">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-[40px] md:text-[52px] font-semibold leading-[1.05] tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-white/55">Get answers to commonly asked questions.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-ink-2 ring-1 ring-white/5 px-6 py-5">
              <summary className="flex items-center justify-between text-[15.5px] font-medium">
                {f.q}
                <Plus className="size-4 text-white/55 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[14px] text-white/65 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
