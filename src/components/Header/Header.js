import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup hideOnDeskop={true}>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
          <ActionGroup onDesktop={true} hideOnMobile={true}>
            <Button>Subscribe</Button>
            <SignLink>Already a subscriber?</SignLink>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: relative;
  margin-bottom: 40px;
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp}{
    background: revert;
    color: var(--color-gray-900);
    padding: 54px 0;
  }

`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 0 24px;
  ${p => p.hideOnMobile && 'display: none;'}

  
  @media ${QUERIES.laptopAndUp}{
    ${p => p.onDesktop && 'flex-direction: column;'}
    ${p => p.onDesktop && 'align-items: center;'}
    ${p => p.hideOnDeskop && 'display: none;'}
    ${p => p.hideOnMobile && 'display: flex;'}
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp}{
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translate(-50%, 0);
  }

`;

const SignLink = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
  margin-top: 8px;
`

export default Header;
