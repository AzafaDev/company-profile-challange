import { DetailSkeleton } from "@/components/blog/DetailSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-20">
       <DetailSkeleton />
    </main>
  );
}