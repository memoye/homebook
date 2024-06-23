/* eslint react-refresh/only-export-components: 0 */

import { ReactNode, createContext, useContext, useState } from "react";

type SliderContextType = {
  focussed: number;
  focusImage: (index: number) => () => void;
  fullscreen: boolean;
  fullscreenSwitch: (next?: boolean) => void;
};

const init = {
  focussed: 0,
  focusImage: () => () => {},
  fullscreen: false,
  fullscreenSwitch: () => {},
};

const SliderContext = createContext<SliderContextType>(init);

export const SliderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [focussed, setFocussed] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  function focusImage(idx: number) {
    return () => setFocussed(idx);
  }

  function fullscreenSwitch(next?: boolean) {
    switch (next) {
      case true:
        setFullscreen(true);
        break;
      case false:
        setFullscreen(false);
        break;
      default:
        setFullscreen((prev) => !prev);
        break;
    }
  }

  return (
    <SliderContext.Provider
      value={{ focussed, fullscreen, focusImage, fullscreenSwitch }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error(
      '"useSliderContext" must be used within a "SliderContextProvider"'
    );
  }

  return context;
};
