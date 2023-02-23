import { Outlet } from '@remix-run/react';
import React from 'react';

type Props = {
};

export const Index: React.FC<Props> = ({}) => {
  return (<><Outlet /></>);
}

Index.defaultProps = {
};

export default Index;
