const{
 getWorkOrders,
 searchWorkOrders,
 countWorkOrders
} = require('./workorder.service');

module.exports={
    getWorkOrders:(req,res)=>{
        getWorkOrders((err,results)=>{
            if (err) {
                console.log(err);
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    searchWorkOrders: (req,res)=>{
        const  sta_id  = req.params.sta_id;
        searchWorkOrders(sta_id,(error,results)=>{
            if (error) {
                console.error(error);
                return res.status(500).json({
                    success: 0,
                    message: "Database error"
                });
            }
            if (!results || results.length === 0) {
                return res.json({
                    success: 0,
                    message: "Search record not found"
                });
            }
            return res.json({ 
                success: 1, 
                data: results,
             });
        } );

   
},
countWorkOrders: (req,res)=>{
    const sta_id = req.params.sta_id;
        countWorkOrders(sta_id, (countError, countResults)=>{
            if (countError) {
                console.error(countError);
                return res.status(500).json({
                    success: 0,
                    message: "Database error"
                });
            } 
            return res.json({
                success: 1,
                countResults: countResults
            });
        }) ;             
}
}