interface HamburgerIconProps {
  onClick: () => void;
  isOpen?: boolean;
}

export default function HamburgerIcon({ onClick, isOpen = false }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 md:hidden"
      aria-label="Toggle menu"
    >
      <span 
        className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out
          ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span 
        className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : ''}`}
      />
      <span 
        className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </button>
  );
} 