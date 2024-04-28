"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.release = exports.production = exports.main = void 0;
var fs_1 = require("fs");
var dateformat_1 = __importDefault(require("dateformat"));
var path_1 = require("path");
var template = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "helpers", "default-template.hbs")).toString();
var commitTemplate = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "helpers", "commit-template.hbs")).toString();
var options = {
    plugins: [
        [
            "semantic-release-gitmoji",
            {
                releaseRules: {
                    major: {
                        include: [":boom:"],
                    },
                    minor: {
                        include: [":sparkles:"],
                    },
                    patch: {
                        include: [
                            ":bug:",
                            ":ambulance:",
                            ":lock:",
                            ":recycle:",
                            ":lipstick:",
                            ":alien:",
                            ":package:",
                        ],
                    },
                },
                releaseNotes: {
                    template: template,
                    partials: { commitTemplate: commitTemplate },
                    helpers: {
                        datetime: function (format) {
                            if (format === void 0) { format = "UTC:yyyy-mm-dd"; }
                            return (0, dateformat_1.default)(new Date(), format);
                        },
                    },
                    issueResolution: {
                        template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
                        baseUrl: "https://github.com",
                        source: "github.com",
                    },
                },
            },
        ],
        "@semantic-release/github",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        [
            "@semantic-release/npm",
            {
                npmPublish: !!process.env.NPM_TOKEN,
            },
        ],
        [
            "@semantic-release/git",
            {
                assets: __spreadArray(["CHANGELOG.md", "package.json", "package-lock.json"], (process.env.COMMIT_ASSETS ? process.env.COMMIT_ASSETS.split(',').map(function (x) { return x.trim(); }) : []), true),
                message: ":bookmark: Release v${nextRelease.version} [skip ci]",
            },
        ],
    ],
};
exports.main = __assign(__assign({}, options), { branches: ["main"] });
exports.production = __assign(__assign({}, options), { branches: ["production"] });
var release = function (branches) {
    return (__assign(__assign({}, options), { branches: branches }));
};
exports.release = release;
//# sourceMappingURL=release.config.js.map