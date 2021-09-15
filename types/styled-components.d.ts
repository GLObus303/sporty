import 'styled-components';
import { AppThemeType } from '../constants/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppThemeType {}
}
