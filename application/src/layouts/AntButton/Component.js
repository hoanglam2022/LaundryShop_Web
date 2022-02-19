import React, {Component} from 'react';
import {Button, Form} from "antd";

class CustomComponent extends Component {
    render() {
        const {type, htmlType, size, disabled, block} = this.props

        return (
            <Button type={type}
                    htmlType={htmlType}
                    size={size}
                    disabled={disabled}
                    block={block}
            >
                {this.props.children}
            </Button>
        )
    }
}

export default CustomComponent