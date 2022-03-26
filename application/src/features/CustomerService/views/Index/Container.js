import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchTableCustomerService} from "../../redux/actions";
import {detailCustomer} from "../../../Customer/redux/actions";

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
        let {detail} = this.props.customer;
        return (
            <President
                customers={[]}
                currentCustomer={detail.data}
                currentCustomerLoading={detail.loading}
                handleTableChanges={this.handleTableChange}
                {...this.props.customerService.list}
            />
        )
    }

    componentDidMount() {
        this.props.fetchTableCustomerService({});
        this.props.detailCustomer(1);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTableCustomerService: (data) => {
            dispatch(fetchTableCustomerService(data));
        },
        detailCustomer           : (id) => {
            dispatch(detailCustomer(id));
        },
    };
}

function mapStateToProps(state) {
    return {
        customerService: state.customerService,
        customer       : state.customer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)