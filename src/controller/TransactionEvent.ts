import Web3 from "web3";
import { LogEntry } from "../types";
import { CHAINSTACK_RPC_URL, CONTRACT_ADDRESS, PRIVATE_KEY } from "../constants/env";
import abi from "../constants/abi";
import LogEntryModel from "../models/LogEntryModel";
const web3 = new Web3(CHAINSTACK_RPC_URL); // BSC testnet endpoint
export default class TransitionEvent {
  static AddEventIntoDB = async (data: LogEntry) => {
    try {
      await LogEntryModel.create(data);
      console.log("Event Added Into DB !");
    } catch (error) {
      console.log("Failed to add event into DB", error);
    }
  };
  static TRIGGER_EVENT = async () => {
    try {
      // @ts-ignore
      const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
      const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
      const getRandomValue = Math.round(Math.random() * 100);
      const senderAddress = account.address; // Replace with the sender's address
      const data = contract.methods.updateValue(getRandomValue).encodeABI();
      // const nonce = await web3.eth.getTransactionCount(senderAddress);
      

      // const gas = 500000;
      // const signedTx = await web3.eth.accounts.signTransaction(
      //   {
      //     from: senderAddress, // Set the from address
      //     to: CONTRACT_ADDRESS,
      //     data,
      //     gas: gas,
      //     nonce: nonce, // Set the nonce
      //     value: "0x0",
      //   },
      //   PRIVATE_KEY
      // );
      // console.log("Transaction Started -->");
      // const receipt = await web3.eth.sendSignedTransaction(
      //   signedTx.rawTransaction as string
      // );
      // console.log(`Transaction Hash :  ${receipt.transactionHash}`);
    } catch (error) {
      console.log("Failed to add event into DB", error);
    }
  };
}
