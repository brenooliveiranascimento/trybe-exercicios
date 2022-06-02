
const generateEmail = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {name:fullName, email:`${email}@trybe.com`}
}

const newEmployees = (callback) => {
  const employees = {
    id1:callback('Breno Nascimento'),
    id2:callback('Itachi Uchia'),
    id3:callback('Caio Nascimento'),
    id4:callback('Julio Nascimento'),
  }
  return employees;
};

console.log(newEmployees(generateEmail))