"use client"

import { HexagonCard } from "./hexagon-card"


const cards = [
  { title: "Insert card title here", articles: 12, image: "/abstract-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/marble-sculpture.png" },
  { title: "Insert card title here", articles: 12, image: "/stone-art.jpg", badge: "Open Call" },
  { title: "Insert card title here", articles: 12, image: "/classical-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/ancient-statue.jpg" },
  { title: "Insert card title here", articles: 12, image: "/marble-sculpture.png" },
  { title: "Insert card title here", articles: 12, image: "/greek-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/roman-art.jpg" },
  { title: "Insert card title here", articles: 12, image: "/renaissance-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/baroque-art.jpg" },
  { title: "Insert card title here", articles: 12, image: "/neoclassical-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/modern-sculpture.jpg", badge: "Event" },
  { title: "Insert card title here", articles: 12, image: "/contemporary-art-abstract.png" },
  { title: "Insert card title here", articles: 12, image: "/abstract-sculpture.jpg" },
  { title: "Insert card title here", articles: 12, image: "/marble-sculpture.png" },
  { title: "Insert card title here", articles: 12, image: "/stone-art.jpg" },
]

export function HexagonalGrid() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
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
        {/* <div className="h-80 bg-gradient-to-b from-neutral-900/0 via-neutral-900/0 to-neutral-900 backdrop-blur-2xl absolute bottom-0 left-0 w-full opacity-50" /> */}
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
