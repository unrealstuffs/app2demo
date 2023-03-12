import {useEffect, FC} from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import Loader from '../components/Loader';

const adUnitId = TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const LoadScreen: FC<{setIsLoading: (loading: boolean) => void}> = ({
  setIsLoading,
}) => {
  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        interstitial.show();
      },
    );

    const unsubscribeClose = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setIsLoading(false);
      },
    );

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClose();
    };
  }, []);
  return (
    <Loader
      loadHandler={() => {
        setIsLoading(false);
      }}
    />
  );
};

export default LoadScreen;
