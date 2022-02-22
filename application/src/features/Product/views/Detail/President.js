import React, {Component} from 'react';
import {FormProduct} from "../../components";
import {ModalConfirm} from "../../../../layouts";

class President extends Component {
    render() {
        return (
            <div className="features feature-product">
                <FormProduct
                    {...this.props}
                />
                <ModalConfirm
                    onOk={this.props.onOkUpdate}
                    onCancel={this.props.onCancelUpdate}
                    visible={this.props.updateModal}
                    message="Cập nhật thông tin sản phẩm ?"
                />
            </div>
        )
    }
}

export default President;