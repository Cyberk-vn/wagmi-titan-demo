"use client";

import { parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";
import { titanTestnet } from "../titan-testnet";

export function Send() {
  const { address } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handleSendTransaction = async () => {
    try {
      const tx = await sendTransaction({
        to: "0x0000000000000000000000000000000000000000",
        value: parseEther("0.001"),
        chainId: titanTestnet.id,
      });
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return <button onClick={handleSendTransaction}>Send</button>;
}
