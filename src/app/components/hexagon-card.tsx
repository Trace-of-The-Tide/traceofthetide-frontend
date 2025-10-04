"use client"

import Image from "next/image"

interface HexagonCardProps {
  title: string
  articles: number
  image: string
  badge?: string
}

export function HexagonCard({ title, articles, image, badge }: HexagonCardProps) {
  return (
    <div className="hexagon-card-wrapper">
      {/* Background SVG Card */}
      <div className="hexagon-content m-auto text-center flex flex-col items-center justify-center mb-8">
        <h3 className="text-white text-lg font-medium mb-2 text-balance">{title}</h3>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">{badge}</span>
          )}
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
            {articles} articles
          </span>
        </div>
      </div>
      <div className="hexagon-svg-container">
        <Image src="/Card.svg" alt="Hexagon card background" className="hexagon-background" width={328} height={397} />
        
        {/* Image overlay */}
        <div className="hexagon-image-overlay">
          <Image
            src={image || "/ancient-statue.jpg"}
            alt=""
            width={328}
            height={397}
            className="hexagon-image grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Content overlay */}

      <style jsx>{`
        .hexagon-card-wrapper {
          position: relative;
          width: 100%;
          cursor: pointer;
        }

        .hexagon-card-wrapper:hover .hexagon-image {
          filter: grayscale(0);
        }

        .hexagon-svg-container {
          position: relative;
          width: 100%;
          height: auto;
        }

        .hexagon-background {
          width: 100%;
          height: auto;
          display: block;
        }

        .hexagon-image-overlay {
          position: absolute;
          top: 20px;
          left: 17px;
          width: 328px;
          height: 397px;
          overflow: hidden;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          transition: filter 0.5s ease;
        }

        .hexagon-content {
          position: absolute;
          bottom: 8%;
          left: 10%;
          right: 10%;
          z-index: 10;
          pointer-events: none;
        }

        .hexagon-content h3 {
          font-size: 1.125rem;
          line-height: 1.4;
        }

        .hexagon-content span {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
        }

        /* Large screens (1200px+) */
        @media (min-width: 1200px) {
          .hexagon-image-overlay {
            top: 20px;
            left: 17px;
            width: 328px;
            height: 397px;
          }
          
          .hexagon-content h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
          
          .hexagon-content span {
            font-size: 0.875rem;
            padding: 0.375rem 1rem;
          }
        }

        /* Medium screens (768px - 1199px) */
        @media (max-width: 1199px) and (min-width: 768px) {
          .hexagon-image-overlay {
            top: 15px;
            left: 12px;
            width: 280px;
            height: 340px;
          }
          
          .hexagon-content {
            bottom: 6%;
            left: 8%;
            right: 8%;
          }
          
          .hexagon-content h3 {
            font-size: 1rem;
            margin-bottom: 0.375rem;
          }
          
          .hexagon-content span {
            font-size: 0.7rem;
            padding: 0.25rem 0.625rem;
          }
        }

        /* Small screens (640px - 767px) */
        @media (max-width: 767px) and (min-width: 640px) {
          .hexagon-image-overlay {
            top: 10px;
            left: 8px;
            width: 240px;
            height: 290px;
          }
          
          .hexagon-background {
            border-radius: 0.75rem;
            overflow: hidden;
          }
          
          .hexagon-content {
            bottom: 5%;
            left: 6%;
            right: 6%;
          }
          
          .hexagon-content h3 {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
            line-height: 1.3;
          }
          
          .hexagon-content span {
            font-size: 0.65rem;
            padding: 0.2rem 0.5rem;
          }
        }

        /* Extra small screens (below 640px) */
        @media (max-width: 639px) {
          .hexagon-image-overlay {
            top: 8px;
            left: 6px;
            width: 200px;
            height: 240px;
          }
          
          .hexagon-background {
            border-radius: 0.5rem;
            overflow: hidden;
          }
          
          .hexagon-content {
            bottom: 4%;
            left: 5%;
            right: 5%;
          }
          
          .hexagon-content h3 {
            font-size: 0.75rem;
            margin-bottom: 0.125rem;
            line-height: 1.2;
          }
          
          .hexagon-content span {
            font-size: 0.6rem;
            padding: 0.125rem 0.375rem;
          }
        }

        /* Very small screens (below 480px) */
        @media (max-width: 479px) {
          .hexagon-content h3 {
            font-size: 0.7rem;
          }
          
          .hexagon-content span {
            font-size: 0.55rem;
            padding: 0.1rem 0.3rem;
          }
        }
      `}</style>
    </div>
  )
}
