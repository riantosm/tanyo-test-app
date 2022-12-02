import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';

const useNavigateLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsLocked(false);
    }, []),
  );

  const locker = () => {
    if (isLocked) {
      return false;
    } else {
      setIsLocked(true);
      return true;
    }
  };

  return locker;
};

export default useNavigateLock;
