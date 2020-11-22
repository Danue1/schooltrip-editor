const dotenv = require("dotenv");
const typeChecker = require("./typeChecker");

dotenv.config({ path: ".env.development.local" });
dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

typeChecker.valid("SERVER_HOST", "string");
typeChecker.valid("SERVER_PORT", "number");
