import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Attend, AttendanceOutcome, DropAttendanceReason } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttendsService extends TypeOrmCrudService<Attend> {
  constructor(
    @InjectRepository(Attend) repo: Repository<Attend>,
    @InjectRepository(AttendanceOutcome) repoOutcome: Repository<AttendanceOutcome>,
    @InjectRepository(DropAttendanceReason) repoDrop: Repository<DropAttendanceReason>
  ) {
    super(repo)
  }
}

