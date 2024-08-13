import { createContext, useContext, useRef, useState } from "react";
import ReactConfetti from "react-confetti";

interface ConfettiContextType {
  activate: () => void;
}

const ConfettiContext = createContext<ConfettiContextType>({
  activate: () => {},
});

export const useConfetti = () => {
  if (!useContext(ConfettiContext)) {
    throw new Error("useConfetti must be used within a ConfettiProvider");
  }
  return useContext(ConfettiContext);
};

export const ConfettiProvider = (props: { children: React.ReactNode }) => {
  const [isRunning, setIsRunning] = useState(false);
  const confettiKey = useRef(Math.random());

  const activate = () => {
    setIsRunning(true);
    confettiKey.current = Math.random();
  };

  return (
    <ConfettiContext.Provider value={{ activate }}>
      {isRunning && (
        <ReactConfetti
          key={confettiKey.current}
          run={isRunning}
          recycle={false}
          confettiSource={{
            x: 0,
            y: 0,
            w: window.innerWidth,
            h: window.scrollY,
          }}
          onConfettiComplete={() => setIsRunning(false)}
        />
      )}
      {props.children}
    </ConfettiContext.Provider>
  );
};
