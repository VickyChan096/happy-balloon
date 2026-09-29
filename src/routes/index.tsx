import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/balloon-hero.png";
import dogImage from "@/assets/balloon-dog.png";
import flowerImage from "@/assets/balloon-flower.png";
import dinoImage from "@/assets/balloon-dino.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "造型氣球研究所｜把快樂吹成各種模樣" },
      { name: "description", content: "認識造型氣球的繽紛世界，從可愛氣球狗、微笑花朵到小恐龍，讓每個平凡日子都多一點驚喜。" },
      { property: "og:title", content: "造型氣球研究所｜把快樂吹成各種模樣" },
      { property: "og:description", content: "用一顆氣球，變出一整個想像世界。一起認識可愛又繽紛的造型氣球。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const characters = [
  { number: "01", en: "BALLOON DOG", name: "蹦蹦氣球狗", desc: "搖搖尾巴，快樂跟著走。", image: dogImage, color: "blue", alt: "藍色造型氣球狗" },
  { number: "02", en: "SMILE FLOWER", name: "微笑氣球花", desc: "送你一朵，今天就開心。", image: flowerImage, color: "pink", alt: "紅色花瓣與黃色笑臉的造型氣球花" },
  { number: "03", en: "LITTLE DINO", name: "好奇小恐龍", desc: "大大的冒險，小小的可愛。", image: dinoImage, color: "green", alt: "綠色造型氣球恐龍" },
];

function Ticker({ green = false }: { green?: boolean }) {
  const text = green ? "MAKE EVERY DAY POP! ✳ " : "HAVE A NICE BALLOON! ✳ ";
  return <div className={`ticker ${green ? "green-ticker" : ""}`} aria-hidden="true"><div className="ticker-track"><span>{text.repeat(8)}</span><span>{text.repeat(8)}</span></div></div>;
}

function Index() {
  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="造型氣球研究所，回到頂部"><span>POP! LAB</span></a>
        <div className="header-spacer" />
        <a className="header-play" href="#concept" aria-label="探索造型氣球">▶</a>
        <nav className="header-nav" aria-label="主選單">
          <a href="#top"><span className="nav-triangle">▶</span> TOP</a>
          <a href="#concept"><span className="nav-triangle">▶</span> CONCEPT</a>
          <a href="#friends"><span className="nav-triangle">▶</span> FRIENDS</a>
          <a href="#story"><span className="nav-triangle">▶</span> STORY</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="開啟選單"><Menu size={22} /></summary>
          <nav aria-label="手機選單">
            <a href="#top">▶ TOP</a>
            <a href="#concept">▶ CONCEPT</a>
            <a href="#friends">▶ FRIENDS</a>
            <a href="#story">▶ STORY</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-topline">✣ POP! LAB <small>THE BALLOON PLAYGROUND</small></div>
          <div className="hero-cta"><Button asChild className="pill-button"><a href="#friends">認識氣球朋友 <ArrowUpRight size={15} /></a></Button></div>
          <div className="hero-eyebrow">POP, POP, POP!</div>
          <h1 className="hero-title" id="hero-title"><span className="blue">HAVE A</span>{" "}<span className="red">NICE</span>{" "}<span className="green">BALLOON!</span></h1>
          <p className="hero-title-zh">把快樂，吹成各種模樣。</p>
          <img className="hero-image" src={heroImage} alt="藍色氣球狗、紅色笑臉花與綠色氣球恐龍" width={1536} height={1024} fetchPriority="high" />
          <span className="hero-side">想像力，現在開始膨脹！</span>
          <span className="hero-stamp">100%<br />FUN!<small>吹出好心情</small></span>
          <span className="hero-bottom">SCROLL TO EXPLORE ↓</span>
        </section>

        <Ticker />

        <section className="intro" id="concept" aria-labelledby="concept-title">
          <svg className="intro-ribbons" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
            <path className="ribbon-path ribbon-blue" pathLength="1" d="M -210 635 C -150 360 -95 93 176 73 C 327 62 411 150 439 294" />
            <path className="ribbon-path ribbon-red" pathLength="1" d="M 777 -154 C 957 -10 1029 163 955 337 C 888 496 899 601 1050 752" />
            <path className="ribbon-path ribbon-green" pathLength="1" d="M 1610 80 C 1396 149 1202 273 1192 458 C 1180 630 1352 772 1525 885" />
          </svg>
          <div className="intro-content">
            <span className="section-kicker">HELLO, IMAGINATION!</span>
            <h2 className="intro-title" id="concept-title">LIFE IS<br /><span>MORE FUN</span><br />WITH BALLOONS.</h2>
            <p className="intro-copy">一扭、一轉、一點點想像，<br />平凡的氣球就有了自己的故事。</p>
            <p className="intro-small">牠可以是陪你散步的小狗、永遠盛開的花，<br />也可以是一隻愛冒險的恐龍。<br />造型氣球，把每個瞬間都變成值得微笑的回憶。</p>
          </div>
        </section>

        <Ticker green />

        <section className="collection" id="friends" aria-labelledby="friends-title">
          <div className="section-heading"><div><span className="section-kicker">MEET THE FRIENDS</span><h2 className="section-title" id="friends-title">氣球朋友們，<br />集合！</h2></div><p className="section-description">每個造型都有自己的個性。<br />你最想帶哪一位回家？</p></div>
          <div className="characters">{characters.map((item) => <article className={`character ${item.color}`} key={item.number}><span className="character-number">NO. {item.number}</span><span className="en">{item.en}</span><div className="character-image-wrap"><img className="character-image" src={item.image} alt={item.alt} width={816} height={816} loading="lazy" /></div><h3>{item.name}</h3><p>{item.desc}</p></article>)}</div>
        </section>

        <section className="story" id="story" aria-labelledby="story-title"><div className="story-inner"><div><span className="section-kicker">A LITTLE MAGIC</span><h2 className="section-title" id="story-title">從一顆氣球，<br />到一個驚喜。</h2><p>造型氣球最迷人的地方，是它總能讓人猜不到下一秒會變成什麼。每一次轉折，都是一點創意；每一個完成的造型，都是一份專屬的快樂。</p><p>派對、節日，或只是普通的一天，都值得為自己吹出一點不一樣。</p></div><div className="story-visual"><img src={flowerImage} alt="笑臉氣球花造型" width={816} height={816} loading="lazy" /><span className="story-caption">SMILE, IT'S BALLOON TIME!</span></div></div></section>

        <section className="closing" aria-labelledby="closing-title"><span className="section-kicker">KEEP PLAYING</span><h2 className="section-title" id="closing-title">今天，想變出什麼？</h2><p>讓想像力自由膨脹，<br />下一個微笑的主角，就是你。</p><Button asChild className="round-button" aria-label="回到頂部"><a href="#top"><ArrowDown className="rotate-180" size={22} /></a></Button></section>
      </main>
      <footer className="site-footer"><div className="footer-logo">POP! LAB<small>造型氣球研究所</small></div><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}