const Pool = require('pg').Pool;
const database = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lol_champs_cart",
    password: "postgres",
    port: 5432
});

module.exports = {
    getAllChampions: (req, res) => {
        database.query(
            "SELECT * from champions order by id",
            (error, result) => {
                if (error) {
                    throw error
                } else {
                    console.log(result.rows)
                    res.status(200).send(result.rows)
                }
            }
        )
    },
    buyChampion: (req, res) => {
        if(req.body.id){
            database.query(
                "UPDATE champions SET available = false where id = $1",
                [req.body.id],
                (error, result) => {
                    if (error) {
                        throw error
                    } else {
                        res.status(200).send("Finalised successfully")
                    }
                }
            )
        } else {
            res.status(500).send("Missing Id")
        }
    },
    restore: () => {
        database.query(
            "UPDATE champions SET available = true"
        )
    }
}