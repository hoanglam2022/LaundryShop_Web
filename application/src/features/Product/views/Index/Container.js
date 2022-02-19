import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {apiGet} from "../../../../common/crud";
import {fetchPaginate} from "../../../../common/crud/actions";

class Container extends Component {
    handleTableChange = (pagination, filters, sorter) => {
        this.props.fetchPaginate('admin/products/', {
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    render() {
        const reducer = this.props.crud;
        const payload = reducer.payload
        const state   = {
            data      : payload.data,
            pagination: {
                current : payload.current_page,
                pageSize: payload.per_page,
                total   : payload.total,
            },
            loading   : reducer.loading,
        };

        return (
            <President handleTableChanges={this.handleTableChange} {...state} />
        )
    }

    componentDidMount() {
        this.props.fetchPaginate('admin/products/');
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiGet: (url, data) => {
            dispatch(apiGet(url, data));
        },

        fetchPaginate: (url, data) => {
            dispatch(fetchPaginate(url, data));
        },
    };
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        crud: state.crud,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)