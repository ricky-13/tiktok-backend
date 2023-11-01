import mongoose from 'mongoose';

// defining schema for the db 
const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String
});

// Collection inside the db  
export default mongoose.model('tiktokVideos', tiktokSchema);