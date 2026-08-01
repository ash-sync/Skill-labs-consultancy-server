import { Server } from "http";
import app from "./app";
import { envVars } from "./app/config/env";
import { connectDB } from "./app/config/db";

let server: Server;

const startServer = async () => {
    try {
        await connectDB();

        server = app.listen(envVars.PORT, () => {
            console.log(`Server is listening on port ${envVars.PORT}`);
        });

    } catch (error) {
        console.log("Failed to start server:", error);
    }
};

// Start local server if NOT running on Vercel
if (!process.env.VERCEL) {
    startServer();
}

process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection detected... Server shutting down... ", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception detected... Server shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

process.on("SIGTERM", () => {
    console.log("SIGTERM signal received... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

process.on("SIGINT", () => {
    console.log("SIGINT signal received... Server shutting down...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

module.exports = app;
export default app;
