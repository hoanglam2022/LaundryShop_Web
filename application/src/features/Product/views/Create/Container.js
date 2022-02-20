import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createProduct} from "../../redux/actions";

class Container extends Component {
    onFinish = (data) => {
        this.props.createProduct({
            username: data.username !== undefined ? data.username : '',
            password: data.password !== undefined ? data.password : '',
        })
    }

    render() {
        return (
            <President
                create={this.props.product.create}
                onFinish={this.onFinish}
            />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct: (data) => {
            dispatch(createProduct(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        product: state.product,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)