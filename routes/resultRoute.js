const  express = require('express')

const customerCommunication = require("../controllers/CCH")
const callRecordData = require("../controllers/CCH")

const router = express.Router();

router.get('/masterData', customerCommunication)
router.get('/callData', callRecordData)

module.exports = router;