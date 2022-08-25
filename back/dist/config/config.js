"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv = __importStar(require("dotenv"));
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }
    getEnviroment(k) {
        return process.env[k]; //process env port['PORT']
    }
    getNumberEnv(k) {
        return Number(this.getEnviroment(k));
    }
    get nodeEnv() {
        var _a;
        return ((_a = this.getEnviroment('NODE_ENV')) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    }
    createPathEnv(path) {
        const arrEnv = ['env'];
        if (path.length > 0) {
            const stringToArray = path.split('.');
            arrEnv.unshift(...stringToArray);
        }
        return '.' + arrEnv.join('.');
    }
    get typeORMConfig() {
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
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        };
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.createConnection)(this.typeORMConfig);
        });
    }
}
exports.ConfigServer = ConfigServer;
