import React,{Component} from 'react'
import RouterConfig from './config'
import {BrowserRouter as Router,Switch, Route,Redirect} from 'react-router-dom'




export default class RouterSetting extends Component{
    render() {
        return(
            <Router>
                <Switch>
                
                   {
                       RouterConfig.map((item) =>  {
                          const route = r => {
                            return(
                                <Route
                                key={r.pathname}
                                path={r.pathname}
                                component={r.component}
                                />
                            )
                          }
                          return item.component ?  route(item) : item.children.map(r => route(r)) 
                       })
                   }
                    <Redirect  from="/" to="/login" exact />
                    <Redirect from="**" to="/error"/>
                </Switch>
              
            </Router>
        )
    }
}

