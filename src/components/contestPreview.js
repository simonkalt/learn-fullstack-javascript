import React, { Component } from 'react'
import PropTypes from 'prop-types';

class contestPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.id);
        console.log(this.props.contestName);
    }
    render() {
        return (
            <div>
                <div className="link ContestPreview" onClick={this.handleClick}>
                    <div className="category-name">
                        {this.props.categoryName}
                    </div>
                    <div className="contest-name">
                        {this.props.contestName}
                    </div>
                </div>
            </div>
        )
    }
}

contestPreview.propTypes = {
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default contestPreview;