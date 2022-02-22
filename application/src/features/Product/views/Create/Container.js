import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createProduct} from "../../redux/actions";

class Container extends Component {
    onFinish = (data) => {
        this.props.createProduct({
            name       : data.name !== undefined ? data.name : '',
            price      : data.price !== undefined ? data.price : '',
            unit       : data.unit !== undefined ? data.unit : '',
            description: data.description !== undefined ? data.description : '',
        })
    }

    render() {
        const {create} = this.props.product;
        return (
            <President
                onFinish={this.onFinish}
                errors={create.errors}
                createLoading={create.loading}
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