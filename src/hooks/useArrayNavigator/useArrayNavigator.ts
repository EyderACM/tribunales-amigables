import { useState, useEffect } from "react";

export const useArrayNavigator = <T>(
  array: T[],
  initialIndexValue?: number
) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndexValue || 0);
  const [currentValue, setCurrentValue] = useState<T>(array[currentIndex]);
  const [isInFirstElement, setIsInFirstElement] = useState(true);
  const [isInLastElement, setIsInLastElement] = useState(false);

  useEffect(() => {
    if (array.length) {
      const newValue = array[currentIndex];
      setCurrentValue(newValue);
    }

    const inFirsElement = currentIndex === 0;
    if (inFirsElement) {
      setIsInFirstElement(true);
    } else {
      setIsInFirstElement(false);
    }

    const inLastElement = currentIndex === array.length - 1;
    if (inLastElement) {
      setIsInLastElement(true);
    } else {
      setIsInLastElement(false);
    }
  }, [currentIndex]);

  const changeToPreviusValue = () => {
    const previusIndex = currentIndex - 1;

    if (previusIndex >= 0) {
      setCurrentIndex(previusIndex);
    }
  };

  const changeToNextValue = () => {
    const nextIndex = currentIndex + 1;
    const thereAreMoreValues = nextIndex < array.length;

    if (thereAreMoreValues) {
      setCurrentIndex(nextIndex);
    }
  };

  return {
    currentValue,
    currentIndex,
    changeToNextValue,
    changeToPreviusValue,
    isInFirstElement,
    isInLastElement,
  };
};
