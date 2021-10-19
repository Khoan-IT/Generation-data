import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Hometown: string;

  @Column()
  Current_Home: string;

  @Column()
  Salary: string;

  @Column()
  Job: string;

  @Column()
  Degree: string;

  @Column()
  Age: string;

  @Column()
  Num_Relative: string;

  @Column()
  Credit: string;

  @Column()
  Vehicle: string;

  @Column()
  Marriage: string;

  @Column()
  Interest: string;

  @Column()
  label: string;
}
