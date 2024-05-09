# Bsc-web3

## Overview
    This project is designed for interacting with a smart contract deployed on the Binance Smart Chain testnet (bsctestnet). It includes functionalities for event listening, data storage into a MongoDB database, and interaction with the BSC testnet via Web3 library.

## Folder Structure
    src/: Contains source code files.
      - controller/: Controllers for handling business logic.
      - models/: Database models.
      - db/connection.ts: Database connection setup.
      - index.ts: Entry file for the program, responsible for event listening.
      - event.ts: File to trigger events on the smart contract.
      - contract.sol: Source code of the smart contract in (Solidity).

## Scripts
    - start: Transpiles TypeScript files and starts the application.
    - dev: Runs the application in development mode using ts-node-dev.
    - event: Triggers events on the smart contract.
    - build: Transpiles TypeScript files.

## Database 
    I have used my local Database which is running in port 27017 here is the url of the incase you want to use the online url please go into .env file and change MONGO_URL 

## Usage

    1. Start the application in production mode:
        ```bash
       npm run build && npm start 
       ```
    2. To listen for events and store data into the database, run:
        ```bash
        npm dev
        ```     
    3. To trigger an event on the smart contract:
        ```bash
        npm run event
        ```     
        Make sure you are already running npm run dev to listen for these events.


