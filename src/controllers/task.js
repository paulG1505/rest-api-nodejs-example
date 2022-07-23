import { connect } from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('Select * from tasks')
    res.json(rows)
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("Select * from tasks where id = ?", [
        req.params.id
    ]);
    rows.length > 0 ? res.json(rows[0]) : res.json({ result: "No hay datos" })
}

export const getTasksCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('Select count(*) from tasks')
    res.json(rows[0]["count(*)"])
}

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('Insert into tasks (title,description) values (?,?)', [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: result.insertId,
        ...req.body
    })
}

export const deleteTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("delete from tasks where id = ?", [
        req.params.id
    ]);
    result.affectedRows > 0 ? res.json({ status: 'registro eliminado' }) : res.json({ status: "No se encontro ID" })
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("update tasks set ? where id = ?", [
        req.body,
        req.params.id
    ])
    //res.sendStatus(204)
    result.affectedRows > 0 ? res.json({ status: 'Registro actualizado' }) : res.json({ status: "No se encontro ID" })
}