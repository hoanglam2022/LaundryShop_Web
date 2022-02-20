import React, {Component} from 'react';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput,
    AntInputNumber,
    AntInputTextArea, FormGroupAction, SelectUnit
} from "../../../../layouts";

class President extends Component {
    render() {
        const {product} = this.props
        return (
            <div className="features feature-product">
                <AntCard
                    title="Chi tiết sản phẩm"
                    bordered={true}
                >
                    <AntForm className="form-center"
                             onFinish={(data => this.props.handleLogin(data))}
                             layout="vertical"
                    >
                        <AntFormItem
                            initialValue={product}
                            name="name"
                            label="Tên sản phẩm"
                            required={true}
                        >
                            <AntInput/>
                        </AntFormItem>

                        <AntFormItem
                            name="price"
                            label="Giá"
                            required={true}
                        >
                            <AntInputNumber/>
                        </AntFormItem>
                        <AntFormItem
                            name="unit"
                            label="Đơn vị">
                            <SelectUnit/>
                        </AntFormItem>
                        <AntFormItem
                            name="description"
                            label="Mô tả"
                            required={true}
                        >
                            <AntInputTextArea rows={10}/>
                        </AntFormItem>
                        <AntFormItem className="text-center">
                            <FormGroupAction/>
                        </AntFormItem>
                    </AntForm>
                </AntCard>
            </div>
        )
    }
}

export default President;