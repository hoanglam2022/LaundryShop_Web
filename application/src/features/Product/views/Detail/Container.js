import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";
import {updateProduct, detailProduct, updateConfirm, updateCancel} from "../../redux/actions";
import {ErrorPage} from "../../../Exceptions";

class Container extends Component {
    onFinish = (data) => {
        this.props.updateConfirm(data)
    }

    updateProduct = () => {
        this.props.updateProduct(this.props.product.detail.id, this.props.product.detail.data);
    }

    render() {
        let {detail} = this.props.product;
        if (detail.isFound === false) {
            return (
                <ErrorPage code={404}/>
            )
        }

        return (
            <President
                isDetail={true}
                data={detail.data}
                formLoading={detail.loading}
                errors={detail.errors}
                updateLoading={detail.update.loading}
                updateModalVisible={detail.update.modalVisible}
                deleteLoading={detail.delete.loading}

                onFinish={this.onFinish}
                onUpdate={this.updateProduct}
                onUpdateCancel={this.props.updateCancel}
            />
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.detailProduct(id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateProduct: (id, data) => {
            dispatch(updateProduct(id, data));
        },
        detailProduct: (id) => {
            dispatch(detailProduct(id));
        },
        updateConfirm: (data) => {
            dispatch(updateConfirm(data));
        },
        updateCancel : () => {
            dispatch(updateCancel());
        },
    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/products/detail/:id");
    return {
        match  : matchSelector(state),
        product: state.product,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)