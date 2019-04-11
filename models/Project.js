const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: Array, required: true },
  thumbnail: { type: String, required: true },
  siteUrl: { type: String },
  private: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  sourceUrl: { type: String },
  images: { type: Array },
  datecreated: { type: Date, default: Date.now() },
  datemodified: { type: Date, default: Date.now() },
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);