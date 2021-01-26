import React, { Component } from 'react'

 class TabTwo extends Component {
     constructor(props){
         super(props)
         //params传参
         console.log(props.location.query.name,'query取值this.props.location.query.name')
     }
    render() {
        return (
            <div>
                TabTwo页面——query取值this.props.location.query.name
            </div>
        )
    }
}
export default TabTwo