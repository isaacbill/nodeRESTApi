const{
getGeneralReport
}= require('./reports.service')

module.exports={
    getGeneralReport:(req,res)=>{
        getGeneralReport((err,results)=>{
            if (err) {
                console.log(err);
            }
            return res.json({
                success:1,
                data:results
            });
        });

    },
}