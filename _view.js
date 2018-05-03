import React, {Component} from "react"
import {ViewStream} from "./__view-stream"
import {deviceType} from "./__definitions"

export class View extends Component {

    state = {
        width:0
    }
    componentDidMount(){
        ViewStream.subscribe(width => this.setState({width}))
    }

    

    render(){
        const {width} = this.state
        const child = Array.isArray(this.props.children) ?
        this.props.children.filter(c => deviceType(c.props, width)) :
        this.props.children

        return(
            <span>
                {child}
            </span>
        )
    }

}