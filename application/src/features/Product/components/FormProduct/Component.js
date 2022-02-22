import React, {Component} from 'react';
import {Select} from 'antd';
import {
    AntCard,
    AntForm,
    AntFormItem,
    AntInput,
    AntInputNumber,
    AntInputTextArea,
    FormGroupAction, FormGroupActionBack, FormGroupActionDelete, FormGroupActionSave, FormGroupActionUpdate, Loading,
} from "../../../../layouts";

class CustomComponent extends Component {
    render() {
        let {
                formLoading,
                dataDefault,
                errors,
                createLoading,
                updateLoading,
                removeLoading,
            } = this.props

        const masters    = ["Chiếc", "Kiện", "Kg", "Tạ", "Tấn",]
        errors           = errors !== undefined ? errors : {};
        dataDefault      = dataDefault !== undefined ? dataDefault : {};
        const {id}       = dataDefault;
        formLoading      = formLoading === true;
        const form_title = id !== null && id !== undefined ? "Chi tiết sản phẩm" : "Thêm sản phẩm";

        return (
            <AntCard
                title={form_title}
                bordered={true}
            >
                {
                    formLoading ? <Loading/>
                        :
                        <AntForm className="form-center"
                                 layout="vertical"
                                 onFinish={(data => this.props.onFinish(data))}
                        >
                            <AntFormItem
                                required={true}
                                label="Tên sản phẩm"
                                name="name"
                                errors={errors.name}
                                initialValue={dataDefault.name}
                            >
                                <AntInput/>
                            </AntFormItem>
                            <AntFormItem
                                required={true}
                                label="Giá"
                                name="price"
                                errors={errors.price}
                                initialValue={dataDefault.price}
                            >
                                <AntInputNumber/>
                            </AntFormItem>
                            <AntFormItem
                                required={true}
                                label="Đơn vị"
                                name="unit"
                                errors={errors.unit}
                            >
                                <Select defaultValue={dataDefault.unit} placeholder="Chọn đơn vị">
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
                                initialValue={dataDefault.description}
                            >
                                <AntInputTextArea rows={10}/>
                            </AntFormItem>
                            <AntFormItem className="text-center">
                                {id
                                    ?
                                    <FormGroupAction>
                                        <FormGroupActionUpdate loading={updateLoading}/>
                                        <FormGroupActionDelete loading={removeLoading}/>
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
                }
            </AntCard>
        )
    }
}

export default CustomComponent