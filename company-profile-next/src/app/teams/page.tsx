"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Member {
  name: { first: string; last: string };
  picture: { thumbnail: string; large: string };
  location: { city: string };
  email: string;
}

export default function TeamsPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMembers(data.results);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cached members:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-stone-900 px-3 py-1">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-black">
                Our People
              </span>
            </div>
            <span className="text-stone-300 text-[10px] uppercase tracking-[0.3em]">
              Directory / 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 tracking-tighter leading-[0.85] mb-10">
            Meet the <br />
            <span className="italic font-light text-stone-400">
              Masterminds.
            </span>
          </h1>
          <p className="text-stone-500 max-w-xl font-light leading-relaxed">
            Dibalik setiap cangkir yang sempurna, ada tangan-tangan terampil
            yang bekerja dengan presisi tinggi dan dedikasi penuh.
          </p>
        </header>

        {/* DIRECTORY LIST */}
        <div className="border-t border-stone-200">
          {loading ? (
            <div className="py-20 text-center font-serif italic text-stone-400 animate-pulse">
              Requesting access to directory...
            </div>
          ) : (
            members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-stone-200 py-8 flex items-center justify-between hover:bg-white/50 transition-all px-4"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  {/* Image Kecil (Thumbnail) - Tetap Tajam karena ukurannya kecil */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-stone-200 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 shadow-inner">
                    <img
                      src={member.picture.large}
                      alt={member.name.first}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-xl md:text-3xl font-serif text-stone-900 capitalize">
                      {member.name.first} {member.name.last}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[9px] uppercase tracking-widest font-black text-amber-800">
                        {index === 0 ? "Head Roaster" : "Brew Specialist"}
                      </span>
                      <span className="text-stone-300 text-[9px]">•</span>
                      <span className="text-stone-400 text-[9px] uppercase tracking-widest font-bold">
                        {member.location.city}, ID
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email / Contact (Hidden on mobile) */}
                <div className="hidden md:block text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">
                    Contact
                  </p>
                  <p className="text-xs font-serif italic text-stone-900 hover:text-amber-800 cursor-pointer">
                    {member.name.first.toLowerCase()}@beanbeyond.com
                  </p>
                </div>

                {/* Arrow Decor */}
                <div className="text-stone-200 group-hover:text-stone-900 group-hover:translate-x-2 transition-all">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-20 text-center">
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.5em]">
            Join the collective — careers@beanbeyond.com
          </p>
        </div>
      </div>
    </main>
  );
}
