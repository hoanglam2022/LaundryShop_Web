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
                    onOk={this.props.onUpdate}
                    onCancel={this.props.onUpdateCancel}
                    visible={this.props.updateModalVisible}
                    message="Cập nhật thông tin sản phẩm ?"
                />
            </div>
        )
    }
}

export default President;