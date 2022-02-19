import React, {Component} from 'react';
import {AntButton} from "../AntButton";
import {Link} from "react-router-dom";

class CustomComponent extends Component {
    render() {
        let {group_type} = this.props
        group_type       = group_type !== undefined ? group_type : 'n'

        return (
            <div className="group-action">
                <div className="action-item">
                    {group_type === 'u' ?
                        <AntButton type="primary" htmlType="submit" {...this.props}>
                            Cập nhật
                        </AntButton>
                        :
                        <AntButton type="primary" htmlType="submit" {...this.props}>
                            Lưu
                        </AntButton>
                    }
                </div>

                {group_type === 'u' ?
                    <div className="action-item">
                        <AntButton danger htmlType="submit" {...this.props}>
                            Xoá
                        </AntButton>
                    </div>
                     : null
                }

                <div className="action-item">
                    <Link to={'/'}>
                        <AntButton {...this.props}>
                            Quay lại
                        </AntButton>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CustomComponent