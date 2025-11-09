import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from '@/context/ThemeContext';

const ZoomableImage = ({ src, alt }) => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", border: "1px solid #444", borderRadius: "15px", position: "relative", background: isDarkMode ? "#252525" : "#fff", }}>
      <TransformWrapper
        initialScale={1}   
        minScale={0.5}       
        maxScale={8}        
        centerOnInit={true} 
        wheel={{ step: 0.2 }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 10,
                display: "flex",
                gap: "8px",
                background: "rgba(0,0,0,0.5)",
                padding: "6px 8px",
                borderRadius: "8px"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                style={{
                  background: "#c7c7c7ff",
                  border: "1px solid #888",
                  borderRadius: "4px",
                  width: "25px",     
                  height: "25px",      
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >+</button>

              <button
                onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                style={{
                  background: "#c7c7c7ff",
                  border: "1px solid #888",
                  borderRadius: "4px",
                  width: "25px",       
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px"
                }}
              >-</button>

              <button
                onClick={(e) => { e.stopPropagation(); resetTransform(); }}
                style={{
                  background: "#c7c7c7ff",
                  border: "1px solid #888",
                  borderRadius: "4px",
                  padding: "0 10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                  height: "25px"
                }}
              >Reset</button>
            </div>

            <TransformComponent>
              <img
                src={src}
                alt={alt}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  userSelect: "none",
                  pointerEvents: "auto"
                }}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
