/**
 * 实现组件按需加载
 */
import React,{Component} from 'react'
export default (importComponet) => 
    class AsyncComponent extends Component{
        constructor(props) {
            super(props)
            this.state = {
                component: null
            }
        }
        async componentDidMount() {
            let {default: component} = await  importComponet()
            this.setState({component})
           
        }

        render() {
            let C = this.state.component
            return C ? <C {...this.props}/> : null
        }
    }
