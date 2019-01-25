import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
      width: 1280px;
  }`

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  .tab {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
  }
  .tab:hover {
    text-decoration: underline;
  }
  .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;`

const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;`

const Tabs = props => {
  return (
    <TabsContainer>
      <TabsTopics>
        <TabsTitle>TRENDING TOPICS:</TabsTitle>
        {props.tabs.map( tab => {
          return <Tab 
            selectTabHandler={props.selectTabHandler} 
            selectedTab={props.selectedTab} 
            tab={tab}
          />
        })}
      </TabsTopics>
    </TabsContainer>
  );
};

Tabs.PopTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
