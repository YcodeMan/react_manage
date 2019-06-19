import React from "react"
import { Modal
} from 'antd';
import WrappedNormalLoginForm from "../formCom"
export default class ModalCom extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           visible:""
       }

       this.state.visible = this.props.modalStatus;
       console.log(   this.state.visible)
   }
    componentWillReceiveProps(nextProps, nextContext) {
       this.state.visible = nextProps.modalStatus
    }

    render(){
        return (
            <Modal
                title="修改商家信息"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
            >
            <WrappedNormalLoginForm/>
            </Modal>
        )
    }
    handleOk(){
        this.setState({
            visible: false,
        });
    }
    handleCancel(){
        this.setState({
            visible: false,
        })
    }
}