const getOneById = async (table, id) => {
  if(!table || !id) {
    throw new Error(`Invalid call: getOneById(${table}, ${id})`)
  }
  // TODO: get record from the given table based on given id
  const record = {}
  return record
}

module.exports = {
  getOneById
}