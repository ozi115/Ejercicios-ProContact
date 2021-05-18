const {rfcMock} = require ('../utils/mocks/rfc');

class RfcService{
    async getRfcs(){
        const rfc = await Promise.resolve(rfcMock);
        return rfc || [];
    }

    async getRfc(){
        const rfc = await Promise.resolve(rfcMock);
        return rfc || {};
    }

    async createRfc(){
        const createRfc = await Promise.resolve(rfcMock[0].id);
        return createRfc;
    }

    async updateRfc() {
        const updatedRfcId = await Promise.resolve(rfcMock[0].id);
        return updatedRfcId;
    }

    async deleteRfc(){
        const deletedRfcId = await Promise.resolve(rfcMock[0].id);
        return deletedRfcId;
    }
}

module.exports = RfcService;