/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {
    // Initialize ledger
    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');    

        
        console.info('============= END : Initialize Ledger ===========');
    }
    //Store subject attributes on the legder
    async recordAttribute(ctx, attributeKey, attribute) {
       
        const iterator = await ctx.stub.getStateByRange("","");
      const allKeys=[];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                const Key = res.value.key;
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                break;
            }
        }

        allKeys.forEach(element=> {if (element==attributeKey)
        {throw new Error(`${attributeKey} is already exist you can update attribute using UpdateAttribute function`);
        }
        });

        console.info('============= START : Record attribute ===========');
       await ctx.stub.putState(attributeKey, JSON.stringify(attribute));
       return "successfully submitted!";
    }


    //Update and existing attribute
    async UpdateAttribute(ctx, attributeKey, newAttributevalue){
        console.info('============= START : Record attribute ===========');
        await ctx.stub.putState(attributeKey, JSON.stringify(attribute));
        return "successfully submitted!";
    }

    //Query specific subject attribute based on subjectKey
    async QueryUserAttribute(ctx, key) {
       
        let attributeBytes = await ctx.stub.getState(key);
        if (!attributeBytes || attributeBytes.length ===0){
            throw new Error(`${key} does not exist`);
        }
        var attribute = JSON.parse(attributeBytes);
        console.info ('this is attributeBytes:', attributeBytes);
        console.info('this is my attribute');
        return attribute;
       
    }

    //Query all data
    async queryAll(ctx) {
        const iterator = await ctx.stub.getStateByRange("","");

      const allResults=[];
      const allKeys=[];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }

                allResults.push({ Key, Record });
                allKeys.push(Key);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }  
    }
    

}

module.exports = FabCar;