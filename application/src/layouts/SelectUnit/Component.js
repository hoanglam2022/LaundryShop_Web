import React, {Component} from 'react';
import {Select} from "antd";

class CustomComponent extends Component {
    render() {
        const masters = ["Chiếc", "Kiện", "Kg", "Tạ", "Tấn",]
        return (
            <Select defaultValue="Chiếc">
                {
                    masters.map((value, index, array)=>{
                        return (
                            <Select.Option value={value} key={index}>{value}</Select.Option>
                        )
                    })
                }
            </Select>
        )
    }
}

export default CustomComponent