import express from 'express';
import data from "../src/testData.json";
const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
        contests: contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Tu eres gato mi hermano zapato';
    res.send(contest);
});

export default router;