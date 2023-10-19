const{
 getWorkOrders,
 searchWorkOrders
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
        const { open, pending, overdue, New, closed } = req.query;
        searchWorkOrders(open, pending, overdue, New,closed,(error,results)=>{
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
                data: results
             });
        } );

    }
};