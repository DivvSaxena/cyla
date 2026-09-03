type VisualPlaceholderProps = { label: string; className?: string };
export function VisualPlaceholder({ label, className = "" }: VisualPlaceholderProps) { return <div className={`visual-placeholder ${className}`} aria-label={`${label} placeholder`} role="img"><span>Future product visual</span><strong>{label}</strong></div>; }
