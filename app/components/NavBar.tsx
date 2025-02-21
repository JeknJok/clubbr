// components/BottomNav.tsx
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-4 shadow-lg">
      <Link href="/" className="text-center flex-1">
        <div className="flex flex-col items-center">
          <span className="text-lg">🏡</span>
          <span className="text-sm">Home</span>
        </div>
      </Link>
      <Link href="/dashboard" className="text-center flex-1">
        <div className="flex flex-col items-center">
          <span className="text-lg">🪧</span>
          <span className="text-sm">Dashboard</span>
        </div>
      </Link>
      <Link href="/profile" className="text-center flex-1">
        <div className="flex flex-col items-center">
          <span className="text-lg">👤</span>
          <span className="text-sm">Profile</span>
        </div>
      </Link>
      
      <Link href="/calendar" className="text-center flex-1">
        <div className="flex flex-col items-center">
          <span className="text-lg">📅</span>
          <span className="text-sm">Calendar</span>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;