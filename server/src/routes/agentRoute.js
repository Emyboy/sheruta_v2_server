
const agentRoute = require('express').Router();
const agetnController = require('../controllers/agentController');

const {
    becomeAnAgent,
    updateAgentAccount
} = agetnController;

agentRoute.post('/agent', becomeAnAgent);
agentRoute.put('/agent', updateAgentAccount);

module.exports = agentRoute;
