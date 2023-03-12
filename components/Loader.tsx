import {ProgressBar} from '@react-native-community/progress-bar-android';
import {FC, useState, useEffect} from 'react';

// Timeout for progress bar
const loadingTimeout = 5000;
// Interval for brogress bar update
const interval = 100;

const Loader: FC<{loadHandler: () => void}> = ({loadHandler}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalSubscriber = setInterval(() => {
      // number that is added to progress state when bar is updating
      const increment = interval / loadingTimeout;
      setProgress(prevProgress => prevProgress + increment);
    }, interval);

    const timeoutSubscriber = setTimeout(() => {
      loadHandler();
    }, loadingTimeout);

    return () => {
      clearInterval(intervalSubscriber);
      clearTimeout(timeoutSubscriber);
    };
  }, []);

  return (
    <ProgressBar
      styleAttr="Horizontal"
      indeterminate={false}
      progress={progress}
    />
  );
};

export default Loader;
