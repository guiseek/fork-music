import { State } from './state.entity';
import { City } from './city.entity';
import { User } from './user.entity';
import { Company } from './company.entity';
import { Address } from './address.entity';
import { Location } from './location.entity';
import { Service } from './service.entity';
import { WageTier } from './wage-tier.entity';
import { CostPremium } from './cost-premium.entity';
import { Employee } from './employee.entity';
import { Subject } from './subject.entity';

export const ENTITIES = [State, City, Company, User, Address, Location, Service, WageTier, CostPremium, Employee, Subject]

export {
  State, City, Company, User, Address, Location, Service, WageTier, CostPremium, Employee, Subject
}