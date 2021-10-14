import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  att1: number;

  @Column()
  att2: number;

  @Column()
  att3: number;

  @Column()
  att4: number;

  @Column()
  att5: number;

  @Column()
  att6: number;

  @Column()
  att7: number;

  @Column()
  att8: number;

  @Column()
  att9: number;

  @Column()
  att10: number;

  @Column()
  att11: number;

  @Column()
  label: string;
}
