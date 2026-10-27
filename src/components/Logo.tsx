/** "SR" typographic monogram in Playfair Display. Size is the font size in px. */
export function Monogram({
  size = 40,
  light = false,
  className = '',
}: {
  size?: number;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`monogram ${light ? 'monogram--light' : ''} ${className}`}
      style={{ fontSize: size }}
      aria-hidden
    >
      S<i>R</i>
    </span>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <Monogram size={30} className="logo__mark" />
      <span className="logo__divider" />
      <span className="logo__text">
        <strong>
          Stephanie Romacho<b>.</b>
        </strong>
        <small>Estrategia · Marketing · Diseño</small>
      </span>
    </span>
  );
}
