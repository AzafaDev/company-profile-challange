"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F9F7F2] pt-32 pb-12 px-6 md:px-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* ROW 1: BIG LOGO / BRANDING */}
        <div className="mb-24 overflow-hidden">
          <h2 className="text-[18vw] lg:text-[14vw] font-serif font-black leading-none text-stone-900 tracking-tighter opacity-[0.03] select-none pointer-events-none absolute left-0 uppercase">
            Beyond
          </h2>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-serif font-black text-stone-900 mb-6">B&B<span className="text-amber-800">.</span></h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light max-w-xs">
                Kurasi biji kopi terbaik dari tanah Nusantara, diseduh dengan presisi, disajikan dengan kejujuran.
              </p>
            </div>

            {/* Navigasi Cepat */}
            <div className="md:col-span-2 md:col-start-6">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900 mb-6">Explore</p>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-stone-500 font-medium">
                <li><Link href="/services" className="hover:text-amber-800 transition-colors">Menu</Link></li>
                <li><Link href="/teams" className="hover:text-amber-800 transition-colors">Team</Link></li>
                <li><Link href="/blog" className="hover:text-amber-800 transition-colors">Journal</Link></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900 mb-6">Social</p>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-stone-500 font-medium">
                <li><a href="#" className="hover:text-amber-800 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-800 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-amber-800 transition-colors">Spotify</a></li>
              </ul>
            </div>

            {/* Location */}
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900 mb-6">Location</p>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 leading-loose">
                Jl. Senopati No. 12<br />
                Jakarta Selatan, Indonesia<br />
                12190
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: COPYRIGHT & SMALL PRINT */}
        <div className="pt-12 border-t border-stone-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">
            © 2026 Bean & Beyond. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href="#" className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold hover:text-stone-900">Privacy Policy</Link>
            <Link href="#" className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold hover:text-stone-900">Terms of Use</Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">Roastery Status: Online</p>
          </div>
        </div>

      </div>
    </footer>
  );
}