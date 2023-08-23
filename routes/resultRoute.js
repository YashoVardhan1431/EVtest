const  express = require('express')

const CCH = require("../controllers/CCH")

const router = express.Router();

router.get('/masterData', CCH.combArray)
//router.get('/callData', CHH.result)

module.exports = router;