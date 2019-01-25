import React from 'react';
import styled from 'styled-components';


const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;`

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }`

const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;`

const TBLSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;`

const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;`

const TBCSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :last-child {
    margin-right: 0;
  }
  :hover {
    text-decoration: underline;
  }`

const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;`

const TBRSpan = styled.span`
  cursor: pointer;`

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarLeft>
          <TBLSpan>TOPICS</TBLSpan><TBLSpan>SEARCH</TBLSpan>
        </TopBarLeft>
        <TopBarCenter>
          <TBCSpan>GENERAL</TBCSpan><TBCSpan>BROWNBAG</TBCSpan><TBCSpan>RANDOM</TBCSpan><TBCSpan>MUSIC</TBCSpan><TBCSpan>ANNOUNCEMENTS</TBCSpan>
        </TopBarCenter>
        <TopBarRight>
          <TBRSpan>LOG IN</TBRSpan>
        </TopBarRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;