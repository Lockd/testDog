import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import DogCard from '../../components/DogCard/DogCard';
import classes from './Home.module.css';
import * as actions from '../../store/actions/index';
import InfiniteScroll from 'react-infinite-scroll-component';

class Home extends Component {
    state = {
        loadCounterStart: 0,
        loadCounterFinish: 20,
    }

    fetchMoreData = () => {
        this.setState({
            loadCounterFinish: this.state.loadCounterFinish + 20
        })
    }

    render() {
        const dogsArray = [];

        for (let key in this.props.dogs) {
            dogsArray.push({
                id: key,
                config: this.props.dogs[key]
            });
        }
        
        let grid = <h1>Чичас, догрузится, не спеши</h1>;

        if (this.props.areImagesLoaded) {
            console.log(this.state);
            grid = (
                <InfiniteScroll
                    dataLength={this.state.loadCounterFinish}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <div className={classes.Home}>
                        {dogsArray.map((dog, index) => {
                            if (index < this.state.loadCounterFinish) {
                                return (<DogCard
                                    key={index}
                                    img={dog.config.img}
                                    dogName={dog.config.name}
                                    clicked={() => this.props.addToFavoritesHandler(dog.config.name, dog.config.img)}
                                />);
                            }
                        })}
                    </div>
                </InfiniteScroll>
            );
        }

        return (
            <Fragment>
                {grid}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs.dogs,
        areImagesLoaded: state.dogs.areImagesLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavoritesHandler: (dogName, img) => dispatch(actions.addToFavorites(dogName, img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);