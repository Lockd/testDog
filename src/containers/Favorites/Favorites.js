import React, {Component} from 'react';
import {connect} from 'react-redux';
import DogCard from '../../components/DogCard/DogCard';

class Favorites extends Component {
    render() {
        
        let grid = (<h1>Add something to favorites to check this page</h1>);

        if (!this.props.isEmpty){
            
            grid = Object.entries(this.props.favoriteDogs).map(entire => (
                <DogCard
                    key={entire[1].name}
                    img={entire[1].img}
                    dogName={entire[1].name}
                    // clicked={() => this.props.onCradClick(dog.config.name, dog.config.img)}
                />
            ));
        } 
        return(
            <div>
                {grid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isEmpty: state.favorites.isEmpty,
        favoriteDogs: state.favorites.favoriteDogs
    }
}



export default connect(mapStateToProps)(Favorites);