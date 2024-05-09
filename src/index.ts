import "./db/connection";
import Web3 from "web3";
import { CHAINSTACK_RPC_URL, CHAINSTACK_WEBSOCKET_RPC_URL, CONTRACT_ADDRESS } from "./constants/env";
import TransitionEvent from "./controller/TransactionEvent";
import { LogEntry } from "./types";
import abi from "./constants/abi";

const web3 = new Web3(CHAINSTACK_WEBSOCKET_RPC_URL);

const contractAddress = CONTRACT_ADDRESS; // Add the address of your deployed smart contract

async function main() {
  try {
    // @ts-ignore
    const contract = new web3.eth.Contract(abi, contractAddress);

    // subscribe to the smart contract event
    const subscription = contract.events.allEvents();
    
    subscription.on("data", (data) => {
      // when the data will come it will store that into the db
      // TransitionEvent.AddEventIntoDB(data as unknown as LogEntry);
      console.log(data);
    });

    // This will keep running every 4 second ( it will keep changing the internal state of the smart contract )
    // setInterval(() => {
    TransitionEvent.TRIGGER_EVENT();
    // }, 4000);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
