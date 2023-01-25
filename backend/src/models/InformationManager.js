const AbstractManager = require("./AbstractManager");

class InformationManager extends AbstractManager {
  constructor() {
    super({ table: "information" });
  }

  findById(id) {
    return this.connection.query(
      `select cv, actual_situation, isRemote, isActiveSearch, job, technology, type_of_contract, start_date, localisation_job from ${this.table} where id = ?`,
      [id]
    );
  }

  insert() {
    return this.connection.query(`insert into ${this.table} () values ()`, []);
  }

  update(information) {
    return this.connection.query(
      `update ${this.table} set type_of_contract = ?, starte_date = ?, localisation_job = ?, isRemote = ?, job = ?, technology where id = ?`,
      [
        information.type_of_contract,
        information.starte_date,
        information.localisation_job,
        information.isRemote,
        information.job,
        information.technology,
        information.id,
      ]
    );
  }
}

module.exports = InformationManager;
