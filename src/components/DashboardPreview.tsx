import Image from "next/image";
import {
  AnalyticsIcon,
  BellIcon,
  CalendarIcon,
  ChevronDown,
  DocsIcon,
  FilterIcon,
  GroupIcon,
  HelpIcon,
  HomeIcon,
  InboxIcon,
  CheckCircle,
  LogoMark,
  Plus,
  Search,
  SettingsIcon,
  SortIcon,
} from "./icons";

const navItems: { label: string; icon: React.ComponentType<{ className?: string }>; count?: number }[] = [
  { label: "Home", icon: HomeIcon },
  { label: "My Tasks", icon: CheckCircle, count: 7 },
  { label: "Inbox", icon: InboxIcon, count: 27 },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Docs", icon: DocsIcon },
  { label: "Calendar", icon: CalendarIcon, count: 4 },
  { label: "Settings", icon: SettingsIcon },
];

const projects: { label: string; active?: boolean }[] = [
  { label: "Product & Engineering", active: true },
  { label: "Marketing" },
  { label: "Operations" },
  { label: "HR & People" },
  { label: "Finance" },
];

const tabs = ["Board", "Timeline", "Calendar", "Dashboard", "Progress", "Forms"];

const columns = [
  {
    title: "Backlog Tasks",
    count: 4,
    badgeBg: "rgba(226, 107, 8, 0.1)",
    badgeFg: "rgb(226, 107, 8)",
    badgeBorder: "rgba(226, 107, 8, 0.18)",
    img: "/images/E0DaDQ2Af338oLmYbM1hGKUag8s.png",
    width: 320,
    height: 362,
  },
  {
    title: "To Do Tasks",
    count: 4,
    badgeBg: "rgba(236, 72, 153, 0.1)",
    badgeFg: "rgb(219, 39, 119)",
    badgeBorder: "rgba(219, 39, 119, 0.2)",
    img: "/images/f4fVfyFHZeTn8bgtnYk6kcOzpnY.png",
    width: 320,
    height: 668,
  },
  {
    title: "In Progress",
    count: 2,
    badgeBg: "rgba(168, 85, 247, 0.1)",
    badgeFg: "rgb(147, 51, 234)",
    badgeBorder: "rgba(147, 51, 234, 0.2)",
    img: "/images/BYpQ1y5XTVDPD33hAxVPMdfZTI.png",
    width: 320,
    height: 532,
  },
  {
    title: "Done",
    count: 4,
    badgeBg: "rgba(34, 197, 94, 0.1)",
    badgeFg: "rgb(22, 163, 74)",
    badgeBorder: "rgba(22, 163, 74, 0.2)",
    img: "/images/UrlicJXzuSbpG6BN3u0pJU4YI.png",
    width: 320,
    height: 702,
  },
];

function CountBadge({ value, bg, fg, border }: { value: number; bg: string; fg: string; border: string }) {
  return (
    <span
      className="inline-flex items-center justify-center min-w-[22px] h-[20px] px-1.5 rounded-full text-[11px] font-medium leading-none"
      style={{ backgroundColor: bg, color: fg, border: `1px solid ${border}` }}
    >
      {value}
    </span>
  );
}

export function DashboardPreview() {
  return (
    <div
      className="mx-auto max-w-[1240px] overflow-hidden"
      style={{
        backgroundColor: "rgb(15, 15, 15)",
        borderRadius: 20,
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 0.82px 0.66px -0.42px, rgba(0, 0, 0, 0.2) 0px 2.11px 1.69px -0.83px, rgba(0, 0, 0, 0.2) 0px 4.23px 3.38px -1.25px, rgba(0, 0, 0, 0.2) 0px 8.01px 6.41px -1.67px, rgba(0, 0, 0, 0.2) 0px 15.92px 12.74px -2.08px, rgba(0, 0, 0, 0.2) 0px 35px 28px -2.5px",
      }}
    >
      <div className="grid grid-cols-[232px_1fr]">
        {/* ───────── Left sidebar ───────── */}
        <aside className="flex flex-col" style={{ borderRight: "1px solid rgb(23, 23, 23)" }}>
          {/* Logo bar */}
          <div className="flex items-center justify-between px-5 h-14" style={{ borderBottom: "1px solid rgb(23, 23, 23)" }}>
            <div className="flex items-center gap-2">
              <LogoMark className="size-5 text-white" />
            </div>
            <ChevronDown className="size-4 text-[rgb(82,82,82)] -rotate-90" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="relative">
              <div className="size-9 rounded-full overflow-hidden ring-2 ring-[rgb(15,15,15)]">
                <Image
                  src="/images/iv7PjsKGEZsM7FpoXAAz9n2lZ8E.png"
                  alt="Nancy Martino"
                  width={36}
                  height={36}
                  className="size-full object-cover"
                />
              </div>
              <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full bg-[rgb(34,197,94)] ring-2 ring-[rgb(15,15,15)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-medium text-[rgb(245,245,245)] truncate">Nancy Martino</div>
              <div className="text-[11px] text-[rgb(115,115,115)]">Designer</div>
            </div>
            <ChevronDown className="size-4 text-[rgb(82,82,82)] -rotate-90" />
          </div>

          <div className="mx-4 h-px bg-[rgb(23,23,23)]" />

          {/* Main nav */}
          <nav className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/4 cursor-pointer"
                >
                  <Icon className="size-4 text-[rgb(245,245,245)]" />
                  <span className="text-[13px] text-[rgb(245,245,245)] flex-1">{item.label}</span>
                  {item.count != null && (
                    <CountBadge
                      value={item.count}
                      bg="rgba(226, 107, 8, 0.1)"
                      fg="rgb(226, 107, 8)"
                      border="rgba(226, 107, 8, 0.18)"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mx-4 h-px bg-[rgb(23,23,23)]" />

          {/* Projects */}
          <div className="px-3 py-3">
            <div className="flex items-center justify-between px-3 mb-1.5">
              <span className="text-[13px] text-[rgb(115,115,115)]">Projects</span>
              <Plus className="size-4 text-[rgb(115,115,115)]" />
            </div>
            <div className="space-y-0.5">
              {projects.map((p) =>
                p.active ? (
                  <div
                    key={p.label}
                    className="relative flex items-center px-3 py-2 rounded-xl overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(72% 200% at 1.1% 50%, rgb(46,31,22) 0%, rgb(23,23,23) 100%)",
                      border: "1px solid transparent",
                      backgroundClip: "padding-box",
                    }}
                  >
                    {/* orange indicator bar on left */}
                    <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-sm bg-[rgb(255,98,7)]" />
                    {/* gradient border */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        padding: 1,
                        background:
                          "radial-gradient(69% 180% at 0% 46.5%, rgb(68,37,18) 0%, rgb(30,30,30) 100%)",
                        WebkitMask:
                          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                    <span className="text-[13px] text-[rgb(229,229,229)] relative">{p.label}</span>
                  </div>
                ) : (
                  <a
                    key={p.label}
                    className="block px-3 py-2 rounded-xl text-[13px] text-[rgb(229,229,229)] hover:bg-white/4 cursor-pointer"
                  >
                    {p.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </aside>

        {/* ───────── Middle / main ───────── */}
        <div className="flex flex-col min-w-0">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 h-14" style={{ borderBottom: "1px solid rgb(23, 23, 23)" }}>
            <div className="flex items-center gap-2 flex-1 max-w-[300px]">
              <Search className="size-4 text-[rgb(115,115,115)]" />
              <input
                placeholder="Search by task name"
                className="bg-transparent border-0 outline-0 text-[13px] text-[rgb(115,115,115)] placeholder:text-[rgb(115,115,115)] flex-1"
                readOnly
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="size-8 rounded-xl grid place-items-center" style={{ backgroundColor: "rgb(15,15,15)", border: "1px solid rgb(23,23,23)" }}>
                <HelpIcon className="size-4 text-[rgb(161,161,161)]" />
              </button>
              <button className="size-8 rounded-xl grid place-items-center" style={{ backgroundColor: "rgb(15,15,15)", border: "1px solid rgb(23,23,23)" }}>
                <BellIcon className="size-4 text-[rgb(161,161,161)]" />
              </button>
            </div>
          </div>

          {/* Project header */}
          <div className="px-6 pt-5 pb-4 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 text-[12px] mb-1">
                <span className="text-[rgb(82,82,82)]">Projects</span>
                <span className="text-[rgb(82,82,82)]">&gt;</span>
                <span className="text-[rgb(161,161,161)]">Product &amp; Engineering</span>
              </div>
              <h1 className="text-[24px] font-semibold tracking-tight text-[rgb(212,212,212)]">
                Product &amp; Engineering
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/Z30ZmG2J1O3PafkZ82QjX9j8.png"
                alt="Members"
                width={128}
                height={32}
                className="h-8 w-auto"
              />
              <button
                className="flex items-center gap-2 rounded-xl px-3 h-9 text-[13px] text-[rgb(161,161,161)]"
                style={{ backgroundColor: "rgb(15,15,15)", border: "1px solid rgb(23,23,23)" }}
              >
                <Plus className="size-3.5" /> Invite members
              </button>
            </div>
          </div>

          {/* Tabs + filters */}
          <div className="px-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-3 h-8 rounded-xl text-[13px] ${
                    i === 0 ? "text-[rgb(250,250,250)]" : "text-[rgb(161,161,161)] hover:text-white/85"
                  }`}
                  style={
                    i === 0
                      ? { backgroundColor: "rgb(23,23,23)", border: "1px solid rgb(33,33,33)" }
                      : undefined
                  }
                >
                  {tab}
                </button>
              ))}
              <ChevronDown className="size-3.5 text-[rgb(115,115,115)] ml-1" />
            </div>
            <div className="flex items-center gap-1">
              {[
                { label: "Filter", icon: FilterIcon },
                { label: "Sort", icon: SortIcon },
                { label: "Group by", icon: GroupIcon },
              ].map(({ label, icon: I }) => (
                <button
                  key={label}
                  className="flex items-center gap-1.5 px-2.5 h-8 rounded-lg text-[13px] text-[rgb(161,161,161)] hover:bg-white/4"
                >
                  <I className="size-3.5" /> {label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-[rgb(23,23,23)]" />

          {/* Kanban columns */}
          <div className="grid grid-cols-4 gap-4 px-6 pt-5 pb-2" style={{ backgroundColor: "rgb(13, 13, 13)" }}>
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col min-w-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-[rgb(115,115,115)]">{col.title}</span>
                    <CountBadge value={col.count} bg={col.badgeBg} fg={col.badgeFg} border={col.badgeBorder} />
                  </div>
                  <ChevronDown className="size-3.5 text-[rgb(161,161,161)] -rotate-90" />
                </div>
                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: `${col.width} / ${col.height}`,
                    maxHeight: 480,
                    WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
                  }}
                >
                  <Image
                    src={col.img}
                    alt={col.title}
                    fill
                    sizes="(max-width: 1240px) 25vw, 280px"
                    className="object-contain object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
