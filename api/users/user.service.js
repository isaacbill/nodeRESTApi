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
    },
    getUsers: callback=>{
        pool.query(
            `select staff_id,staff_name,email,phone,address,job_position,department_id from employee`,
        [],
        (error, results, fields)=>{
            if (error) {
               return callback(error);
            }
            return callback(null, results)
        }
        );
    },
    getUserByUserId:(staff_id,callback)=>{
        pool.query(
           `select staff_id,staff_name,email,phone,address,job_position,department_id from employee where staff_id = ?`,
            [staff_id],
            (error, results, fields)=>{
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateUser: (data,callback)=>{
        pool.query (
            `update  employee set staff_name=?,email=?,phone=?,address=?,job_position=?,department_id=?,password=? where staff_id=?`,
            [
                data.staff_name,
                data.email,
                data.phone,
                data.address,
                data.job_position,
                data.department_id,
                data.password,
                data.staff_id
            ],
            (error,results,fields) => {
                if (error) {
                 callback(error)
                }
                return callback(null,results);
            }
        );
    },
    deleteUser: callback=>{
        pool.query(
            `delete from employee where staff_id=?`,
            [data.staff_id],
            (error,results,fields) => {
                if (error) {
                return callback(error)
                }
                return(null,results[0]);
            }
        );
    },
    getUserByUserEmail:(email,callback)=>{
        pool.query(
            `select * from employee where email = ?`,
            [email],
            (error,results,fields)=>{
                if (error) {
                    callback(error);
                }
                return callback(null,results[0]);
            }
        );
    }


};
