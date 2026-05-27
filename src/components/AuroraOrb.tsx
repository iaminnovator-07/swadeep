type AuroraOrbProps = {
  message: string;
};

export default function AuroraOrb({ message }: AuroraOrbProps) {
  return (
    <div className="aurora-assistant" aria-label="Aurora assistant status">
      <div className="aurora-core">
        <span />
        <span />
      </div>
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.28em] text-cyan">Aurora online</p>
        <p className="text-sm text-ink">{message}</p>
      </div>
    </div>
  );
}
