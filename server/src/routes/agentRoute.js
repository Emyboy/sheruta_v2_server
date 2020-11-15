
const agentRoute = require('express').Router();
const agetnController = require('../controllers/agentController');

const {
    becomeAnAgent,
    updateAgentAccount,
    getAgentByUserId,
    getAllAgent,
    getAgentDataByName
} = agetnController;

agentRoute.post('/agent', becomeAnAgent);
agentRoute.get('/agent/name/:company_name', getAgentDataByName);
agentRoute.put('/agent', updateAgentAccount);
agentRoute.get('/agent/all', getAllAgent);
agentRoute.get('/agent/:user_id', getAgentByUserId);

module.exports = agentRoute;
