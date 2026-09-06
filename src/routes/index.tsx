{
        name: "description",
        content:
          "HOUSTON: telemetria ao vivo, manifesto e plano de voo da missão na Solana. Mesma comunidade, mesmo apoio — pouso na RobinFun em breve.",
      },
      { property: "og:title", content: "HOUSTON — Solana / RobinFun" },
      {
        property: "og:description",
        content:
          "Telemetria ao vivo, manifesto e plano de voo da missão HOUSTON na Solana. Pouso na RobinFun em breve.",
      },
    ],
  }),
  component: Index,
});

type Lang = "pt" | "en";

const CA = "ExrPSgaWtDDvFdHicFCJTDLiqiahpxea46QDWc4Efomo";
const DEXSCREENER_URL = `https://dexscreener.com/solana/${CA}`;
const SOLSCAN_URL = `https://solscan.io/token/${CA}`;
const JUPITER_BUY_URL = `https://jup.ag/swap/SOL-${CA}`;
const TELEGRAM_URL = "https://t.me/HoustonFomo";
const X_URL = "https://x.com/dmmarx1307/status/2067378732742988261";

const T = {
  pt: {
    nav: ["Telemetria", "Manifesto", "Missão", "Comunidade"],
    live: "AO VIVO NA SOLANA",
    heroTitleA: "HOUSTON",
    heroTitleB: "TEMOS UMA MISSÃO",
    heroSub:
      "A mesma comunidade, o mesmo apoio — agora em órbita na Solana. Contrato renunciado, liquidez travada e um único destino: a RobinFun.",
    ctaBuy: "Comprar na Solana",
    ctaManifest: "Ler o manifesto",
    caLabel: "CA — clique para copiar",
    caSoon: "CA ROBINFUN — EM BREVE",
    netSol: "SOLANA",
    netRob: "ROBINFUN",
    telemetryIdx: "/// 001 — TELEMETRIA",
    telemetryTitle: "DADOS DE VOO",
    statsLabels: ["PREÇO", "CAP. DE MERCADO", "LIQUIDEZ", "VARIAÇÃO 24H"] as const,
    soonTag: "POUSO EM BREVE",
    soonText:
      "O contrato da RobinFun será totalmente novo e independente do contrato da Solana — mesma comunidade, mesmo apoio, mas sem vínculo técnico entre os dois tokens. Assim que for implantado, o CA e a telemetria ao vivo aparecem aqui. Desconfie de qualquer CA \"RobinFun\" divulgado antes da confirmação oficial.",
    manifestIdx: "/// 002 — MANIFESTO",
    manifestTitle: "O MANIFESTO",
    manifestRows: [
      ["REDE", "Solana"],
      ["CONTRATO (CA)", CA],
      ["SUPRIMENTO TOTAL", "1.000.000.000 HOUSTON"],
      ["TAXA", "0% compra / 0% venda"],
      ["CONTRATO RENUNCIADO", "Sim"],
      ["LIQUIDEZ", "Travada permanentemente"],
      ["DISTRIBUIÇÃO", "100% comunidade — sem alocação de equipe"],
    ],
    manifestNote:
      "Sem promessas vazias. Sem chaves mestras. A missão pertence a quem segura o sinal — e o sinal pertence a todos.",
    flightIdx: "/// 003 — PLANO DE VOO",
    flightTitle: "A MISSÃO",
    steps: [
      ["FASE 01 — LANÇAMENTO", "Ignição", "Lançamento justo na Solana, liquidez travada e contrato renunciado no primeiro dia.", true],
      ["FASE 02 — ÓRBITA", "Estabilização", "Listagens em agregadores, telemetria pública e crescimento orgânico da tripulação.", true],
      ["FASE 03 — POUSO", "RobinFun", "Migração oficial para a RobinFun com a mesma comunidade e o mesmo apoio de sempre.", false],
      ["FASE 04 — ALÉM", "O desconhecido", "O que vem depois do pouso não consta em nenhum registro. Ainda.", false],
    ] as const,
    groundIdx: "/// 004 — CONTROLE DE SOLO",
    groundTitle: "JUNTE-SE À TRIPULAÇÃO",
    groundText:
      "O sinal é aberto e todos ouvem a mesma frequência. Entre para a comunidade e acompanhe a contagem regressiva.",
    social: ["X / Twitter", "Telegram", "Dexscreener"],
    footer: "HOUSTON — Fim da transmissão.",
    footerDisclaimer:
      "Criptomoedas são voláteis. Nada aqui é conselho financeiro. Faça sua própria pesquisa antes de embarcar.",
    sameBanner: "Mesma comunidade, mesmo apoio — a missão continua na RobinFun.",
  },
  en: {
    nav: ["Telemetry", "Manifesto", "Mission", "Community"],
    live: "LIVE ON SOLANA",
    heroTitleA: "HOUSTON",
    heroTitleB: "WE HAVE A MISSION",
    heroSub:
      "Same community, same support — now in orbit on Solana. Contract renounced, liquidity locked, and a single destination: RobinFun.",
    ctaBuy: "Buy on Solana",
    ctaManifest: "Read the manifesto",
    caLabel: "CA — click to copy",
    caSoon: "ROBINFUN CA — COMING SOON",
    netSol: "SOLANA",
    netRob: "ROBINFUN",
    telemetryIdx: "/// 001 — TELEMETRY",
    telemetryTitle: "FLIGHT DATA",
    statsLabels: ["PRICE", "MARKET CAP", "LIQUIDITY", "24H CHANGE"] as const,
    soonTag: "LANDING SOON",
    soonText:
      "The RobinFun contract will be entirely new and independent from the Solana contract — same community, same support, but no technical link between the two tokens. Once deployed, the CA and live telemetry appear here. Be wary of any \"RobinFun\" CA shared before official confirmation.",
    manifestIdx: "/// 002 — MANIFESTO",
    manifestTitle: "THE MANIFESTO",
    manifestRows: [
      ["NETWORK", "Solana"],
      ["CONTRACT (CA)", CA],
      ["TOTAL SUPPLY", "1,000,000,000 HOUSTON"],
      ["TAX", "0% buy / 0% sell"],
      ["CONTRACT RENOUNCED", "Yes"],
      ["LIQUIDITY", "Permanently locked"],
      ["DISTRIBUTION", "100% community — no team allocation"],
    ],
    manifestNote:
      "No empty promises. No master keys. The mission belongs to those who hold the signal — and the signal belongs to everyone.",
    flightIdx: "/// 003 — FLIGHT PLAN",
    flightTitle: "THE MISSION",
    steps: [
      ["PHASE 01 — LAUNCH", "Ignition", "Fair launch on Solana, liquidity locked and contract renounced on day one.", true],
      ["PHASE 02 — ORBIT", "Stabilization", "Aggregator listings, public telemetry and organic crew growth.", true],
      ["PHASE 03 — LANDING", "RobinFun", "Official migration to RobinFun with the same community and the same support as always.", false],
      ["PHASE 04 — BEYOND", "The unknown", "What comes after the landing is on no record. Yet.", false],
    ] as const,
    groundIdx: "/// 004 — GROUND CONTROL",
    groundTitle: "JOIN THE CREW",
    groundText:
      "The signal is open and everyone hears the same frequency. Join the community and follow the countdown.",
    social: ["X / Twitter", "Telegram", "Dexscreener"],
    footer: "HOUSTON — End of transmission.",
    footerDisclaimer:
      "Cryptocurrencies are volatile. Nothing here is financial advice. Do your own research before boarding.",
    sameBanner: "Same community, same support — the mission continues on RobinFun.",
  },
} as const;

function Ticker({ items }: { items: readonly string[] }) {
  const seq = Array.from({ length: 4 }, () => items).flat();
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden whitespace-nowrap border-b border-border bg-secondary py-2"
    >
      <div className="inline-flex w-max animate-marquee gap-12">
        {[...seq, ...seq].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-mono2 text-[11px] tracking-[0.08em] text-brass"
          >
            <span className="text-primary">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function formatCompact(n: number | undefined | null): string {
  if (n === undefined || n === null || Number.isNaN(n)) return "—";
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + (n / 1e3).toFixed(1) + "K";
  return "$" + n.toFixed(0);
}

function useLiveSolanaStats(ca: string) {
  const [stats, setStats] = useState<{
    price: string;
    mcap: string;
    liquidity: string;
    change24h: string;
    changeDir: "up" | "down" | "";
  }>({ price: "—", mcap: "—", liquidity: "—", change24h: "—", changeDir: "" });

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${ca}`);
        const data = await res.json();
        const pair = data?.pairs?.[0];
        if (!pair || cancelled) return;
        const change = pair.priceChange?.h24;
        setStats({
          price: pair.priceUsd ? "$" + Number(pair.priceUsd).toPrecision(4) : "—",
          mcap: formatCompact(pair.fdv ?? pair.marketCap),
          liquidity: formatCompact(pair.liquidity?.usd),
          change24h:
            change !== undefined && change !== null
              ? (change >= 0 ? "+" : "") + Number(change).toFixed(2) + "%"
              : "—",
          changeDir: change === undefined || change === null ? "" : change >= 0 ? "up" : "down",
        });
      } catch {
        /* keep previous/placeholder values on failure */
      }
    }

    fetchStats();
    const id = setInterval(fetchStats, 30000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [ca]);

  return stats;
}

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const [net, setNet] = useState<"sol" | "rob">("sol");
  const [copied, setCopied] = useState(false);
  const liveStats = useLiveSolanaStats(CA);
  const t = T[lang];

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <main className="min-h-screen bg-background text-lg text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 bg-gradient-to-b from-background/95 to-transparent px-7 py-5">
        <a href="#" className="font-display text-2xl font-extrabold tracking-wide">
          HOUSTON<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-7 text-base text-muted-foreground md:flex">
            {t.nav.map((label, i) => (
              <a
                key={label}
                href={["#telemetria", "#manifesto", "#missao", "#comunidade"][i]}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex overflow-hidden rounded-sm border border-border">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 font-mono2 text-xs tracking-wider transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="fixed inset-x-0 top-[68px] z-40">
        <Ticker
          items={[t.live, t.sameBanner, "ROBINFUN — " + t.soonTag, "CONTRATO RENUNCIADO · LIQUIDEZ TRAVADA"]}
        />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-40 text-center">
        <div className="absolute inset-0">
          <img
            src={heroAstronaut}
            alt="Astronauta de traje laranja flutuando por um corredor geométrico de estação espacial em tons sépia"
            width={1536}
            height={768}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.155_0.006_60/15%)_0%,oklch(0.155_0.006_60/55%)_55%,oklch(0.155_0.006_60/96%)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-0.5 animate-scan bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-sm border border-primary/50 px-4 py-1.5 font-mono2 text-xs tracking-[0.08em] text-primary">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" />
            {t.live}
          </span>

          <h1 className="font-display text-[clamp(56px,13vw,128px)] font-extrabold leading-[0.95] tracking-wide text-foreground">
            {t.heroTitleA}
            <br />
            <span className="text-primary">{t.heroTitleB}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {t.heroSub}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={JUPITER_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-primary bg-primary px-8 py-3.5 font-mono2 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              {t.ctaBuy}
            </a>
            <a
              href="#manifesto"
              className="rounded-sm border border-foreground px-8 py-3.5 font-mono2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
            >
              {t.ctaManifest}
            </a>
          </div>

          <button
            onClick={copyCA}
            className="mt-9 inline-flex max-w-full items-center gap-2.5 rounded-sm border border-border bg-secondary px-4 py-2.5 font-mono2 text-[13px] text-muted-foreground transition-colors hover:border-brass hover:text-foreground"
          >
            <span className="break-all">{CA}</span>
            {copied ? (
              <Check className="size-4 shrink-0 text-launch" />
            ) : (
              <Copy className="size-4 shrink-0" />
            )}
          </button>

          <span className="mt-5 inline-flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-sm border border-dashed border-brass bg-brass/10 px-4 py-2.5 font-mono2 text-xs leading-relaxed text-muted-foreground">
            <strong className="text-brass">✦</strong> {t.sameBanner}
          </span>
        </div>
      </section>

      {/* TELEMETRIA */}
      <section id="telemetria" className="border-t border-border px-7 py-20 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-[clamp(34px,6vw,52px)] font-extrabold leading-none tracking-wide">
              {t.telemetryTitle}
            </h2>
            <span className="font-mono2 text-sm text-muted-foreground">{t.telemetryIdx}</span>
          </div>

          <div className="mb-9 inline-flex overflow-hidden rounded-sm border border-border">
            {(["sol", "rob"] as const).map((n, i) => (
              <button
                key={n}
                onClick={() => setNet(n)}
                className={`px-6 py-2.5 font-mono2 text-[13px] tracking-wider transition-colors ${
                  i === 0 ? "border-r border-border" : ""
                } ${
                  net === n
                    ? "bg-primary text-primary-foreground shadow-[0_0_18px_oklch(0.53_0.18_30/50%)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n === "sol" ? t.netSol : t.netRob}
              </button>
            ))}
          </div>

          {net === "sol" ? (
            <>
              <div className="mb-6 grid grid-cols-2 border border-border bg-secondary md:grid-cols-4">
                {[
                  { label: t.statsLabels[0], value: liveStats.price, dir: "" as "up" | "down" | "" },
                  { label: t.statsLabels[1], value: liveStats.mcap, dir: "" as "up" | "down" | "" },
                  { label: t.statsLabels[2], value: liveStats.liquidity, dir: "" as "up" | "down" | "" },
                  { label: t.statsLabels[3], value: liveStats.change24h, dir: liveStats.changeDir },
                ].map(({ label, value, dir }, i) => (
                  <div
                    key={label}
                    className={`p-5 transition-colors hover:bg-primary/10 ${
                      i % 4 !== 3 ? "md:border-r md:border-border" : ""
                    } ${i % 2 === 0 ? "border-r border-border md:border-r" : ""} ${
                      i < 2 ? "border-b border-border md:border-b-0" : ""
                    }`}
                  >
                    <p className="mb-2 font-mono2 text-[11px] tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p
                      className={`font-display text-2xl font-extrabold ${
                        dir === "up" ? "text-launch" : dir === "down" ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="h-[520px] animate-glow-pulse border border-border bg-secondary md:h-[620px]">
                <iframe
                  src={`${DEXSCREENER_URL}?embed=1&theme=dark&trades=1&info=0`}
                  title="HOUSTON — gráfico e transações ao vivo (Solana)"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
            </>
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 border border-dashed border-border bg-secondary px-6 py-12 text-center">
              <img
                src={questionBadge}
                alt="Selo octogonal envelhecido com um ponto de interrogação vermelho"
                width={768}
                height={768}
                loading="lazy"
                className="w-24 animate-float-slow"
              />
              <span className="rounded-sm border border-brass px-3 py-1.5 font-mono2 text-xs tracking-[0.1em] text-brass">
                {t.soonTag}
              </span>
              <p className="max-w-md text-muted-foreground">{t.soonText}</p>
            </div>
          )}
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="border-t border-border px-7 py-20">
        <div className="mx-auto max-w-[920px]">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-[clamp(34px,6vw,52px)] font-extrabold leading-none tracking-wide">
              {t.manifestTitle}
            </h2>
            <span className="font-mono2 text-sm text-muted-foreground">{t.manifestIdx}</span>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-[1.1fr_1fr]">
            <div className="border-t border-border">
              {t.manifestRows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-4 border-b border-border py-4 transition-all hover:bg-primary/5 hover:pl-2"
                >
                  <span className="whitespace-nowrap text-muted-foreground">{k}</span>
                  {v === CA ? (
                    <a
                      href={SOLSCAN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-right font-mono2 text-sm break-all text-primary hover:underline"
                    >
                      {v}
                    </a>
                  ) : (
                    <span className="text-right font-mono2 text-sm break-all">{v}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-8 md:items-start">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">HOUSTON</strong> — {t.manifestNote}
              </p>
              <img
                src={questionBadge}
                alt="Selo octogonal envelhecido com um ponto de interrogação vermelho"
                width={768}
                height={768}
                loading="lazy"
                className="w-40 animate-float-slow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PLANO DE VOO */}
      <section id="missao" className="border-t border-border px-7 py-20">
        <div className="mx-auto max-w-[920px]">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-[clamp(34px,6vw,52px)] font-extrabold leading-none tracking-wide">
              {t.flightTitle}
            </h2>
            <span className="font-mono2 text-sm text-muted-foreground">{t.flightIdx}</span>
          </div>

          <div className="relative pl-8 before:absolute before:bottom-1.5 before:left-[5px] before:top-1.5 before:w-px before:bg-border">
            {t.steps.map(([tag, title, text, done]) => (
              <div
                key={tag}
                className="group relative pb-11 transition-transform last:pb-0 hover:translate-x-1 before:absolute before:-left-8 before:top-1 before:size-[11px] before:rounded-full before:border-2 before:border-primary before:transition-shadow hover:before:shadow-[0_0_12px_oklch(0.53_0.18_30/60%)]"
                style={{
                  // completed steps get a filled node
                }}
                data-done={done}
              >
                <span
                  className={`absolute -left-8 top-1 size-[11px] rounded-full border-2 border-primary ${
                    done ? "bg-primary" : "bg-background"
                  }`}
                />
                <span className="mb-2 block font-mono2 text-[11px] tracking-[0.06em] text-brass">
                  {tag}
                </span>
                <h3 className="mb-1.5 font-display text-2xl font-extrabold tracking-wide transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="max-w-xl text-base text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section id="comunidade" className="border-t border-border px-7 py-24 text-center">
        <span className="mb-4 block font-mono2 text-sm text-muted-foreground">{t.groundIdx}</span>
        <h2 className="mb-4 font-display text-[clamp(34px,7vw,56px)] font-extrabold leading-none tracking-wide">
          {t.groundTitle}
        </h2>
        <p className="mx-auto mb-9 max-w-md text-muted-foreground">{t.groundText}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {t.social.map((s) => {
            const href =
              s.toLowerCase().includes("telegram")
                ? TELEGRAM_URL
                : s.toLowerCase().includes("x") || s.toLowerCase().includes("twitter")
                  ? X_URL
                  : DEXSCREENER_URL;
            return (
              <a
                key={s}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-foreground px-7 py-3 font-mono2 text-sm transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
              >
                {s}
              </a>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-7 pb-10 pt-8 text-center font-mono2 text-xs text-muted-foreground">
        <p className="mx-auto mb-2 max-w-xl">{t.footerDisclaimer}</p>
        <p>
          HOUSTON<span className="text-primary">.</span> — {t.footer}
        </p>
      </footer>
    </main>
  );
}
