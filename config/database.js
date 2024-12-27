const { default: mongoose } = require("mongoose");

const url = DB_URL("mongodb+srv://dhaval10gajjar:1234@cluster0.9ggpx.mongodb.net/");

const db = async () => {
    try {
        await mongoose.connect(url);
        console.log("database connected.");
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;