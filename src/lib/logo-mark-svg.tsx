type LogoMarkSvgProps = {
  size?: number;
  className?: string;
};

export function logoMarkSvgElement({ size, className }: LogoMarkSvgProps = {}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="10" fill="#0A0A0A" />
      <path d="M9.5 10.5H12.55V29.5H9.5V10.5Z" fill="white" />
      <path
        d="M12.55 10.5L18.35 29.5H20.85L15.05 10.5H12.55Z"
        fill="white"
      />
      <path
        d="M21.65 10.5H24.55V29.5H23.45L21.65 26.85V10.5Z"
        fill="#2563EB"
      />
      <path
        d="M24.55 10.5H30.75A6.2 9.85 0 0 1 24.55 20.35V10.5Z"
        fill="#2563EB"
      />
    </svg>
  );
}
