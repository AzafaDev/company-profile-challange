"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function CreateBlogPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "Process",
    readTime: "5 min read", // Default value
    content: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) return alert("Mohon pilih gambar cover terlebih dahulu.");
    
    setLoading(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("title", formData.title);
      dataToSend.append("category", formData.category);
      dataToSend.append("readTime", formData.readTime);
      dataToSend.append("content", formData.content);
      dataToSend.append("image", imageFile);

      const response = await fetch("/api/posts", {
        method: "POST",
        body: dataToSend,
      });

      const result = await response.json();

      if (result.success) {
        alert("Cerita Anda telah berhasil dipublikasikan!");
        router.push("/blog");
        router.refresh();
      } else {
        alert("Terjadi kesalahan: " + result.error);
      }
    } catch (err) {
      alert("Gagal menghubungi server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F7F2] gap-6">
          <h2 className="font-serif text-3xl text-stone-900 italic">Ready to share your story?</h2>
          <SignInButton mode="modal">
            <button className="px-10 py-4 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-amber-800 transition-all">
              Login to Access Editor —
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      
      <SignedIn>
        <main className="min-h-screen bg-[#F9F7F2] pt-40 pb-20 px-6 md:px-24">
          <div className="max-w-3xl mx-auto">
            
            <header className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-800 font-black mb-4 block">Editor Mode</span>
              <h1 className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tighter">Draft your <span className="italic">narrative.</span></h1>
            </header>

            <form onSubmit={handleSubmit} className="space-y-16">
              
              {/* IMAGE INPUT */}
              <div className="space-y-6">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">Cover Image</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative group w-full aspect-[21/9] bg-stone-100 rounded-3xl overflow-hidden border-2 border-dashed border-stone-200 hover:border-stone-900 transition-all cursor-pointer flex items-center justify-center"
                >
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">Click to upload high-res image</p>
                    </div>
                  )}
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
              </div>

              {/* TITLE */}
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-4">Article Title</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="The Nuance of Ethiopian Beans..."
                  className="w-full bg-transparent border-b-2 border-stone-200 py-4 text-3xl font-serif text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* CATEGORY */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-4">Select Category</label>
                  <div className="flex flex-wrap gap-3">
                    {["Process", "Origin", "Brewing", "Lifestyle"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({...formData, category: cat})}
                        className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                          formData.category === cat 
                          ? "bg-stone-900 text-white" 
                          : "bg-white text-stone-400 border border-stone-100 hover:border-stone-900"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* READ TIME */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-4">Reading Time</label>
                  <input
                    required
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                    placeholder="e.g. 5 min read"
                    className="w-full bg-transparent border-b-2 border-stone-200 py-2 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors text-sm font-medium"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-4">The Narrative</label>
                <textarea
                  required
                  rows={10}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Begin your story here..."
                  className="w-full bg-white p-10 border border-stone-100 text-lg text-stone-800 focus:outline-none focus:border-stone-900 transition-colors font-light leading-relaxed rounded-3xl shadow-sm"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full md:w-auto px-20 py-6 bg-stone-900 text-white text-[10px] uppercase tracking-[0.5em] font-black hover:bg-amber-800 transition-all duration-500 disabled:bg-stone-300 shadow-xl"
              >
                {loading ? "Syncing to Sanity..." : "Publish Story —"}
              </button>
            </form>
          </div>
        </main>
      </SignedIn>
    </>
  );
}