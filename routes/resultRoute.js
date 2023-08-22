const  express = require('express')

const CCH = require("../controllers/CCH")

const router = express.Router();

router.get('/masterData', CCH.customerCommunication)
router.get('/callData', CCH.callRecordData)

module.exports = router;