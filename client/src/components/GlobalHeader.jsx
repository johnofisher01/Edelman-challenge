import React from "react";

const GlobalHeader = () => {
  return (
    <header className="bg-primary text-background p-4">
      <div className="global-header__logo flex items-center">
        <a
          href="https://www.edelman.com/"
          className="default-logo"
          title="Edelman Logo | Links to Homepage"
        >
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 347.4 141.6"
            className="h-8"
          >
            <defs>
              <style>
                {`.cls-1 { fill: #3773f4; }
                  .cls-2 { fill: #192cef; }
                  .cls-3 { fill: #060a4a; }`}
              </style>
            </defs>
            <polygon className="cls-3" points="0 70.8 70.8 141.6 70.8 70.8 0 70.8"></polygon>
            <polygon className="cls-1" points="70.8 0 70.8 70.8 141.6 70.8 70.8 0"></polygon>
            <polygon className="cls-2" points="70.8 70.8 70.8 141.6 141.6 70.8 70.8 70.8"></polygon>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default GlobalHeader;