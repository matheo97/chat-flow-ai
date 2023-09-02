import { User } from './User.entity';
import { Audience } from './Audience.entity';
import { AudiencePhoneNumber } from './AudiencePhoneNumber.entity';
import { Auditable } from './Auditable';
import { Campaing } from './Campaing.entity';
import { Company } from './Company.entity';
import { CompanyNumber } from './CompanyNumber.entity';
import { Template } from './Template.entity';

const entities = [
  User,
  Audience,
  AudiencePhoneNumber,
  Campaing,
  Auditable,
  Company,
  CompanyNumber,
  Template,
];

export {
  User,
  Audience,
  AudiencePhoneNumber,
  Campaing,
  Auditable,
  Company,
  CompanyNumber,
  Template,
};

export default entities;
