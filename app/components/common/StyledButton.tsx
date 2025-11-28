interface StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function StyledButton({
  onClick,
  disabled = false,
  type = 'button',
  children,
  fullWidth = false,
}: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${fullWidth ? 'w-full' : 'w-48'} px-6 py-3 rounded-lg bg-cyan-800 dark:bg-cyan-700 text-white font-medium transform transition duration-200 ease-in-out hover:bg-yellow-500 dark:hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-800 dark:focus:ring-cyan-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-cyan-800 dark:disabled:hover:bg-cyan-700`}
    >
      {children}
    </button>
  );
}
