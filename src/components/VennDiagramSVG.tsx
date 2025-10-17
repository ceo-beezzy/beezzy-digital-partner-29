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
        fill="rgba(51, 102, 255, 0.4)"
        stroke="#3366ff"
        strokeWidth="2"
      />
      
      {/* Circle for GESTÃO (bottom left) */}
      <circle
        cx="300"
        cy="350"
        r="150"
        fill="rgba(51, 102, 255, 0.3)"
        stroke="#3366ff"
        strokeWidth="2"
      />
      
      {/* Circle for TECNOLOGIA (bottom right) */}
      <circle
        cx="500"
        cy="350"
        r="150"
        fill="rgba(51, 102, 255, 0.35)"
        stroke="#3366ff"
        strokeWidth="2"
      />
      
      {/* Text labels */}
      <text
        x="400"
        y="120"
        textAnchor="middle"
        fill="#F7F1DD"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Montserrat, sans-serif"
      >
        RESULTADO
      </text>
      
      <text
        x="220"
        y="450"
        textAnchor="middle"
        fill="#F7F1DD"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Montserrat, sans-serif"
      >
        GESTÃO
      </text>
      
      <text
        x="580"
        y="450"
        textAnchor="middle"
        fill="#F7F1DD"
        fontSize="32"
        fontWeight="bold"
        fontFamily="Montserrat, sans-serif"
      >
        TECNOLOGIA
      </text>
      
      {/* Center text - BEEZZY */}
      <text
        x="400"
        y="300"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="40"
        fontWeight="bold"
        fontFamily="Montserrat, sans-serif"
      >
        BEEZZY
      </text>
    </svg>
  );
};

export default VennDiagramSVG;
