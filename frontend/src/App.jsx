import { useState } from 'react';
import { Menu, X, Wind, MapPin, Search, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [city, setCity] = useState('');
  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAQI = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    setAqiData(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/aqi/?city=${encodeURIComponent(city)}`
      );
      
      if (!response.ok) throw new Error('Server error');
      
      const data = await response.json();
      
      setAqiData({
        city: data.city,
        aqi: data.aqi,
        quality: data.quality,
        temp: data.temp,
        humidity: data.humidity,
        recommendation: data.recommendation
      });
    } catch (err) {
      setError("Unable to connect to server. Make sure Django backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 64 64" 
                className="w-9 h-9"
                xmlSpace="preserve"
              >
                <style type="text/css">
                  {`.st0{fill:#B6E3F3;}.st1{fill:#60CAE6;}`}
                </style>
                <path className="st0" d="M61.3,40.4c-0.2,0.6-0.6,1.1-1.1,1.6c-0.5,0.5-1,0.8-1.6,1.2c-1.2,0.6-2.5,1-3.8,1.2c-2.6,0.4-5.2,0.3-7.8,0c-2.6-0.4-5.1-1-7.6-1.7c-2.5-0.7-4.9-1.4-7.4-1.9c-0.6-0.1-1.2-0.2-1.9-0.3c-0.6-0.1-1.3-0.2-1.9-0.3c-0.3,0-0.6-0.1-0.9-0.1l-0.9-0.1c-0.3,0-0.6,0-0.9-0.1c-0.3,0-0.6,0-0.9,0c-1.3,0-2.5,0-3.7,0.2l-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0-0.3,0.1-0.5,0.1L18,40.5l-0.4,0.1l-0.4,0.1C16,41,14.8,41.5,13.7,42c-1.1,0.5-2.2,1.1-3.2,1.8c-1,0.7-2,1.5-2.8,2.3C6.9,47,6.2,48,5.7,49c-0.1,0.1-0.1,0.3-0.2,0.4l-0.1,0.2l-0.1,0.2c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.5-0.2,1.1-0.2,1.6c0,0.5,0.1,1,0.3,1.5c0.2,0.5,0.5,0.8,0.8,1.2c0.4,0.3,0.8,0.6,1.2,0.7c0.2,0.1,0.5,0.1,0.7,0.2c0.3,0,0.5,0,0.8,0c1.1,0,2.3-0.3,3.4-0.7c0.6-0.2,1.2-0.4,1.8-0.7c0.6-0.2,1.1-0.5,1.7-0.8c1.1-0.5,2.2-1.2,3.2-1.8c1-0.7,2.1-1.4,3-2.2c1-0.8,1.9-1.6,2.8-2.5c0.5-0.4,0.9-0.9,1.4-1.3l1.3-1.4l1.3-1.4l1.3-1.4c1.8-1.9,3.5-3.8,5.2-5.7c1.7-1.9,3.3-3.9,4.9-5.9l0.6-0.8l0.6-0.8c0.4-0.5,0.8-1,1.2-1.6c0.8-1,1.5-2.1,2.2-3.2c-1.1,2.3-2.5,4.5-4,6.7l-0.5,0.8l-0.6,0.8l-0.6,0.8l-0.6,0.8c-0.8,1-1.6,2.1-2.3,3.1c-1.6,2-3.2,4-4.9,6L30,44l-1.3,1.4l-1.3,1.4c-0.4,0.5-0.9,1-1.3,1.4c-0.9,0.9-1.9,1.8-2.9,2.7c-1,0.9-2,1.7-3.1,2.4c-1.1,0.8-2.2,1.4-3.4,2.1c-0.6,0.3-1.2,0.6-1.8,0.8c-0.6,0.3-1.2,0.5-1.8,0.7c-0.6,0.2-1.3,0.4-2,0.6C10.3,57.9,9.6,58,8.9,58c-0.4,0-0.7,0-1.1,0c-0.4,0-0.8-0.1-1.2-0.2c-0.8-0.2-1.5-0.7-2.1-1.2c-0.6-0.5-1.1-1.2-1.4-2c-0.3-0.7-0.5-1.5-0.5-2.3c0-0.8,0.1-1.5,0.2-2.2c0-0.2,0.1-0.4,0.1-0.5c0.1-0.2,0.1-0.4,0.2-0.5l0.1-0.3l0.1-0.3c0-0.1,0.1-0.2,0.1-0.3L3.6,48c0.6-1.3,1.5-2.4,2.4-3.4c1-1,2-1.9,3.1-2.6c2.3-1.5,4.7-2.6,7.3-3.3c2.6-0.7,5.3-0.9,8-0.8c1.3,0.1,2.6,0.2,4,0.4c0.7,0.1,1.3,0.2,1.9,0.3c0.6,0.1,1.3,0.3,1.9,0.4c1.3,0.3,2.5,0.6,3.8,1c1.2,0.4,2.5,0.8,3.7,1.2c2.4,0.8,4.9,1.5,7.4,2c1.2,0.2,2.5,0.4,3.8,0.5c1.3,0.1,2.5,0.1,3.8,0c1.3-0.1,2.5-0.4,3.7-0.9c0.6-0.3,1.1-0.6,1.6-1C60.6,41.5,61,41,61.3,40.4z"/>
                <path className="st0" d="M46.1,20c-1.1,0-1.9,0.7-2.3,1.6c0.4-0.4,0.9-0.7,1.5-0.7c1.2,0,2.1,1,2.1,2.2c0,0.5-0.2,1-0.5,1.4c0.9-0.4,1.4-1.2,1.4-2.2C48.4,21.1,47.4,20,46.1,20z"/>
                <path className="st1" d="M46,9c-5.2,0-9.8,2.7-12.4,6.7c2.7-3.3,6.7-5.3,11.2-5.3c8,0,14.5,6.5,14.5,14.5c0,3.6-1.3,6.8-3.4,9.3c3-2.6,4.9-6.5,4.9-10.7C60.8,15.5,54.2,9,46,9z"/>
                <path className="st1" d="M48,15.3c-2.9-0.8-5.9,0.1-7.9,2c2-1.4,4.5-2,7.1-1.4c4.5,1.2,7.2,5.7,6,10.2c-0.5,2-1.7,3.6-3.3,4.7c2.1-1,3.7-2.9,4.3-5.3C55.3,21.1,52.6,16.5,48,15.3z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-semibold tracking-tighter text-neutral-900">Aether</h1>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#air" className="hover:text-[#60CAE6] transition-colors">Air Quality</a>
            <a href="#about" className="hover:text-[#60CAE6] transition-colors">About</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-2  px-5 py-2 text-sm mb-8">
              <MapPin className="w-4 h-4" /> LIVE AIR INTELLIGENCE
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[88px] leading-none font-semibold tracking-tighter mb-6">
              Breathe<br />Pure.
            </h1>
            
            <p className="max-w-lg mx-auto text-xl md:text-2xl text-neutral-600 mb-12">
              Real-time air quality insights for a healthier life.
            </p>

            <a href="#air" className="inline-block bg-[#60CAE6] hover:bg-[#4FB8D6] text-white px-10 md:px-12 py-5 rounded-3xl text-lg font-medium transition-all shadow-lg shadow-[#60CAE6]/30">
              Check Your Air →
            </a>
          </motion.div>
        </div>
      </section>

      {/* AQI Section */}
      <section id="air" className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-4">Air Quality Predictor</h2>
            <p className="text-lg text-neutral-600">Enter any city name worldwide</p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative flex-1">
                <MapPin className="absolute left-6 top-5 text-neutral-400" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && fetchAQI()}
                  placeholder="Dhaka, London, New York..."
                  className="w-full pl-16 pr-8 py-5 rounded-3xl border border-neutral-200 focus:border-[#60CAE6] focus:outline-none text-lg"
                />
              </div>
              <button 
                onClick={fetchAQI}
                disabled={loading || !city.trim()}
                className="bg-[#60CAE6] hover:bg-[#4FB8D6] disabled:bg-neutral-300 px-10 py-5 rounded-3xl text-white flex items-center justify-center gap-3 transition-all font-medium min-w-[140px]"
              >
                <Search className="w-5 h-5" />
                {loading ? 'Checking...' : 'Check'}
              </button>
            </div>

            {error && <p className="text-red-500 text-center mb-8">{error}</p>}

            {aqiData && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-neutral-100"
              >
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <p className="uppercase tracking-widest text-xs text-neutral-500">CURRENT AIR QUALITY</p>
                    <h3 className="text-4xl md:text-5xl font-semibold mt-3">{aqiData.city}</h3>
                  </div>
                  <div className={`text-7xl md:text-8xl font-semibold ${aqiData.aqi <= 50 ? 'text-emerald-600' : aqiData.aqi <= 100 ? 'text-amber-600' : 'text-red-600'}`}>
                    {aqiData.aqi}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <p className="text-neutral-500 text-sm">CONDITION</p>
                    <p className="font-semibold text-2xl mt-2">{aqiData.quality}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-neutral-500 text-sm">TEMPERATURE</p>
                    <p className="font-semibold text-2xl mt-2">{aqiData.temp}°C</p>
                  </div>
                  <div className="text-center">
                    <p className="text-neutral-500 text-sm">HUMIDITY</p>
                    <p className="font-semibold text-2xl mt-2">{aqiData.humidity}%</p>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-8 text-lg">
                  💡 <strong>Recommendation:</strong> {aqiData.recommendation}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* About & Footer (same as before) */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-8">Why Aether?</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We believe clean air is the foundation of healthy skin and a conscious life. 
            Aether delivers real-time air intelligence with elegance and precision.
          </p>
        </div>
      </section>

      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8" xmlSpace="preserve">
                  <style type="text/css">{`.st0{fill:#B6E3F3;}.st1{fill:#60CAE6;}`}</style>
                  <path className="st0" d="M61.3,40.4c-0.2,0.6-0.6,1.1-1.1,1.6c-0.5,0.5-1,0.8-1.6,1.2c-1.2,0.6-2.5,1-3.8,1.2c-2.6,0.4-5.2,0.3-7.8,0c-2.6-0.4-5.1-1-7.6-1.7c-2.5-0.7-4.9-1.4-7.4-1.9c-0.6-0.1-1.2-0.2-1.9-0.3c-0.6-0.1-1.3-0.2-1.9-0.3c-0.3,0-0.6-0.1-0.9-0.1l-0.9-0.1c-0.3,0-0.6,0-0.9-0.1c-0.3,0-0.6,0-0.9,0c-1.3,0-2.5,0-3.7,0.2l-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.2c-0.2,0-0.3,0.1-0.5,0.1L18,40.5l-0.4,0.1l-0.4,0.1C16,41,14.8,41.5,13.7,42c-1.1,0.5-2.2,1.1-3.2,1.8c-1,0.7-2,1.5-2.8,2.3C6.9,47,6.2,48,5.7,49c-0.1,0.1-0.1,0.3-0.2,0.4l-0.1,0.2l-0.1,0.2c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.5-0.2,1.1-0.2,1.6c0,0.5,0.1,1,0.3,1.5c0.2,0.5,0.5,0.8,0.8,1.2c0.4,0.3,0.8,0.6,1.2,0.7c0.2,0.1,0.5,0.1,0.7,0.2c0.3,0,0.5,0,0.8,0c1.1,0,2.3-0.3,3.4-0.7c0.6-0.2,1.2-0.4,1.8-0.7c0.6-0.2,1.1-0.5,1.7-0.8c1.1-0.5,2.2-1.2,3.2-1.8c1-0.7,2.1-1.4,3-2.2c1-0.8,1.9-1.6,2.8-2.5c0.5-0.4,0.9-0.9,1.4-1.3l1.3-1.4l1.3-1.4l1.3-1.4c1.8-1.9,3.5-3.8,5.2-5.7c1.7-1.9,3.3-3.9,4.9-5.9l0.6-0.8l0.6-0.8c0.4-0.5,0.8-1,1.2-1.6c0.8-1,1.5-2.1,2.2-3.2c-1.1,2.3-2.5,4.5-4,6.7l-0.5,0.8l-0.6,0.8l-0.6,0.8l-0.6,0.8c-0.8,1-1.6,2.1-2.3,3.1c-1.6,2-3.2,4-4.9,6L30,44l-1.3,1.4l-1.3,1.4c-0.4,0.5-0.9,1-1.3,1.4c-0.9,0.9-1.9,1.8-2.9,2.7c-1,0.9-2,1.7-3.1,2.4c-1.1,0.8-2.2,1.4-3.4,2.1c-0.6,0.3-1.2,0.6-1.8,0.8c-0.6,0.3-1.2,0.5-1.8,0.7c-0.6,0.2-1.3,0.4-2,0.6C10.3,57.9,9.6,58,8.9,58c-0.4,0-0.7,0-1.1,0c-0.4,0-0.8-0.1-1.2-0.2c-0.8-0.2-1.5-0.7-2.1-1.2c-0.6-0.5-1.1-1.2-1.4-2c-0.3-0.7-0.5-1.5-0.5-2.3c0-0.8,0.1-1.5,0.2-2.2c0-0.2,0.1-0.4,0.1-0.5c0.1-0.2,0.1-0.4,0.2-0.5l0.1-0.3l0.1-0.3c0-0.1,0.1-0.2,0.1-0.3L3.6,48c0.6-1.3,1.5-2.4,2.4-3.4c1-1,2-1.9,3.1-2.6c2.3-1.5,4.7-2.6,7.3-3.3c2.6-0.7,5.3-0.9,8-0.8c1.3,0.1,2.6,0.2,4,0.4c0.7,0.1,1.3,0.2,1.9,0.3c0.6,0.1,1.3,0.3,1.9,0.4c1.3,0.3,2.5,0.6,3.8,1c1.2,0.4,2.5,0.8,3.7,1.2c2.4,0.8,4.9,1.5,7.4,2c1.2,0.2,2.5,0.4,3.8,0.5c1.3,0.1,2.5,0.1,3.8,0c1.3-0.1,2.5-0.4,3.7-0.9c0.6-0.3,1.1-0.6,1.6-1C60.6,41.5,61,41,61.3,40.4z"/>
                  <path className="st0" d="M46.1,20c-1.1,0-1.9,0.7-2.3,1.6c0.4-0.4,0.9-0.7,1.5-0.7c1.2,0,2.1,1,2.1,2.2c0,0.5-0.2,1-0.5,1.4c0.9-0.4,1.4-1.2,1.4-2.2C48.4,21.1,47.4,20,46.1,20z"/>
                  <path className="st1" d="M46,9c-5.2,0-9.8,2.7-12.4,6.7c2.7-3.3,6.7-5.3,11.2-5.3c8,0,14.5,6.5,14.5,14.5c0,3.6-1.3,6.8-3.4,9.3c3-2.6,4.9-6.5,4.9-10.7C60.8,15.5,54.2,9,46,9z"/>
                  <path className="st1" d="M48,15.3c-2.9-0.8-5.9,0.1-7.9,2c2-1.4,4.5-2,7.1-1.4c4.5,1.2,7.2,5.7,6,10.2c-0.5,2-1.7,3.6-3.3,4.7c2.1-1,3.7-2.9,4.3-5.3C55.3,21.1,52.6,16.5,48,15.3z"/>
                </svg>
              </div>
              <span className="text-2xl font-semibold tracking-tighter">Aether</span>
            </div>
            
            <p className="text-neutral-400 text-sm">© 2026 Aether. Built with precision.</p>

            <div className="flex items-center gap-2 text-neutral-400">
              Made with <Heart className="w-4 h-4 text-red-500" /> for cleaner air
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;