const express = require('express');
const RfcService = require('../services/rfc')

const {
    createRfcSchema,
    updateRfcSchema,
    rfcIdSchema

} = require('../utils/mocks/schemas/rfc')

const validationHandler = require ('../utils/mocks/middleware/validationHandler')

function rfcApi(app){
    const router = express.Router();
    app.use("/api/rfc", router);

    const rfcService = new RfcService();
//////////
    router.get("/", async function(req,res,next){
        const { tags } = req.query;

        try {
            const rfc = await rfcService.getRfc({ tags })

            res.status(200).json({
                data: rfc,
                message: '  rfc listed'
            })
        } catch (err) {
            next(err);
            
        }
    })

    router.get("/:rfcId", validationHandler( {rfcId: rfcIdSchema}, 'params'), async function(req,res,next){
        const {rfcId} = req.params;

        try {
            const rfc = await rfcService.getRfc({rfcId})

            res.status(200).json({
                data: rfc,
                message: 'rfc retrieved'
            })
        } catch (err) {
            next(err);
            
        }
    })

    router.post("/", validationHandler( createRfcSchema), async function(req,res,next){
        const {body: rfc} = req;
        try {
            const createRfcId = await rfcService.createRfc({rfc})

            res.status(201).json({
                data: createRfcId,
                message: 'rfc created'

                
            })
        } catch (err) {
            next(err);
            
        }
    })


    router.put("/:rfcId", 
    validationHandler({ rfcId: rfcIdSchema }, 'params'),
    validationHandler(updateRfcSchema),
    async function(req,res,next){
        const {rfcId} = req.params;
        const {body: rfc} = req;
        try {
            const updateRfcId = await rfcService.updateRfc({rfcId, rfc});

            res.status(200).json({
                data: updateRfcId,
                message: 'rfc updated'
            })
        } catch (err) {
            next(err);
            
        }
    })

    
    router.delete("/:rfcId",
    validationHandler({ rfcId: rfcIdSchema }, 'params'),
     async function(req,res,next){
        const {rfcId} = req.params;
        try {
            const deleteRfcId = await rfcService.deleteRfc({rfcId})

            res.status(200).json({
                data: deleteRfcId,
                message: 'rfc deleted'
            })
        } catch (err) {
            next(err);
            
        }
    })
}

module.exports = rfcApi;