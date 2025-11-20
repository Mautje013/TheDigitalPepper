type Props = { className?: string; children: React.ReactNode };

export default function Container({ className = "", children }: Props) {
  return (
    <div className={`mx-auto w-full max-w-container px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}


