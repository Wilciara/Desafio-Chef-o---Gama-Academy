import { db } from '../db/index';
import { DataTypes } from 'sequelize';

export const Vaga = db.define('vagas', {
    id_vaga: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    localidade: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.FLOAT
    },
    sobre: {
        type: DataTypes.TEXT
    },
    requisitos: {
        type: DataTypes.TEXT
    },
    infos_adicionais: {
        type: DataTypes.TEXT
    }
});