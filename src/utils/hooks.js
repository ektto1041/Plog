import React, { useState, useEffect } from "react";

// Input
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    let isPass = false;
    if (typeof validator === "function") {
      isPass = validator(value);
    }
    if (isPass) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [value]);

  const onChange = (e) => setValue(e.target.value);

  return { value, isOk, onChange };
};
