import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI
        )

        .then((data) => {
            console.log("Connected to database!");
            // console.log(data)
        })
        .catch((err) => {
            console.log("Some error occured while connecting to database:", err);
        });
};
