"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.releaseProduction = exports.releaseMain = exports.release = exports.eslintTypescript = exports.eslintVue = exports.eslint = void 0;
var release_config_1 = require("./config/release.config");
Object.defineProperty(exports, "release", { enumerable: true, get: function () { return release_config_1.release; } });
var eslint_config_1 = __importDefault(require("./config/eslint.config"));
exports.eslint = eslint_config_1.default;
var eslintVue_config_1 = __importDefault(require("./config/eslintVue.config"));
exports.eslintVue = eslintVue_config_1.default;
var eslintTs_config_1 = __importDefault(require("./config/eslintTs.config"));
exports.eslintTypescript = eslintTs_config_1.default;
var releaseMain = release_config_1.main;
exports.releaseMain = releaseMain;
var releaseProduction = release_config_1.production;
exports.releaseProduction = releaseProduction;
//# sourceMappingURL=index.js.map