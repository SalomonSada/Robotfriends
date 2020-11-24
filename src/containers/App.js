import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, requestBots } from '../redux/actions';

const App = (props) => {
  useEffect(() => {
    props.onRequestRobots();
  }, [props.onRequestRobots]);

  const { onSearchChange, searchField, robots, isPending } = props;

  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="f2 tc">loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobot} />
      </Scroll>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestBots()),
  };
};

const mapStateToProps = (state) => ({
  searchField: state.searchField,
  robots: state.robots,
  isPending: state.isPending,
  error: state.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
