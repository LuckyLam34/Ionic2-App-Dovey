import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class SqlStorage {

  public db: SQLiteObject;

  constructor(public sqlite: SQLite, public platform: Platform) {
    this.platform.ready().then(() => {
      this.initializeClientDatabase();

    });
  }

  initializeClientDatabase() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then(db => {
      this.db = db;

      // return this.db.executeSql('CREATE TABLE IF NOT EXISTS client (client_id INT(11) PRIMARY KEY AUTOINCREMENT,lo_id INT(11) NOT NULL, client_name VARCHAR(100) DEFAULT NULL, email_address VARCHAR(100) DEFAULT NULL, phone_number VARCHAR(15) DEFAULT NULL, address TEXT, city VARCHAR(100) DEFAULT NULL, state VARCHAR(100) DEFAULT NULL, pin VARCHAR(10) DEFAULT NULL, remarks TEXT, is_active TINYINT(4) DEFAULT '0', created_at timestamp NOT NULL DEFAULT '0000- 00 - 00 00:00:00', updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE KEY lo_id_email_address (lo_id,email_address),UNIQUE KEY lo_id_phone_number (lo_id,phone_number))', []).then(data => {
      //   console.log('**after CREATE TABLE check', data);
      // })
      let queryString = 'CREATE TABLE IF NOT EXISTS client (client_id INT(11) PRIMARY KEY AUTOINCREMENT,lo_id INT(11) NOT NULL, client_name VARCHAR(100) DEFAULT NULL, email_address VARCHAR(100) DEFAULT NULL, phone_number VARCHAR(15) DEFAULT NULL, address TEXT, city VARCHAR(100) DEFAULT NULL, state VARCHAR(100) DEFAULT NULL, pin VARCHAR(10) DEFAULT NULL, remarks TEXT, is_active TINYINT(4) DEFAULT , created_at timestamp NOT NULL DEFAULT , updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, UNIQUE KEY lo_id_email_address (lo_id,email_address),UNIQUE KEY lo_id_phone_number (lo_id,phone_number))'

      return this.db.executeSql(queryString, []).then(data => {
        alert(data);
      });
    });
  }

  hello() {
    this.db.executeSql('insert or replace into kv(client_id, lo_id, client_name, email_address, phone_number, address, city, state, pin, is_active, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [1, 1, 'client_name', 'email_address', 'phone_number', 'address', 'city', 'state', 'pin', 'true', 1505234710723, 1505234710723]).then(data => {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    return this.db.executeSql('SELECT * FROM client', []).then(data => {
      alert(data);
    });
  }

}