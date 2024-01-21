import {NativeModules} from 'react-native';

export interface Coordinates {
  lat: number;
  lng: number;
  alt: number;
}

interface IGeolocation {
  getLocation(): Promise<Coordinates>;
}

export const GeolocationModule =
  NativeModules.GeolocationModule as IGeolocation;
