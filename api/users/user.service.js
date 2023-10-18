const pool = require('../../config/database');

module.exports ={
    create:(data, callback)=>{
        pool.query (
            `insert into employee (staff_id,staff_name,email,phone,address,job_position,department_id,password)
            values(?,?,?,?,?,?,?,?)`,
            [
                data.staff_id,
                data.staff_name,
                data.email,
                data.phone,
                data.address,
                data.job_position,
                data.department_id,
                data.password
            ],
            (error,results,fields) => {
                if (error) {
                return callback(error)
                }
                return(null,results)
            }
        );
    }

};
