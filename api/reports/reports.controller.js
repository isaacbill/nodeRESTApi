const{
getGeneralReport,
findReportByCategory
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
    findReportByCategory:(req,res)=>{
        const category_id  = req.params.category_id;
        findReportByCategory(category_id,(err,results)=>{
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