import React, {Component} from 'react';
import {FormCustomerService} from "../../components/FormCustomerService";

class President extends Component {
    render() {
        return (
            <div className="features feature-service">
                <FormCustomerService
                    {...this.props}
                />
            </div>
        )
    }
}

export default President;