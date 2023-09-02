import { genSaltSync, hashSync } from 'bcryptjs';

const salt = genSaltSync(+process.env.PASSWORD_SALT_ROUNDS);

export const companySeed = [
  {
    id: 'cb9dee02-c7b1-4d7c-9b2c-253176e04a32',
    name: 'Admin Company',
    address: '63 Glenholme St.',
    email: 'admin@gmail.com',
    phone: '9876543211',
  },
];

export const userSeed = [
  {
    id: '7ecfd035-1fa2-4a94-a868-a8257d544ade',
    name: 'Admin',
    email: 'msalazar9742@gmail.com',
    role: 'admin',
    phone: '9876543212',
    companyId: 'cb9dee02-c7b1-4d7c-9b2c-253176e04a32',
    password: hashSync('chatflowia', salt),
  },
];
