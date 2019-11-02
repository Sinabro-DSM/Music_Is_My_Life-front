import React from 'react';
import {Route, Link} from 'react-router-dom';
import * as S from './style';
import todo from '../../Home'

const SidebarItems = () => {
  return (
    <>
      <S.SidebarButton>Drum</S.SidebarButton>
      <S.SidebarButton>Jang-Gu</S.SidebarButton>
      <S.SidebarButton>Recorder</S.SidebarButton>
    </>
  );
};

export default SidebarItems;