const {
    getOrderBySystems,
    findOrderBySystemName
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

    },
    findByOpenStatus: (req, res) => {
        const systemName = req.params.systemName; // Assuming you're receiving systemName as a parameter
        const staId = 'open'; // Assuming you're searching for open status

        findOrderBySystemName(staId, (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json({
                success: 1,
                data: results,
            });
        });
    },
    
};
