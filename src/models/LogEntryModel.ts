import mongoose, { Schema, Document, SchemaTypes } from "mongoose";
import { LogEntry } from "../types";
const LogEntrySchema = new Schema(
  {
    address: { type: String, required: true },
    topics: { type: [String], required: true },
    blockNumber: { type: SchemaTypes.BigInt, required: true },
    transactionHash: { type: String, required: true , unique:true },
    blockHash: { type: String, required: true },
    event: { type: String, required: true },
    signature: { type: String, required: true },
    newValue: { type: SchemaTypes.BigInt, required: true },
    oldValue: { type: SchemaTypes.BigInt, required: true },
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
