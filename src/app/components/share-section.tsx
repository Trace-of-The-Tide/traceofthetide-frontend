import { BookOpen } from "lucide-react"

export function ShareSection() {
  return (
    <section 
      className="py-32 px-4 relative bg-cover bg-center bg-no-repeat mt-20"
      style={{
        backgroundImage: "url('/Component 1.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto mt-6 max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Share your story</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Every story matters. Help us preserve the collective memory by contributing your personal experiences,
          testimonies, or knowledge of historical events.
        </p>
        <button className="bg-[#C9A961] text-black hover:bg-[#B89851] font-medium px-6 py-2 rounded-md transition-colors">Contribute Now!</button>
      </div>
    </section>
  )
}
