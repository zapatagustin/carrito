import * as dotenv from 'dotenv'
import { Connection, ConnectionOptions, createConnection, DataSourceOptions } from 'typeorm'
import { textChangeRangeIsUnchanged } from 'typescript'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export abstract class ConfigServer {
    constructor() {
		const nodeNameEnv = this.createPathEnv(this.nodeEnv)
		dotenv.config({
			path: nodeNameEnv,
		})
	}

    public getEnviroment(k: string): string | undefined {
        return process.env[k] //process env port['PORT']
    }

    public getNumberEnv(k: string): number {
        return Number(this.getEnviroment(k))
    }

    public get nodeEnv(): string {
        return this.getEnviroment('NODE_ENV')?.trim() ||""
    }

    public createPathEnv(path: string) : string {
        const arrEnv: Array<string> = ['env']
		
		if (path.length > 0) {
			const stringToArray = path.split('.')
			arrEnv.unshift(...stringToArray)
		}
		return '.' + arrEnv.join('.')
	}

    public get typeORMConfig(): DataSourceOptions {
        return {
            type: 'mysql',
            host: this.getEnviroment("DB_HOST"),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnviroment('DB_USER'),
            password: this.getEnviroment('DB_USER_PASSWORD'),
            database: this.getEnviroment('DB_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }

    async dbConnect(): Promise<Connection> {
        return await createConnection(this.typeORMConfig)
    }
}
