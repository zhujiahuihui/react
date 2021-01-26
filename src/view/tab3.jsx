import React, { Component } from 'react'

 class TabThree extends Component {
     constructor(props){
         super(props)
         //params传参
         console.log(props.location.state.name,'state取值this.props.location.state.name')
     }
    render() {
        return (
            <div>
                TabThree页面——state取值this.props.location.state.name
            </div>
        )
    }
}
export default TabThree