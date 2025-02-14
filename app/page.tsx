import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import BottomNav from "./components/NavBar";

export default function Home() {
  return (
    <main className="p-6 flex flex-col items-center text-center min-h-screen pb-16">
    <h1 className="text-3xl font-bold mb-6">Welcome to the Schedule App</h1>
    <p className="text-lg mb-4">Manage your events and profile with ease.</p>
    <BottomNav />
  </main>
  );
}
