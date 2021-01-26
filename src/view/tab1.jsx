import React, { Component } from 'react'

 class TabOne extends Component {
     constructor(props){
         super(props)
         //params传参
         console.log(props.match.params.id,'params取参数——props.match.params.id')
     }
    render() {
        return (
            <div>
                TabOne页面——params取参数——props.match.params.id
            </div>
        )
    }
}
export default TabOne