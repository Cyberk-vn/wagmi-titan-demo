"use client";

import { parseEther } from "viem";
import { useAccount, useSendTransaction, useSignMessage } from "wagmi";
import { titanTestnet } from "../titan-testnet";
import { useVerifyMessage } from "wagmi";
import { useState } from "react";

export function Send() {
  const { sendTransaction } = useSendTransaction();
  const { signMessageAsync } = useSignMessage();

  const account = useAccount();

  const [signature, setSignature] = useState("");

  const { data } = useVerifyMessage({
    message: "Hello, world!",
    signature: signature as `0x${string}`,
    address: "0x4e2163B8F6F6e29CBFe7f5fD469aC386258f79a4",
  });

  const handleSendTransaction = async () => {
    try {
      const tx = await sendTransaction({
        to: "0x4e2163B8F6F6e29CBFe7f5fD469aC386258f79a4",
        value: parseEther("0.1"),
        chainId: titanTestnet.id,
      });
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const handleSignMessage = async () => {
    try {
      const message = "Hello, world!";
      const signature = await signMessageAsync({ message });
      console.log("Message signed:", signature);
      setSignature(signature);
    } catch (error) {
      console.error("Message signing failed:", error);
    }
  };

  console.log("=======isVerified", data);
  console.log("=======account", account);
  return (
    <>
      <button onClick={handleSendTransaction}>Send</button>
      <button onClick={handleSignMessage}>Sign Message</button>
    </>
  );
}
