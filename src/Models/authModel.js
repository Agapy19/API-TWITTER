const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createUser(email, username, name, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        email,
        username,
        name,
        password: hashedPassword,
      },
    });
  }

async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}
async function findUserByUsername(username) {
    return prisma.user.findUnique({
      where: {
        username,
      },
    });
  }



module.exports = {
  createUser,
  findUserByUsername,
  findUserByEmail,
};

