import {SafeAreaView} from 'react-native';
import {useState} from 'react';
import LoadScreen from './screens/LoadScreen';
import MainScreen from './screens/MainScreen';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SafeAreaView style={{padding: 15, flex: 1, justifyContent: 'center'}}>
      {isLoading && <LoadScreen setIsLoading={setIsLoading} />}
      {!isLoading && <MainScreen />}
    </SafeAreaView>
  );
}

export default App;
