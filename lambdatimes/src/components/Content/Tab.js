import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab': 'tab'}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.PropTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Tab;
