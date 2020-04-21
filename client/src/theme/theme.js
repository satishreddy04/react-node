import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import colorPalette from './colorPalette';
import Typography from './Typography';

const themeConfig = {
  typography: Typography,
  palette: {
    background: {
      default: colorPalette.primaryColors.lightGrey,
    },
  },
};

const theme  = createMuiTheme(themeConfig);

const drawerWidth = 340;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}));
export default theme;
export {
  useStyles,
};
