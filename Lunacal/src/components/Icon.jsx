
const Icon = () => {
  return (
    <div className="flex flex-col p-2 justify-between items-center h-1/2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4E54" />
            <stop offset="100%" stopColor="#A3ADBA" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="1" fill="url(#grad1)" stroke="none" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#gridGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4E54" />
            <stop offset="100%" stopColor="#A3ADBA" />
          </linearGradient>
        </defs>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    </div>
  );
};

export default Icon;
