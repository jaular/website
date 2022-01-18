import useDarkMode from "@/hooks/useDarkMode";

export default function ThemeButton() {
  const [switchTheme, theme, isMounted] = useDarkMode();
  {
    if (!isMounted) return null;
  }

  const textTheme =
    theme === "dark" ? (
      <svg width="24" height="24" fill="none" aria-hidden="true">
        <path
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ) : (
      <svg width="24" height="24" fill="none" aria-hidden="true">
        <path
          d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );

  return (
    <button
      className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-blue-300/50"
      onClick={() => switchTheme()}
    >
      <span className="sr-only">Theme</span>
      {textTheme}
    </button>
  );
}
