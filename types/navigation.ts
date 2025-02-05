import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../app/index';

export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type AboutScreenProps = BottomTabScreenProps<RootTabParamList, 'Me'>;
export type ContactScreenProps = BottomTabScreenProps<RootTabParamList, 'Contact'>;