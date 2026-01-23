const VennDiagramSVG = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Definitions for glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Circle for RESULTADO (top) */}
      <circle
        cx="400"
        cy="200"
        r="150"
        fill="none"
        stroke="hsl(68, 100%, 50%)"
        strokeWidth="2"
        opacity="0.6"
        filter="url(#glow)"
      />
      
      {/* Circle for GESTÃO (bottom left) */}
      <circle
        cx="300"
        cy="350"
        r="150"
        fill="none"
        stroke="hsl(68, 100%, 50%)"
        strokeWidth="2"
        opacity="0.6"
        filter="url(#glow)"
      />
      
      {/* Circle for TECNOLOGIA (bottom right) */}
      <circle
        cx="500"
        cy="350"
        r="150"
        fill="none"
        stroke="hsl(68, 100%, 50%)"
        strokeWidth="2"
        opacity="0.6"
        filter="url(#glow)"
      />
      
      {/* Text labels */}
      <text
        x="400"
        y="90"
        textAnchor="middle"
        fill="hsl(0, 0%, 95%)"
        fontSize="20"
        fontWeight="400"
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.2em"
      >
        RESULTADO
      </text>
      
      <text
        x="180"
        y="450"
        textAnchor="middle"
        fill="hsl(0, 0%, 95%)"
        fontSize="20"
        fontWeight="400"
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.2em"
      >
        GESTÃO
      </text>
      
      <text
        x="620"
        y="450"
        textAnchor="middle"
        fill="hsl(0, 0%, 95%)"
        fontSize="20"
        fontWeight="400"
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.2em"
      >
        TECNOLOGIA
      </text>
      
      {/* Center text - BEEZZY */}
      <text
        x="400"
        y="290"
        textAnchor="middle"
        fill="hsl(68, 100%, 50%)"
        fontSize="36"
        fontWeight="400"
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.1em"
        filter="url(#glow)"
      >
        BEEZZY
      </text>

      {/* Small decorative line under center text */}
      <line
        x1="365"
        y1="305"
        x2="435"
        y2="305"
        stroke="hsl(68, 100%, 50%)"
        strokeWidth="2"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default VennDiagramSVG;
