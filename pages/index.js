export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-indigo-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-6 drop-shadow-sm">
            Welcome to My App
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            A beautiful and modern application built with Next.js
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-purple-600 text-5xl mb-6 animate-bounce">✨</div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Feature One</h2>
            <p className="text-gray-600 leading-relaxed">Description of your amazing feature goes here.</p>
          </div>

          <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-indigo-600 text-5xl mb-6 animate-pulse">🚀</div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Feature Two</h2>
            <p className="text-gray-600 leading-relaxed">Another fantastic feature description here.</p>
          </div>

          <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-purple-600 text-5xl mb-6 animate-bounce">💫</div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Feature Three</h2>
            <p className="text-gray-600 leading-relaxed">Yet another amazing feature to showcase.</p>
          </div>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-gray-600 font-medium bg-white/50 inline-block px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
} 