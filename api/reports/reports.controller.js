const{
getGeneralReport,
findReportByCategory,
countReportByCategory
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
    },
    countReportByCategory:(req,res)=>{
        const category_id = req.params.category_id;
        countReportByCategory(category_id,(err,countResults)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database error"
                });
            }
            return res.json({
                success:1,
                countResults: countResults
            });
        });
    }
};