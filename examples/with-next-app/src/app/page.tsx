import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Send } from "../components/send";

function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton />

      <Send />
    </div>
  );
}

export default Page;
