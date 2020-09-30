const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let firstLattersOfMembers = [];

  members.forEach((member) => {
    if (typeof member === 'string') {
      firstLattersOfMembers.push(member.trim().slice(0,1).toUpperCase());
    }
  });

  return firstLattersOfMembers.sort().join('');
};
