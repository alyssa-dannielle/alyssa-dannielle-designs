import Link from 'next/link';
import StyledButton from './StyledButton';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

export default function Button({ link, children }: ButtonProps) {
  return (
    <Link href={link}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
}
