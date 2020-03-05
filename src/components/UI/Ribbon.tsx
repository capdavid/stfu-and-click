import React from 'react';
import styled from '../../styles/styled';

interface RibbonProps {
  left?: boolean;
}

const RIBBON_HEIGHT = 40;
const RIBBON_BORDER = RIBBON_HEIGHT / 2;

const RibbonWrapper = styled.div`
  margin: 3rem 0 1rem 0;
  position: relative;
  z-index: 1;
`;

const RibbonContainer = styled.div`
  width: 300px;
  height: ${RIBBON_HEIGHT * 1.5}px;
  z-index: -2;
  text-align: center;
  margin: 0 auto;
`;

const StyledRibbon = styled.div`
  position: relative;
  margin: 0 auto;
  color: ${p => p.theme.colors.white};
  font-weight: bold;
  font-size: ${RIBBON_HEIGHT / 2}px;
  line-height: ${RIBBON_HEIGHT}px;
  width: ${RIBBON_HEIGHT * 5}px;
  height: ${RIBBON_HEIGHT}px;
  background: ${p => p.theme.colors.primary};
`;

const StyledRibbonPart = styled.div<RibbonProps>`
  position: absolute;
  width: ${RIBBON_HEIGHT * 2}px;
  height: ${RIBBON_HEIGHT}px;
  background: ${p => p.theme.colors.darkBlue};
  top: ${RIBBON_HEIGHT / 3}px;
  z-index: -1;
  left: ${p => (p.left ? `${-RIBBON_HEIGHT * 1.5}px` : 'initial')};
  right: ${p => (p.left ? 'initial' : `${-RIBBON_HEIGHT * 1.5}px`)};

  ${p =>
    p.left
      ? `&:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-left: ${RIBBON_BORDER}px solid #fff;
    border-right: ${RIBBON_BORDER}px solid transparent;
    border-top: ${RIBBON_BORDER}px solid transparent;
    border-bottom: ${RIBBON_BORDER}px solid transparent;
  }`
      : `&:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-left: ${RIBBON_BORDER}px solid transparent;
    border-right: ${RIBBON_BORDER}px solid #fff;
    border-top: ${RIBBON_BORDER}px solid transparent;
    border-bottom: ${RIBBON_BORDER}px solid transparent;
  }
`};
`;

const Ribbon: React.FC<RibbonProps> = props => {
  return (
    <RibbonWrapper>
      <RibbonContainer>
        <StyledRibbon>
          {props.children}
          <StyledRibbonPart left />
          <StyledRibbonPart />
        </StyledRibbon>
      </RibbonContainer>
    </RibbonWrapper>
  );
};

export default Ribbon;
