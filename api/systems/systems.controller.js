const {
    getOrderBySystems
} = require('./systems.service');

module.exports={
    getOrderBySystems:(req,res)=>{
        getOrderBySystems((err,results)=>{
            if (err) {
                console.log(err);
            }
            return res.json({
                success:1,
                data:results
            });
        });

    }
}