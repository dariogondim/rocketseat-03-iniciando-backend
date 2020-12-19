import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('time with time zone')
    date: Date;

    @CreateDateColumn()
    // eslint-disable-next-line camelcase
    created_at: Date;

    @UpdateDateColumn()
    // eslint-disable-next-line camelcase
    updated_at: Date;
}

export default Appointment;
