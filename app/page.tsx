import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Schedule App</h1>
      <p className="text-lg mb-4">Manage your events and profile with ease.</p>
      
      <div className="flex space-x-4">
        <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Go to Dashboard</Link>
        <Link href="/profile" className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">View Profile</Link>
      </div>
    </main>
  );
}
