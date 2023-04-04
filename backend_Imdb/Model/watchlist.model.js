const mongoose = require("mongoose");
const watchlistschema = mongoose.Schema({
    id : Number,
    poster_path : String,
    original_title : String,
    release_date : String,
    vote_average:String,
    overview:String,
    userID: String
    
    
});

const WatchListModel=mongoose.model("watchlist",watchlistschema)

module.exports={
    WatchListModel
}

// {
//     "id" : "12345",
//     "poster_path" : "xyz",
//     "original_title" : "thor",
//     "release_date" : "1 dec 2014",
//     "vote_average":"7.3",
//     "overview":"acchi movie h",
    
// }`