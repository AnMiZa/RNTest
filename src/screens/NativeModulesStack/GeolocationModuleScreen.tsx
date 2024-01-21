import {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {ScreenWrapper} from '@components';
import {Coordinates, GeolocationModule} from '@native-modules';

export const GeolocationModuleScreen: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const coords = await GeolocationModule.getLocation();
      setCoordinates(coords);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCoordinates = (coords: Coordinates) => {
    return (
      <View>
        {Object.entries(coords).map(([key, value]) => (
          <Text key={key}>{`${key}: ${value}`}</Text>
        ))}
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.buttonWrapper}>
        <Button onPress={onPress}>Get my location</Button>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {!!coordinates && renderCoordinates(coordinates)}
            {!!error && <Text>{error}</Text>}
          </>
        )}
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
  },
});
