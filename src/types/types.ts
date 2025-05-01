export interface RippleButtonProps {
  text: string;
  url?: string;
  className?: string;
  hoverColor?: string;
  icon?: React.ReactNode;
  onclick?: () => void;
}
