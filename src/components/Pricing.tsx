import { Check } from "./icons";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    features: ["Up to 3 projects", "50 tasks per month", "Mobile & desktop access", "Basic checklists"],
    cta: "Get started",
    accent: false,
    plus: "",
  },
  {
    name: "Basic",
    price: "$14",
    period: "per month",
    sub: "Billed yearly",
    features: ["Unlimited projects", "Unlimited tasks", "Task due dates & reminders", "Share with up to 3 collaborators"],
    cta: "Get started",
    accent: false,
    plus: "",
  },
  {
    name: "Premium",
    price: "$26",
    period: "per month",
    sub: "Billed yearly",
    features: ["Unlimited personal tasks", "Basic projects & checklists", "Mobile & desktop access", "Share with up to 2 collaborators"],
    cta: "Get started",
    accent: true,
    plus: "Everything in Basic, plus:",
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Custom workflows & automations", "Advanced reporting & insights", "Role-based permissions", "Integrations (Slack, Google, Notion, etc.)"],
    cta: "Get started",
    accent: false,
    plus: "Everything in Premium, plus:",
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink text-white pt-24 pb-20 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[44px] md:text-[58px] font-semibold leading-[1.05] tracking-tight">Pricing</h2>
        <p className="mt-4 text-white/60">Choose the plan that matches your workflow — no hidden fees, no surprises.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl ring-1 p-6 flex flex-col ${t.accent ? "bg-orange-gradient ring-white/15" : "bg-ink-2 ring-white/5"}`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[13px] ${t.accent ? "text-white/85" : "text-white/55"}`}>{t.name}</span>
              {"badge" in t && t.badge ? (
                <span className="rounded-full bg-white/15 ring-1 ring-white/15 px-2 py-0.5 text-[11px]">{t.badge}</span>
              ) : null}
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className={`${t.price.length > 4 ? "text-[40px]" : "text-[56px]"} font-semibold leading-none`}>{t.price}</span>
              {t.period && <span className={`text-[12px] ${t.accent ? "text-white/85" : "text-white/50"}`}>{t.period}</span>}
            </div>
            {"sub" in t && t.sub ? (
              <div className={`mt-2 inline-flex items-center gap-2 text-[12px] ${t.accent ? "text-white/85" : "text-white/55"}`}>
                <span className="h-4 w-7 rounded-full bg-white/15 ring-1 ring-white/15 relative">
                  <span className="absolute top-0.5 left-0.5 size-3 rounded-full bg-white/80" />
                </span>
                {t.sub}
              </div>
            ) : null}
            {t.plus && <p className={`mt-5 text-[12.5px] font-medium ${t.accent ? "text-white" : "text-white/85"}`}>{t.plus}</p>}
            <ul className="mt-3 space-y-2 text-[13px]">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`size-4 shrink-0 mt-0.5 ${t.accent ? "text-white" : "text-orange"}`} />
                  <span className={t.accent ? "text-white/95" : "text-white/75"}>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 rounded-xl py-2.5 text-[13.5px] font-medium ${t.accent ? "bg-white/15 ring-1 ring-white/20 text-white hover:bg-white/20" : "bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10"}`}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
