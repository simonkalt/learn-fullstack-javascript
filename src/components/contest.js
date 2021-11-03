import React, { Component } from 'react'
import PropTypes from 'prop-types'

class contest extends Component {
    render() {
        return (
            <div>
                {this.props.description}
            </div>
        )
    }
}

contest.propTypes = {
    description: PropTypes.string.isRequired
}

export default contest;