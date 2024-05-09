import Web3 from "web3";
import { LogEntry } from "../types";
import {
  CHAINSTACK_RPC_URL,
  CONTRACT_ADDRESS,
  PRIVATE_KEY,
} from "../constants/env";
import abi from "../constants/abi";
import LogEntryModel from "../models/LogEntryModel";
const web3 = new Web3(CHAINSTACK_RPC_URL); // BSC testnet endpoint
export default class TransitionEvent {
  static AddEventIntoDB = async (data: LogEntry) => {
    try {
      const {
        address,
        topics,
        transactionHash,
        blockHash,
        event,
        signature,
        returnValues,
        blockNumber,
      } = data;
      const { newValue, oldValue } = returnValues;
      const isEventExist = await LogEntryModel.findOne({ transactionHash });
      if (isEventExist) {
        return;
      }
      await LogEntryModel.create({
        address,
        topics,
        transactionHash,
        blockHash,
        event,
        signature,
        newValue,
        oldValue,
        blockNumber,
      });
      console.log("Event Added Into DB !");
    } catch (error) {
      console.log("Failed to add event into DB", error);
    }
  };
  static TRIGGER_EVENT = async () => {
    try {
      const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
      const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
      const getRandomValue = Math.round(Math.random() * 100);
      const senderAddress = account.address; // Replace with the sender's address
      const data = contract.methods.updateValue(getRandomValue).encodeABI();
      const nonce = await web3.eth.getTransactionCount(senderAddress);
      const gas = 500000;
      // Include gasPrice (optional, but recommended for predictability)
      const gasPrice = "10000000000"; // 10 Gwei (adjust as needed)

      const signedTx = await web3.eth.accounts.signTransaction(
        {
          from: senderAddress, // Set the from address
          to: CONTRACT_ADDRESS,
          data,
          gas: gas,
          nonce: nonce, // Set the nonce
          value: "0x0",
          gasPrice,
        },
        PRIVATE_KEY
      );
      console.log("Transaction Started -->");
      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction as string
      );
      console.log(`Transaction Hash :  ${receipt.transactionHash}`);
    } catch (error) {
      console.log("Failed to add event into DB", error);
    }
  };
}
