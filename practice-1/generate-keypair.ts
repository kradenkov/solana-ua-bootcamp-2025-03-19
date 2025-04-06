import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("Keypair gernerated pub", keypair.publicKey.toBase58());
console.log("Keypair gernerated private", keypair.secretKey);

let candidate = Keypair.generate();

while (!candidate.publicKey.toBase58().toLowerCase().startsWith("anza")) {
    candidate = Keypair.generate();
    // console.log("Keypair gernerated pub", candidate.publicKey.toBase58());
};

console.log("Keypair gernerated pub", candidate.publicKey.toBase58());