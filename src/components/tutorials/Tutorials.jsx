import React, { Component } from 'react'
import ReactPlayerVideo from './reactPlayer/ReactPlayer'
import ReactPlayerAdmin from './'


export default class Tutorials extends Component {
    render() {
        return (
            <div>
               <ReactPlayerVideo/>
               <ReactPlayerAdmin/> 
            </div>
        )
    }
}

export default Tutorials
