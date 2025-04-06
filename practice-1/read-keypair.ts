import { Keypair } from "@solana/web3.js";
import "dotenv/config";

const pk = process.env.PK;

if (!pk) {
    console.log("No PK");
    process.exit(1);
}


const asBytes = Uint8Array.from(JSON.parse(pk));
const keypair = Keypair.fromSecretKey(asBytes);

console.log("Public key", keypair.publicKey.toBase58());