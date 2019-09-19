// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      bitrateClickHandler = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
        // console.log(this.state)
      }
      resolutionClickHandler = () => {
          let videoRes = {resolution: '720p'}
        this.setState({
            settings: {...this.state.settings, video: videoRes }
        })
        // console.log(this.state)
      }

    render () {
        return(
            <div>
                <button className ="bitrate" onClick={this.bitrateClickHandler}>bitrate</button>
                <button className ="resolution" onClick={this.resolutionClickHandler}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger