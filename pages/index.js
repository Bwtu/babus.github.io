export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            Welcome to My App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful and modern application built with Next.js
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-purple-600 text-4xl mb-4">✨</div>
            <h2 className="text-2xl font-semibold mb-2">Feature One</h2>
            <p className="text-gray-600">Description of your amazing feature goes here.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-indigo-600 text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold mb-2">Feature Two</h2>
            <p className="text-gray-600">Another fantastic feature description here.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-purple-600 text-4xl mb-4">💫</div>
            <h2 className="text-2xl font-semibold mb-2">Feature Three</h2>
            <p className="text-gray-600">Yet another amazing feature to showcase.</p>
          </div>
        </div>

        <footer className="mt-20 text-center text-gray-600">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
} 