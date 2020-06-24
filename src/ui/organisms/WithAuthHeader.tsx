import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NookLogo from '../../assets/nook-main-logo.svg';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { SwitchTheme } from '../atoms/SwitchTheme';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';
import { LOGOUT } from '../../types/auth';

export const WithAuthHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const themes = useTheme();
  const { setTheme } = themes;

  const handleSwitchClick = () => {
    setTheme();
  };

  const handleLogout = useCallback(() => {
    dispatch({ type: LOGOUT });
  }, [dispatch]);

  return (
    <Header>
      <Nav>
        <Left>
          <LogoContainer>
            <Link to="/home">
              <Logo img={NookLogo} width="100px" />
            </Link>
          </LogoContainer>
          <UnorderedList>
            <List path={location.pathname === '/note'} themes={themes}>
              <Link to="/note">
                <Span>Note</Span>
              </Link>
            </List>
            <List path={location.pathname === '/task'} themes={themes}>
              <Link to="/task">
                <Span>Task</Span>
              </Link>
            </List>
            <List path={location.pathname === '/calendar'} themes={themes}>
              <Link to="/calendar">
                <Span>Calendar</Span>
              </Link>
            </List>
          </UnorderedList>
        </Left>
        <Right>
          <Switch>
            <SwitchTheme status={themes.theme === 'dark' ? true : false} handleSwitchClick={handleSwitchClick} />
          </Switch>
          <Button width="100px" height="36px" handleClick={handleLogout}>
            ログアウト
          </Button>
        </Right>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  height: 60px;
  padding-top: 15px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 10px;
  padding: 0 15px;
`;

const List = styled.li<{ path: boolean; themes: Theme }>`
  ${({ path, themes }) => {
    const { palette, theme } = themes;

    return css`
      padding: 0 10px;

      a {
        width: 140px;
        padding-bottom: 8px;
        text-align: center;
        position: relative;
        color: ${path ? palette[theme].MAIN : palette[theme].PRIMARY};

        &:hover {
          opacity: 0.8;
        }
  
        &:before {
          content: '';
          color: ${palette[theme].MAIN};
          position: absolute;
          top: calc(50% - -14px);
          left: 0;
          width: 100%;
          height: 2px;
          pointer-events: none;
          background: currentColor;
          transform: scale3d(0, 1, 1);
          transform-origin: 100% 50%;
          transition: transform 0.3s;
          transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
  
          ${
            path
              ? `
              transform: scale3d(1, 1, 1);
              transform-origin: 0% 50%;
            `
              : null
          };
      }
    `;
  }}
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 550;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Switch = styled.div`
  margin-right: 20px;
  padding-top: 10px;
`;
