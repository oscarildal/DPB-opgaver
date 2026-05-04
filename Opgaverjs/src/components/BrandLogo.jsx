function BrandLogo() {
  return (
    <div className="brand-logo" aria-label="Ventrigo Agrobotics">
      <svg aria-hidden="true" className="brand-logo-mark" viewBox="0 0 240 180">
        <path
          d="M22 28h28l57 99 15-25 17 28-33 52L22 28Z"
          fill="currentColor"
        />
        <path
          d="M92 28h126l-53 90-15-20 31-53h-59l15 28-17 29-28-46L92 28Z"
          fill="currentColor"
        />
      </svg>
      <div className="brand-logo-text">
        <span className="brand-logo-title">Ventrigo</span>
        <span className="brand-logo-subtitle">Agrobotics</span>
      </div>
    </div>
  );
}

export default BrandLogo;
