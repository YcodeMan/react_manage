import React from 'react'
import Admin from '@components/admin'
import {connect} from 'react-redux'

export default ({location}) => {
     // // 获取queryCode
     let getQueryCode = (code) => {
        let arrQuery = code.split('?')
        return arrQuery[1].split('=')[1]
    }

    let  search = location.search
    let code = getQueryCode(search)
   
    
    return(
        <Admin/>
    )

   
    
}
       
        
