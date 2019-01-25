import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( tab => {
          return <Tab 
            selectTabHandler={props.selectTabHandler} 
            selectedTab={props.selectedTab} 
            tab={tab}
          />
        })}
      </div>
    </div>
  );
};

Tabs.PopTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
