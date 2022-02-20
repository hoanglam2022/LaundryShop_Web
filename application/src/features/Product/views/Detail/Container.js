import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";

class Container extends Component {
    render() {
        return (
            <President detail={this.props.product.detail}/>
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
    const matchSelector = createMatchSelector("/product/:username");
    return {
        match  : matchSelector(state),
        product: state.product,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)