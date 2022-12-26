import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, optimism, arbitrum];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  }),
);

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        {/* Your App */}
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};