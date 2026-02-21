import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Fetch data dari randomuser.me (kita ambil 10 orang contohnya)
    const response = await fetch("https://randomuser.me/api/?results=10", {
      // Kita tambahkan next cache agar tidak membebani API luar setiap kali refresh
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from RandomUser API");
    }

    const data = await response.json();

    // 2. Kirim data kembali ke frontend
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API_MEMBERS_ERROR:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}