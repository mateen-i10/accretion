import { StarIcon } from "./icons";

const testimonials = [
  { quote: "I love how easy it is to jump between projects. No more wasting time figuring out what's next.", name: "Elena N.", company: "Studio Polaris" },
  { quote: "Our clients noticed the difference right away. Clear progress, better communication, and fewer delays—everything just feels smoother now.", name: "Hannah S.", company: "Everpath" },
  { quote: "What I love about Accretion is that it doesn't force you into one rigid way of working.", name: "Taylor S.", company: "HorizonWorks" },
  { quote: "The mobile app is a game-changer. I can check in on projects, add updates, or review tasks while I'm commuting. It keeps me connected without slowing me down.", name: "David O.", company: "NimbusWorks" },
  { quote: "It's like the noise has been stripped away. The interface is clean, the automations are smart, and I can finally focus on what matters.", name: "Jonah P.", company: "Horizon Labs" },
  { quote: "Accretion keeps our projects moving without the constant check-ins. I finally feel like my team is ahead instead of catching up.", name: "Sofia R.", company: "Brightwave" },
  { quote: "Before Accretion, projects felt like a constant scramble. Now, automation handles the repetitive stuff, and the insights keep us on track without extra effort. It's rare to find a tool that actually delivers on the promise of making work easier, but this one really does.", name: "Mateo A.", company: "Stratus Technologies" },
  { quote: "Accretion saves me hours every single week. That's time I can put back into actual creative work instead of chasing down updates.", name: "Amira K.", company: "Northstar" },
  { quote: "Accretion has completely changed how we organize our work. Our team finally has one place to keep tasks, updates, and files without getting lost in endless threads.", name: "Marcus C.", company: "Corebyte" },
  { quote: "We tried three other platforms before this one. None of them clicked with the team. This did, almost instantly.", name: "Lucas M.", company: "SummitFlow" },
];

function Card({ t, accent }: { t: typeof testimonials[number]; accent?: boolean }) {
  return (
    <div className={`rounded-2xl ring-1 p-6 ${accent ? "bg-ink-3 ring-white/10" : "bg-ink-2 ring-white/5"}`}>
      <p className="text-[14.5px] leading-relaxed text-white/85">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="size-8 rounded-full" style={{ background: `hsl(${(t.name.charCodeAt(0) * 7) % 360} 60% 65%)` }} />
        <div>
          <div className="text-[13px] font-medium text-white">{t.name}</div>
          <div className="text-[11.5px] text-white/45">{t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const cols = [testimonials.slice(0, 4), testimonials.slice(4, 7), testimonials.slice(7, 10)];
  return (
    <section id="testimonials" className="bg-ink text-white pt-24 pb-24 px-6 relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-[44px] md:text-[58px] font-semibold leading-[1.05] tracking-tight">
          See how Accretion empowers
          <br />teams to achieve more
        </h2>
        <p className="mt-4 text-white/60">Hear how our platform is helping teams deliver results faster, smarter, and efficiently.</p>
      </div>

      <div className="mx-auto mt-10 flex items-center justify-center gap-6">
        <div className="flex items-center gap-1 text-orange">
          {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-4" />)}
          <span className="ml-2 text-white/85 text-[14px]">4.9/5</span>
        </div>
        <div className="flex items-center gap-2 text-[14px] text-white/70">
          <div className="flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="size-6 rounded-full ring-2 ring-ink" style={{ background: `hsl(${i * 80} 60% 60%)` }} />
            ))}
          </div>
          <span><b className="text-white">+82</b> Clients worldwide<br /><span className="text-white/45 text-[12px]">who love our service</span></span>
        </div>
        <button className="rounded-full bg-white/8 ring-1 ring-white/10 px-4 py-2 text-[13px] hover:bg-white/12">Leave a review</button>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
        {cols.map((col, i) => (
          <div key={i} className="space-y-4">
            {col.map((t, j) => <Card key={j} t={t} accent={(i + j) % 3 === 1} />)}
            {i === 1 && (
              <div className="rounded-2xl bg-orange-gradient p-6 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[36px] font-semibold leading-none">29%</div>
                    <div className="text-[12.5px] mt-1 text-white/85">Faster Project Delivery</div>
                  </div>
                  <div>
                    <div className="text-[36px] font-semibold leading-none">43%</div>
                    <div className="text-[12.5px] mt-1 text-white/85">Lower Overhead Costs</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
