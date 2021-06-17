import React, { useState, useEffect } from "react";

// Input
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [isOk, setIsOk] = useState(true);

  useEffect(() => {
    if (value && value.length > 0) {
      let isPass = false;
      if (typeof validator === "function") {
        isPass = validator(value);
      }
      if (isPass) {
        setIsOk(true);
      } else {
        setIsOk(false);
      }
    } else if (!isOk) {
      setIsOk(true);
    }
  }, [value]);

  const onChange = (e) => setValue(e.target.value);

  return { value, isOk, onChange };
};
