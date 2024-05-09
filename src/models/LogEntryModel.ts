import mongoose, { Schema, Document } from "mongoose";
import { LogEntry } from "../types";

// Define the return values schema
const ReturnValuesSchema = new Schema({
  "0": { type: Number, required: true },
  "1": { type: Number, required: true },
  __length__: { type: Number, required: true },
  oldValue: { type: Number, required: true },
  newValue: { type: Number, required: true },
});

// Define the raw data schema
const RawDataSchema = new Schema({
  data: { type: String, required: true },
  topics: { type: [String], required: true },
});

// Define the log entry schema
const LogEntrySchema = new Schema(
  {
    address: { type: String, required: true },
    topics: { type: [String], required: true },
    data: { type: String, required: true },
    blockNumber: { type: Number, required: true },
    transactionHash: { type: String, required: true },
    transactionIndex: { type: Number, required: true },
    blockHash: { type: String, required: true },
    logIndex: { type: Number, required: true },
    removed: { type: Boolean, required: true },
    returnValues: { type: ReturnValuesSchema, required: true },
    event: { type: String, required: true },
    signature: { type: String, required: true },
    raw: { type: RawDataSchema, required: true },
  },
  { timestamps: true }
);

// Define and export the Mongoose model
export interface LogEntryDocument extends LogEntry, Document {}
const LogEntryModel = mongoose.model<LogEntryDocument>(
  "LogEntry",
  LogEntrySchema
);

export default LogEntryModel;
