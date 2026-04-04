import "./loadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="appLoader">
      <div className="spinner" role="status" aria-live="polite" />
      <span className="loadingText">Loading dashboard...</span>
    </div>
  );
};

export default LoadingSpinner;
