"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mssql_1 = __importDefault(require("mssql"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const dbConfig = {
    user: "admin_school",
    password: "moeciu_PA89",
    server: "ms-pa-server.database.windows.net",
    database: "moeciu-schoolDB",
    options: {
        encrypt: true,
    },
};
app.get("/api/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(dbConfig);
        const result = yield pool.request().query("SELECT * FROM dbo.test2");
        res.json(result.recordset);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Database query failed");
    }
}));
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
