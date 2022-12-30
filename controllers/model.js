import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
 {
  end_year:{
   type: mongoose.Types.ObjectId,
  },
  intensity:{
   type: Number,
  },
  sector:{
   type: String,
  },
  topic:{
   type: String,
  },
  insight:{
   type: String,
  } ,
  url:{
   type: String,
  } ,
  region:{
   type: String,
  } ,
  start_year:{
   type: String,
  } ,
  impact:{
   type: String,
  } ,
  added:{
   type: mongoose.Types.ObjectId,
  } ,
  published:{
   type: mongoose.Types.ObjectId,
  } ,
  country:{
   type: String,
  } ,
  relevance:{
   type: Number,
  } ,
  pestle:{
   type: String,
  } ,
  source:{
   type: String,
  } ,
  title:{
   type: String,
  } ,
  likelihood:{
   type: Number,
  } ,
   
 }
 ,{
  timestamps: true,
 }
)
export default mongoose.model('dashboard', DataSchema)