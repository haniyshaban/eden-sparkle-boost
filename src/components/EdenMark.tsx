import markUrl from "@/assets/eden-mark.svg";
import markFineUrl from "@/assets/eden-mark-fine.svg";

type EdenMarkProps = {
  className?: string;
  /** Thinner lines, for large sizes */
  fine?: boolean;
};

/** The Eden Labs logo mark. Takes its colour from the text colour (e.g. text-sage). */
export const EdenMark = ({ className = "", fine = false }: EdenMarkProps) => {
  const url = `url("${fine ? markFineUrl : markUrl}")`;
  return (
    <span
      aria-hidden="true"
      className={`eden-mark ${className}`}
      style={{ WebkitMaskImage: url, maskImage: url }}
    />
  );
};
