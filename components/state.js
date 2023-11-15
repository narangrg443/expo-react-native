import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

function State() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [vel, setVel] = useState({ vx: 6, vy: 2 });
  const screenDimensions = { width: 300, height: 400 };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos((prev) => ({
        ...prev,
        x: prev.x + vel.vx,
       
      }));
      
      if(pos.x>=screenDimensions.width || pos.x<=0){
        setVel(prev=>({...prev,vx:-1*prev.vx}))
      }
      
      
    }, 40);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View
      style={{
        width: screenDimensions.width,
        height: screenDimensions.height,
        position: 'relative',
        backgroundColor: 'blue',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: pos.y,
          left: pos.x,
          width: 40,
          height: 40,
          backgroundColor: 'red',
          borderRadius: 20,
        }}
      />
    </View>
  );
}

export default State;
