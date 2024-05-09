import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL as string;

const CHAINSTACK_WEBSOCKET_RPC_URL = process.env.CHAINSTACK_WEBSOCKET_RPC_URL as string;

const CHAINSTACK_RPC_URL = process.env.CHAINSTACK_RPC_URL as string;

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

export { CONTRACT_ADDRESS, CHAINSTACK_RPC_URL, MONGO_URL,PRIVATE_KEY ,CHAINSTACK_WEBSOCKET_RPC_URL};
