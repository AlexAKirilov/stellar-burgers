import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { UserSelector } from '../../services/userSlice';

// TODO: Update the `AppHeader` component to dynamically fetch and display user data from the Redux store using `useSelector` and `UserSelector`.

export const AppHeader: FC = () => {
  const user = useSelector(UserSelector.userDataSelector);
  return <AppHeaderUI userName={user ? `${user?.name}` : ''} />;
};
