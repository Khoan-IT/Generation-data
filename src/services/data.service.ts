import { Data } from './../models/data.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Data)
    private dataRepository: Repository<Data>,
  ) {}

  async getAll(): Promise<Data[]> {
    return await this.dataRepository.find();
  }

  async insert(data: Data): Promise<void> {
    await this.dataRepository.insert(data);
  }
}
