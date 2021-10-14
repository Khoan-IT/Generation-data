import { User } from './../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async selectOne(email: string): Promise<User> {
    return await this.userRepository.findOne(email);
  }

  async insertOne(user: User): Promise<void> {
    await this.userRepository.insert(user);
  }

  async deleteOne(email: string): Promise<void> {
    await this.userRepository.delete(email);
  }
}
