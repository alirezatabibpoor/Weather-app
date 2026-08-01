"use client"
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search/search";
export default function Home() {
  return (
    <SessionProvider>
<div className="bg-secondary">
      <Navbar/>
      <Search/>
    </div>
    </SessionProvider>
    
  );
}
