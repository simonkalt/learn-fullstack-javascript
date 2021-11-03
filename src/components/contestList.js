import React from "react"
import PropTypes from 'prop-types';
import ContestPreview from './contestPreview';

const ContestList = ({ contests, onContestClick }) => (
    <div className="ContestList">
        <div id="ContestPreview">
            {contests.map(contest =>
                <ContestPreview
                    key={contest.id}
                    onClick={onContestClick}
                    {...contest} />
            )}
        </div>
    </div>
);

ContestList.propTypes = {
    contests: PropTypes.array,
    onContestClick: PropTypes.func.isRequired,
}

export default ContestList;