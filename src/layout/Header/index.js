import React from 'react'

import { Layout } from 'antd'
import HeaderUser from './HeaderUser'

import './index.scss'
const { Header } = Layout;



const HeaderMsg = () => {

    return (
        <Header className="header">
           
            <HeaderUser/>

        </Header>


    )

}
export default HeaderMsg