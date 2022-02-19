import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";

class Container extends Component {
    render() {
        const reducer     = this.props.crud;
        const product = reducer.payload

        console.log('tuantest', product)
        return (
            <President
                product={product}
            />
        )
    }

    componentDidMount() {


    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/users/:username");
    return {
        auth : state.auth,
        crud : state.crud,
        match: matchSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)