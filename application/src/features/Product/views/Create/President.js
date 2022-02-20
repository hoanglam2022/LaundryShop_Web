import React, {Component} from 'react';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput,
    AntInputNumber,
    AntInputTextArea, FormGroupAction, FormGroupActionBack, FormGroupActionSave, SelectUnit
} from "../../../../layouts";

class President extends Component {
    render() {
        let {data, errors, loading} = this.props.create
        errors = errors !== undefined ? errors : {};
        return (
            <div className="features feature-product">
                <AntCard
                    title="Thêm sản phẩm"
                    bordered={true}
                >
                    <AntForm className="form-center"
                             layout="vertical"
                             onFinish={(data => this.props.onFinish(data))}
                    >
                        <AntFormItem
                            required={true}
                            label="Tên sản phẩm"
                            name="name"
                            errors={errors.name}
                        >
                            <AntInput/>
                        </AntFormItem>

                        <AntFormItem
                            required={true}
                            label="Giá"
                            name="price"
                            errors={errors.price}
                        >
                            <AntInputNumber/>
                        </AntFormItem>
                        <AntFormItem
                            required={true}
                            label="Đơn vị"
                            name="unit"
                            errors={errors.unit}
                        >
                            <SelectUnit/>
                        </AntFormItem>
                        <AntFormItem
                            label="Mô tả"
                            name="description"
                            errors={errors.unit}
                        >
                            <AntInputTextArea rows={10}/>
                        </AntFormItem>
                        <AntFormItem className="text-center">
                            <FormGroupAction>
                                <FormGroupActionSave loading={loading}/>
                                <FormGroupActionBack/>
                            </FormGroupAction>
                        </AntFormItem>
                    </AntForm>
                </AntCard>
            </div>
        )
    }
}

export default President;