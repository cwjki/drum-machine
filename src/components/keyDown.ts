import { useEffect, useState } from "react";

export const useKeyPress = (targetKey: any) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDownHandler = ({ key }: {key: any}) => {
    if (key === targetKey) {
      setKeyPressed(true);
      
    }
    alert(key);
    
  };
  const keyUpHandler = ({ key}: {key: any}) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return keyPressed;

};
