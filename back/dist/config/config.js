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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
var dotenv = __importStar(require("dotenv"));
var typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
var ConfigServer = /** @class */ (function () {
    function ConfigServer() {
        var nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }
    ConfigServer.prototype.getEnviroment = function (k) {
        return process.env[k]; //process env port['PORT']
    };
    ConfigServer.prototype.getNumberEnv = function (k) {
        return Number(this.getEnviroment(k));
    };
    Object.defineProperty(ConfigServer.prototype, "nodeEnv", {
        get: function () {
            var _a;
            return ((_a = this.getEnviroment('NODE_ENV')) === null || _a === void 0 ? void 0 : _a.trim()) || "";
        },
        enumerable: false,
        configurable: true
    });
    ConfigServer.prototype.createPathEnv = function (path) {
        var arrEnv = ['env'];
        if (path.length > 0) {
            var stringToArray = path.split('.');
            arrEnv.unshift.apply(arrEnv, stringToArray);
        }
        return '.' + arrEnv.join('.');
    };
    Object.defineProperty(ConfigServer.prototype, "typeORMConfig", {
        get: function () {
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
        },
        enumerable: false,
        configurable: true
    });
    return ConfigServer;
}());
exports.ConfigServer = ConfigServer;
