"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    // Read theme preference from localStorage on page load / refresh
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setDark(false)
      document.documentElement.classList.remove("dark")
    } else if (savedTheme === "dark") {
      setDark(true)
      document.documentElement.classList.add("dark")
    } else {
      // Default to dark mode if no saved preference
      setDark(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-zinc-800 dark:bg-zinc-700 p-1 transition-colors duration-300 focus:outline-none border border-zinc-600"
    >
      {/* The Sliding Circle */}
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#f27f0c] shadow-md transition-transform duration-300 ease-in-out ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {dark ? (
          <Moon size={14} color="white" fill="white" />
        ) : (
          <Sun size={14} color="white" fill="white" />
        )}
      </div>

      {/* Background Icons for visual flair */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun size={12} className={`${dark ? "opacity-40" : "opacity-0"} text-yellow-500 transition-opacity`} />
        <Moon size={12} className={`${dark ? "opacity-0" : "opacity-40"} text-blue-300 transition-opacity`} />
      </div>
    </button>
  )
}