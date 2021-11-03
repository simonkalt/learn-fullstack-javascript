import React from "react"
import PropTypes from 'prop-types';
import ContestPreview from './contestPreview';

const ContestList = ({ contests, onContestClick }) => (
    <div className="ContestList">
        <div id="ContestPreview">
            {Object.keys(contests).map(contestId =>
                <ContestPreview
                    key={contestId}
                    onClick={onContestClick}
                    {...contests[contestId]} />
            )}
        </div>
    </div>
);

ContestList.propTypes = {
    contests: PropTypes.object,
    onContestClick: PropTypes.func.isRequired,
}

export default ContestList;