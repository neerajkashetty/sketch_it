import React, { useRef, useState, useEffect } from 'react';

const Sketch = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            // Initialize canvas drawing logic here
        }
    }, []);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            // Start drawing logic here
            setIsDrawing(true);
        }
    };

    const endDrawing = () => {
        // End drawing logic here
        setIsDrawing(false);
    };

    return (
        <div>
            <button onClick={startDrawing}>Hi </button>
            <canvas ref={canvasRef} onMouseDown={startDrawing} onMouseUp={endDrawing} />
        </div>
    );
};

export default Sketch;