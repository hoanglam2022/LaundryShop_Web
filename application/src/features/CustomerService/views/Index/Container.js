import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchTableCustomerService} from "../../redux/actions";

class Container extends Component {
    handleTableChange = (pagination, filters, sorter) => {
        this.props.fetchTableCustomerService({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    render() {
        return (
            <President handleTableChanges={this.handleTableChange} {...this.props.service.list} />
        )
    }

    componentDidMount() {
        this.props.fetchTableCustomerService({});
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTableCustomerService: (data) => {
            dispatch(fetchTableCustomerService(data));
        },
    };
}

function mapStateToProps(state) {
    return {
        customerService: state.customerService,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)