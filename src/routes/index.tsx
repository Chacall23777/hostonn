import { createFileRoute } from "@tanstack/react-router";
import heroAstronaut from "../assets/hero-astronaut.jpg";
import questionBadge from "../assets/question-badge.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ODISSEIA — Uma jornada ao desconhecido" },
      {
        name: "description",
        content:
          "Uma experiência imersiva retrô-futurista: atravesse o corredor, decifre os enigmas e descubra o que espera no fim do túnel.",
      },
      { property: "og:title", content: "ODISSEIA — Uma jornada ao desconhecido" },
      {
        property: "og:description",
        content:
          "Uma experiência imersiva retrô-futurista: atravesse o corredor, decifre os enigmas e descubra o que espera no fim do túnel.",
      },
    ],
  }),
  component: Index,
});

const ENIGMAS = [
  {
    numero: "01",
    titulo: "O Sinal",
    texto:
      "Uma transmissão repete a mesma sequência há 40 anos. Ninguém sabe de onde ela vem — ou o que acontece quando ela parar.",
  },
  {
    numero: "02",
    titulo: "O Corredor",
    texto:
      "As plantas da estação mostram 11 seções. Quem atravessa conta 12. A última porta não consta em nenhum registro.",
  },
  {
    numero: "03",
    titulo: "O Tripulante",
    texto:
      "O diário de bordo termina no meio de uma frase. O traje foi encontrado flutuando, intacto, com o visor voltado para dentro.",
  },
];

function Marquee() {
  const faixa = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-border bg-secondary py-3"
    >
      <div className="flex w-max animate-marquee gap-8">
        {[...faixa, ...faixa].map((i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-[0.4em] text-muted-foreground"
          >
            ? ? ? ? ? ? ?
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12">
        <span className="font-display text-2xl tracking-[0.3em]">
          ODISSEIA<span className="text-primary">?</span>
        </span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#missao" className="transition-colors hover:text-primary">
            A Missão
          </a>
          <a href="#enigmas" className="transition-colors hover:text-primary">
            Enigmas
          </a>
          <a href="#transmissao" className="transition-colors hover:text-primary">
            Transmissão
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grain-overlay relative">
          <img
            src={heroAstronaut}
            alt="Astronauta de traje laranja flutuando por um corredor geométrico de estação espacial em tons sépia"
            width={1536}
            height={768}
            className="h-[70vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-12 md:pb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            /// Transmissão interceptada — 1968
          </p>
          <h1 className="font-display text-6xl leading-[0.9] tracking-wide md:text-9xl">
            O QUE ESPERA
            <br />
            NO FIM <span className="text-outline">DO TÚNEL</span>
            <span className="text-primary">?</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Uma tripulação. Um corredor que não termina. Doze portas seladas com
            o mesmo símbolo. A resposta está lá dentro — a pergunta é se você
            atravessa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enigmas"
              className="border border-primary bg-primary px-8 py-3 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Iniciar descida
            </a>
            <a
              href="#missao"
              className="border border-border px-8 py-3 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ler o relatório
            </a>
          </div>
        </div>
      </section>

      <Marquee />

      {/* MISSÃO */}
      <section id="missao" className="px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
              /// Arquivo 001 — A Missão
            </p>
            <h2 className="font-display text-5xl leading-[0.9] tracking-wide md:text-7xl">
              NINGUÉM VOLTOU
              <br />
              PARA CONTAR<span className="text-primary">.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Em órbita silenciosa, a estação aguarda. Cada instrumento funciona.
              Cada luz permanece acesa. Mas não há resposta no rádio — apenas um
              sinal que se repete, medido, paciente, como uma pergunta feita ao
              vazio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Esta página é o que restou do relatório. O resto foi classificado,
              queimado, ou nunca foi escrito. Depende de em quem você acredita.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={questionBadge}
              alt="Selo octogonal envelhecido com um ponto de interrogação vermelho"
              width={768}
              height={768}
              loading="lazy"
              className="w-56 animate-float-slow md:w-80"
            />
          </div>
        </div>
      </section>

      {/* ENIGMAS */}
      <section id="enigmas" className="border-t border-border px-6 py-20 md:px-12 md:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
          /// Arquivo 002 — Registros
        </p>
        <h2 className="mb-12 font-display text-5xl leading-[0.9] tracking-wide md:text-7xl">
          TRÊS ENIGMAS<span className="text-primary">?</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {ENIGMAS.map((e) => (
            <article
              key={e.numero}
              className="group border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-primary">
                  {e.numero}
                </span>
                <span className="font-display text-3xl text-muted-foreground transition-colors group-hover:text-primary">
                  ?
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-wide">
                {e.titulo}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {e.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Marquee />

      {/* TRANSMISSÃO */}
      <section
        id="transmissao"
        className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center md:px-12"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
          /// Canal aberto
        </p>
        <h2 className="font-display text-5xl leading-[0.9] tracking-wide md:text-8xl">
          VOCÊ OUVIU O SINAL
          <span className="animate-blink text-primary">_</span>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          A porta final ainda está selada. Quando a sequência mudar, os que
          estiverem ouvindo serão os primeiros a saber.
        </p>
        <a
          href="#"
          className="mt-10 border border-primary bg-primary px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
        >
          Aguardar transmissão
        </a>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:justify-between md:px-12">
        <span className="font-display text-lg tracking-[0.3em] text-foreground">
          ODISSEIA<span className="text-primary">?</span>
        </span>
        <span>Fim da transmissão — 1968 / 2026</span>
        <span>Nenhuma resposta foi encontrada</span>
      </footer>
    </main>
  );
}
