const pool = require('../../config/database');

module.exports={
    getWorkOrders: callback=>{
        pool.query(
            `select work_order_number,work_description,work_order_owner,date_lodged,date_due,date_to_close,date_completed,date_closed,financial_year,financial_quarter,work_status,system_name internal_priority,staff_id,category_id 
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
    searchWorkOrders:(open, pending, overdue, New, closed, callback)=>{
        pool.query(
            `SELECT * FROM work_order WHERE sta_id IN (?, ?, ?, ?, ?)`,
            [New, pending, closed, overdue, open],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                 }
                 return callback(null, results);
            }
        );
    },
    countWorkOrders: (open, pending, overdue, New, closed, callback) => {
        pool.query(
            `SELECT 
                COUNT(CASE WHEN sta_id = ? THEN 1 END) AS open_count,
                COUNT(CASE WHEN sta_id = ? THEN 1 END) AS pending_count,
                COUNT(CASE WHEN sta_id = ? THEN 1 END) AS closed_count,
                COUNT(CASE WHEN sta_id = ? THEN 1 END) AS overdue_count,
                COUNT(CASE WHEN sta_id = ? THEN 1 END) AS new_count
            FROM work_order`,
            [open, pending, closed, overdue, New],
            (error, countResults, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, countResults[0]);
            }
        );
    }
    
    
    };
   
    