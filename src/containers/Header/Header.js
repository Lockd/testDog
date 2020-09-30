import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import classes from './Header.module.css';

class Header extends Component {
    componentDidMount() {
        this.props.fetchDogs();
    }

    selectChangeHandler = (event) => {
        event.preventDefault();        
        this.props.breedIsSelected(event.target.value);
    }

    render() {
        let selectOptions = null;
        if (this.props.dogs) {
            selectOptions = (Object.keys(this.props.dogs).map(key => {
                return <option value={key} key={key}>{key}</option>
            }))
        }

        let redirect = null;
        if (this.props.redirectPath !== '/') {
            redirect = <Redirect to={this.props.redirectPath} />
        }

        return (
            <nav className={classes.Header}>
                {redirect}
                <ul>
                    <li><NavLink activeClassName="active" to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to='/favorites'>Favorites</NavLink></li>
                    <li>
                        <select name='breeds' onChange={this.selectChangeHandler}>
                            {selectOptions}
                        </select>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs.dogs,
        redirectPath: state.dogs.redirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDogs: () => dispatch(actions.fetchBreeds()),
        breedIsSelected: (value) => dispatch(actions.dogIsSelected(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);