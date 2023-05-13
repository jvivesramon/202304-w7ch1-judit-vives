import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  capabilities: {
    speed: {
      type: Number,
      required: true,
    },
    endurance: {
      type: Number,
      required: true,
    },
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
