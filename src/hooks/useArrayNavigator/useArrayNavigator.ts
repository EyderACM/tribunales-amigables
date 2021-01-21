import { useState, useEffect } from "react";

export const useArrayNavigator = <T>(
  array: T[],
  initialIndexValue?: number
) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndexValue || 0);
  const [currentValue, setCurrentValue] = useState<T>(array[currentIndex]);

  useEffect(() => {
    if (array.length) {
      const newValue = array[currentIndex];
      setCurrentValue(newValue);
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
  };
};
