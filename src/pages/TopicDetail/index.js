import React, { Component } from 'react'

class TopicDetail extends Component {
    render() {
        return (
            <div>
                TopicDetail
                {this.props.match.params.topicId}
            </div>
        )
    }
}

export default TopicDetail
