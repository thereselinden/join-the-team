import { makeStyles } from '@material-ui/core/styles';

import colors from '../theme/colors.json';
import backgroundImage from '../assets/background.svg';

export const useSignUpScreenStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  members: {
    backgroundImage: `url(${backgroundImage})`,
    background: colors.primaryBackground.color,
    display: 'flex',
    justifyContent: 'center',
  },
  register: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const useTeamMembersStyles = makeStyles(theme => ({
  teamWrapper: {
    color: colors.primary.color,
    display: 'grid',
    gridRowGap: 10,
    alignSelf: 'center',
  },
  title: {
    color: colors.primary.color,
    textAlign: 'center',
    fontSize: 60,
    [theme.breakpoints.up('sm')]: {
      display: 'table-caption',
      width: 100,
    },
  },
  team: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    width: 120,
  },
}));

export const useRegisterStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'grid',
    gridRowGap: 10,
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      alignSelf: 'center',
    },
  },
  title: {
    fontSize: 48,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 25,
    },
  },
  paragraph: {
    color: 'rgba(0,0,0,.6)',
  },
}));

export const useFormStyles = makeStyles(() => ({
  form: {
    display: 'grid',
    gridRowGap: 10,
  },
}));
