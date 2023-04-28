import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Channel } from "./entities/channel.entity";
import { Message } from "./entities/message.entity";
import { Entities1682690875663 } from "./migrations/1682690875663-Entities";

const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Channel, Message],
        migrations: [Entities1682690875663]
    }
)

export default AppDataSource;