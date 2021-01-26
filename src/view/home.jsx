import React, { Component } from 'react'
import { Button } from 'antd';
import { NavLink,Route,Switch } from 'react-router-dom';
import TabOne from './tab1';
import TabTwo from './tab2';
import TabThree from './tab3';
export default class Home extends Component {
    constructor(props){
        super(props)
        this.tab=this.tab.bind(this)
    }
    tab(){

        // this.props.history.push({path:'/home/tabtwo',query:{name:'朱佳辉'}})
    }
    render() {
        return (
            <div>
            
                <NavLink to={'/home/tabone/'+'2'}>  <Button type="primary">tab1(路由params传参)</Button></NavLink>
                <NavLink to={{pathname:'/home/tabtwo',query:{name:'朱佳慧'}}}><Button type="primary" >tab2(路由query传参)</Button></NavLink>
                <NavLink to={{pathname:'/home/tabthree',state:{name:'李四'}}}><Button type="primary" >tab3(路由state传参)</Button></NavLink>
                
               <div>
                   <Switch>
                   <Route path='/home/tabone/:id' component={TabOne}/>
                   <Route path='/home/tabtwo' component={TabTwo}/>
                   <Route path='/home/tabthree' component={TabThree}/>
                   </Switch>
                    
                </div>
                
            </div>
        )
    }
}
