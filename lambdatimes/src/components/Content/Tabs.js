import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( tab => {
          return <Tab 
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selectedTab} 
          tab={tab} />
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.PropTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tabs;
