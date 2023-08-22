const CCH = require("../data/CCH")

const callRecord = require("../data/callRecord")

const customerCommunication = (req,res,next) =>{
    res.send(CCH)
}

const callRecordData = (req,res,next) =>{
    res.send(callRecord)
}

module.exports = {
    customerCommunication,
    callRecordData
};