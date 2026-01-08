const VennDiagramSVG = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Circle for RESULTADO (top) */}
      <circle
        cx="400"
        cy="200"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground"
      />
      
      {/* Circle for GESTÃO (bottom left) */}
      <circle
        cx="300"
        cy="350"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground"
      />
      
      {/* Circle for TECNOLOGIA (bottom right) */}
      <circle
        cx="500"
        cy="350"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground"
      />
      
      {/* Text labels */}
      <text
        x="400"
        y="100"
        textAnchor="middle"
        fill="currentColor"
        fontSize="24"
        fontWeight="600"
        fontFamily="'Playfair Display', serif"
        className="text-foreground uppercase"
        letterSpacing="0.1em"
      >
        RESULTADO
      </text>
      
      <text
        x="180"
        y="450"
        textAnchor="middle"
        fill="currentColor"
        fontSize="24"
        fontWeight="600"
        fontFamily="'Playfair Display', serif"
        className="text-foreground uppercase"
        letterSpacing="0.1em"
      >
        GESTÃO
      </text>
      
      <text
        x="620"
        y="450"
        textAnchor="middle"
        fill="currentColor"
        fontSize="24"
        fontWeight="600"
        fontFamily="'Playfair Display', serif"
        className="text-foreground uppercase"
        letterSpacing="0.1em"
      >
        TECNOLOGIA
      </text>
      
      {/* Center text - BEEZZY */}
      <text
        x="400"
        y="295"
        textAnchor="middle"
        fill="currentColor"
        fontSize="32"
        fontWeight="700"
        fontFamily="'Playfair Display', serif"
        className="text-foreground"
        letterSpacing="0.05em"
      >
        BEEZZY
      </text>

      {/* Small decorative line under center text */}
      <line
        x1="365"
        y1="310"
        x2="435"
        y2="310"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground"
      />
    </svg>
  );
};

export default VennDiagramSVG;
