
"use client"

import { HexagonCard } from "./hexagon-card"

const cards = [
  { title: "Insert card title here", articles: 12, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 12, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 0, image: "/ancient-statue.jpg" },
]

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Gradient overlay - positioned absolutely */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/50 to-transparent z-5"></div>
      
      {/* Content - positioned absolutely */}
      <div className="absolute top-32 left-8 md:left-16 lg:left-24 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
          <span className="text-white">Trace</span>{" "}
          <span className="font-semibold text-[#A3A3A3]">The Living Archive</span>
        </h1>
        <p className="text-base md:text-lg text-white leading-relaxed mb-8 max-w-2xl">
        We practice knowledge like tending the land: digging, planting, waiting. Culture lives and breathes with us, passed down like stories. Art is an architecture of the senses, built on feeling and instinct. From this rhythm, Trace of the Tide emerges — a community of creation, knowledge, and transformation. A living current between art and thought, culture and creation, the human and more-than-human..
        </p>
        <button className="bg-[#C9A961] text-black hover:bg-[#B89851] font-medium px-6 py-2 rounded-md transition-colors">Call to Action</button>
      </div>

      <div className="container mx-auto max-w-[1400px]">
        <div className="hexagon-grid">
          {cards.map((card, index) => {
            const row = Math.floor(index / 4)
            const col = index % 4
            const isOddRow = row % 2 === 1

            return (
              <div
                key={index}
                className="hexagon-item"
                style={{
                  gridRow: row + 1,
                  gridColumn: col + 1,
                  transform: isOddRow ? "translateX(50%)" : "translateX(0)",
                }}
              >
                <HexagonCard {...card} />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .hexagon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }

        .hexagon-item {
          position: relative;
          margin-bottom: -20%;
          padding: 0 0.5%;
        }

        @media (max-width: 1024px) {
          .hexagon-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .hexagon-item {
            margin-bottom: -18%;
          }
        }

        @media (max-width: 768px) {
          .hexagon-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .hexagon-item {
            transform: none !important;
            margin-bottom: 0;
            padding: 0;
          }
        }

        @media (max-width: 640px) {
          .hexagon-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
