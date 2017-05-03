/* SINGLETON */
class Database {
  constructor() {
    this.admins = []
    this.students = []
    this.volunteers = []
  }

  /**
   * Adds user data to appropriate field
   * @param {String} field admins / students / volunteers
   * @param {Object} userData Generated Data
   * @return {Null}
   */
  add(field, userData) {
    console.log(`adding userData to ${field}`)
    this[field].push(userData)
  }

  /**
   * Find by field
   * @param  {String} field admins / students / volunteers
   * @param  {Number} id    Index of entry
   * @return {Object}       Data object
   */
  find(field, id) {
    console.log(`finding user ${id} in ${field}`)
    return this[field][id]
  }

  /**
   * Returns all values for the selected field
   * @param  {String} field admins / students / volunteers
   * @return {Array}       return Array<UserData>
   */
  all(field) {
    console.log(`returning all users in ${field}`)
    return this[field]
  }
}

const db = new Database()
