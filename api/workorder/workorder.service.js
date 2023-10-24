const pool = require('../../config/database');

module.exports={
    getWorkOrders: callback=>{
        pool.query(
            `select work_order_number,work_description,work_order_owner,date_lodged,date_due,date_to_close,date_completed,date_closed,financial_year,financial_quarter,work_status,system_name, internal_priority,staff_id,category_id 
            ,department_id,cls_id,del,severity_id,sta_id,source from work_order `,
            [],
            (error, results, fields)=>{
                if (error) {
                   return callback(error);
                }
                return callback(null, results);
            }
            );
        },
    searchWorkOrders:(sta_id, callback)=>{
        pool.query(
            `SELECT * FROM work_order WHERE sta_id=?`,
            [sta_id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                 }
                 return callback(null, results);
            }
        );
    },
    countWorkOrders: (sta_id, callback) => {
        pool.query(
            
            `SELECT COUNT(*) AS count FROM work_order WHERE sta_id=?`,
            [sta_id],
            (error, countResults, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, countResults);
            }
        );
    }
    
    
    };
   
    