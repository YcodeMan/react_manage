import React from 'react'
import Error from '@static/404.gif'
import './index.scss'
export default (...res) => {
        return <div className='error'>
        <p><img src={Error} alt="404页面" /></p>
        <h1>抱歉，这个页面已经被外星人绑架了</h1>
        <p>5秒钟后将带您返回地球</p>
    </div>
}