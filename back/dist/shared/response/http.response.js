"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["UNAUTORIZED"] = 401] = "UNAUTORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
class HttpResponse {
    Ok(res, data) {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: "Success",
            data: data,
        });
    }
    NotFound(res, data) {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMsg: "Not found",
            error: data,
        });
    }
    UNAUTORIZED(res, data) {
        return res.status(HttpStatus.UNAUTORIZED).json({
            status: HttpStatus.UNAUTORIZED,
            statusMsg: "UNAUTORIZED",
            error: data,
        });
    }
    FORBIDDEN(res, data) {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            statusMsg: "FORBIDDEN",
            error: data,
        });
    }
    INTERNAL_SERVER_ERROR(res, data) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: "INTERNAL_SERVER_ERROR",
            error: data,
        });
    }
}
exports.HttpResponse = HttpResponse;
