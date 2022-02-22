import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {createMatchSelector} from "connected-react-router";
import {updateProduct, detailProduct} from "../../redux/actions";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data       : {
                name       : '',
                price      : '',
                unit       : '',
                description: '',
            },
            updateModal: false,
            deleteModal: false,
            id: null,
        }
    }

    onFinish = (data) => {
        this.setState({
            ...this.state,
            data       : {
                ...this.state.data,
                name       : data.name !== undefined ? data.name : '',
                price      : data.price !== undefined ? data.price : '',
                unit       : data.unit !== undefined ? data.unit : '',
                description: data.description !== undefined ? data.description : '',
            },
            updateModal: true,
        })

    }

    onOkUpdate = () => {
        this.setState({
            ...this.state,
            updateModal: false,
        }, this.props.updateProduct(this.state.id, this.state.data))
    }

    onCancelUpdate = () => {
        this.setState({
            ...this.state,
            updateModal: false,
        })
    }

    render() {
        const {detail, update, remove} = this.props.product;
        return (
            <President
                detail={detail}
                update={update}
                formLoading={detail.loading}
                dataDefault={detail.data}
                errors={update.errors}
                updateLoading={update.loading}
                removeLoading={remove.loading}

                onFinish={this.onFinish}

                onOkUpdate={this.onOkUpdate}
                onCancelUpdate={this.onCancelUpdate}
                updateModal={this.state.updateModal}
            />
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({
            ...this.state,
            id: id
        }, this.props.detailProduct(id))
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