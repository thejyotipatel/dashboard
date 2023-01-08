import mongoose from 'mongoose'

const DataSchema = new mongoose.Schema(
  {
    end_year: {
      type: String,
    },
    intensity: {
      type: Number,
    },
    sector: {
      type: String,
    },
    topic: {
      type: String,
    },
    insight: {
      type: String,
    },
    url: {
      type: String,
    },
    region: {
      type: String,
    },
    start_year: {
      type: String,
    },
    impact: {
      type: String,
    },
    added: {
      type: String,
    },
    published: {
      type: String,
    },
    country: {
      type: String,
    },
    relevance: {
      type: Number,
    },
    pestle: {
      type: String,
    },
    source: {
      type: String,
    },
    title: {
      type: String,
    },
    likelihood: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)
<<<<<<< HEAD
export default mongoose.model('dashbord', DataSchema)
=======
export default mongoose.model('dashboard', DataSchema)
>>>>>>> ea482491f416450130f6bfd949e48d13508eb192
