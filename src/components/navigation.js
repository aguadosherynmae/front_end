import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import GroupIcon from '@mui/icons-material/Group';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import logoImage from '../assets/logo.png';
import Avatar from '@mui/material/Avatar';

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'violations',
    title: 'Violations',
    icon: <BusAlertIcon />,
    children: [
      {
        segment: '',
        title: 'Type',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'v-add',
        title: 'Add Violation',
        icon: <AddIcon />,
      },
      {
        segment: 'v-records',
        title: 'Records',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <ReportProblemIcon />,
  },
  {
    segment: 'drivers',
    title: 'Drivers',
    icon: <GroupIcon />,
  },
  {
    segment: 'feedbacks',
    title: 'Feedbacks',
    icon: <RateReviewIcon />,
  },
  {
    segment: 'payment',
    title: 'Payment Setting',
    icon: <PaymentIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Account',
  },
  {
    segment: 'profile',
    title: 'Company Profile',
    icon: <Avatar sx={{ bgcolor: '#6ed2b8 !important', width: 25, height: 25, fontSize: 17 }}>P</Avatar>
  },
  {
    segment: 'security',
    title: 'Security',
    icon: <SettingsIcon />,
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <LogoutIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6ed2b8',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#6ed2b8',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const branding = {
  logo: <img src={logoImage} alt="Logo" style={{ height: 40 }} />,
  title: '',
};

interface SidebarLayoutProps {
  children: React.ReactNode; // Children are now required since pages are passed in
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Router object with navigate method for AppProvider
  const router = React.useMemo(
    () => ({
      pathname: location.pathname,
      navigate: (path: string) => {
        navigate(path);
        console.log('Navigated to:', path);
      },
    }),
    [location.pathname, navigate]
  );

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={branding}
    >
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}