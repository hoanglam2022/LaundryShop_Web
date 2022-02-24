import React, {Component} from 'react';
import {Select} from 'antd';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput,
    AntInputNumber,
    AntInputTextArea,
    FormGroupAction, FormGroupActionBack, FormGroupActionDelete, FormGroupActionSave, FormGroupActionUpdate,
} from "../../../../layouts";

class CustomComponent extends Component {
    render() {
        const masters = ["Chiếc", "Kiện", "Kg", "Tạ", "Tấn",]

        let {
                formLoading,
                data,
                errors,
                createLoading,
                updateLoading,
                deleteLoading,
                onShowConfirmDelete,
                isDetail
            } = this.props

        errors = errors !== undefined ? errors : {};
        data   = data !== undefined ? data : {};

        const {name, price, unit, description} = data;

        formLoading      = formLoading === true;
        const form_title = isDetail === true ? "Chi tiết sản phẩm" : "Thêm sản phẩm";
        return (
            <AntCard
                title={form_title}
                bordered={true}
                loading={formLoading}
            >
                <AntForm
                    className="form-center"
                    layout="vertical"
                    onFinish={(data => this.props.onFinish(data))}
                    initialValues={{name: name, price: price, unit: unit, description: description}}
                >
                    <AntFormItem
                        required={true}
                        label="Tên sản phẩm"
                        name="name"
                        value={name}
                        errors={errors.name}
                    >
                        <AntInput/>
                    </AntFormItem>
                    <AntFormItem
                        required={true}
                        label="Giá (VNĐ)"
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
                        <Select placeholder="Chọn đơn vị">
                            {
                                masters.map((value, index, array) => {
                                    return (
                                        <Select.Option value={value} key={index}>{value}</Select.Option>
                                    )
                                })
                            }
                        </Select>
                    </AntFormItem>
                    <AntFormItem
                        label="Mô tả"
                        name="description"
                        errors={errors.description}
                    >
                        <AntInputTextArea rows={10}/>
                    </AntFormItem>
                    <AntFormItem className="text-center">
                        {isDetail
                            ?
                            <FormGroupAction>
                                <FormGroupActionUpdate loading={updateLoading}/>
                                <FormGroupActionDelete
                                    htmlType="button"
                                    onClick={onShowConfirmDelete}
                                    loading={deleteLoading}/>
                                <FormGroupActionBack/>
                            </FormGroupAction>
                            :
                            <FormGroupAction>
                                <FormGroupActionSave loading={createLoading}/>
                                <FormGroupActionBack/>
                            </FormGroupAction>
                        }

                    </AntFormItem>
                </AntForm>
            </AntCard>
        )
    }
}

export default CustomComponent