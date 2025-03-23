import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>InstaBot Pro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-indigo-100 to-white">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-6 drop-shadow-sm">
              Öne Çıkan Özellikler
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
              <div className="text-purple-600 text-5xl mb-6 animate-bounce">✨</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Otomatik Etkileşim</h2>
              <p className="text-gray-600 leading-relaxed">İnstagram platformunda otomatik etkileşime geçin</p>
            </div>

            <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
              <div className="text-indigo-600 text-5xl mb-6 animate-pulse">🔒</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Güvenli Kullanım</h2>
              <p className="text-gray-600 leading-relaxed">Instagram politikalarına uygun çalışma</p>
            </div>

            <div className="glass-card backdrop-blur-sm bg-white/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
              <div className="text-purple-600 text-5xl mb-6 animate-bounce">📊</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Detaylı Analitik</h2>
              <p className="text-gray-600 leading-relaxed">Büyümenizi gerçek zamanlı takip edin</p>
            </div>
          </div>

          <div className="mt-20 space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-4">Fiyatlandırma Planları</h2>
              {/* Add your pricing content here */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 