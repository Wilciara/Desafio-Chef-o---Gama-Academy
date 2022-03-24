import { db } from '../db/index'
import { DataTypes } from 'sequelize'

const Empresa = db.define('empresa', {
    id_empresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Empresa;