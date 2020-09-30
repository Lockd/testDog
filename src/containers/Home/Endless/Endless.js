import React, { Component } from 'react';
import { connect } from 'react-redux';
import DogCard from '../../../components/DogCard/DogCard';
import classes from '../Home.module.css';
import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

class Endless extends Component {
    // state = {
    //     loadCounterStart: 0,
    //     loadCounterFinish: 20,
    // }

    componentDidMount() {

    }

    fetchMoreData = () => {
        // this.setState({
        //     loadCounterStart: this.state.loadCounterStart + 20,
        //     loadCounterFinish: this.state.loadCounterFinish + 20
        // })
    }

    render() {
        let grid = (<Redirect to={this.props.redirectPath} />);

        // const dogsArray = [];

        // for (let key in this.props.selectedDog) {
        //     dogsArray.push({
        //         id: key,
        //         config: this.props.selectedDog[key]
        //     });
        // }

        if (this.props.selectedDog) {
            grid = this.props.selectedDog.imgs.map(img => (
                <DogCard
                    key={img}
                    img={img}
                    clicked={() => this.props.addToFavoritesHandler(this.props.selectedDog.name, img)}
                />
            ));
            // grid = (
            //     <InfiniteScroll
            //         dataLength={this.state.loadCounterFinish}
            //         next={this.fetchMoreData}
            //         hasMore={true}
            //         loader={<h4>Loading...</h4>}
            //     >
            //         <div className={classes.Home}>
            //             {dogsArray.map((dog, index) => {
            //                 if (index < this.state.loadCounterFinish) {
            //                     return (<DogCard
            //                         key={index}
            //                         img={dog.config.img}
            //                         dogName={dog.config.name}
            //                         clicked={() => this.props.addToFavoritesHandler(dog.config.name, dog.config.img)}
            //                     />);
            //                 }
            //             })}
            //         </div>
            //     </InfiniteScroll>
            // );
        }
        return (
            <div className={classes.Home}>
                {grid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs.dogs,
        selectedDog: state.dogs.selectedDog
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToFavoritesHandler: (dogName, img) => dispatch(actions.addToFavorites(dogName, img))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Endless);