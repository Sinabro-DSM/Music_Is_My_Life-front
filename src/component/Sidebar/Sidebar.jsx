import React from 'react';
import SidebarItems from "./SidebarItems/SidebarItems";
import * as S from "./style"

const Sidebar = () => {
  return (
    <>
      <S.SideBarContainer>
        <S.Title>Music Is My Life</S.Title>
        <SidebarItems></SidebarItems>
      </S.SideBarContainer>
    </>
  );
};

export default Sidebar;