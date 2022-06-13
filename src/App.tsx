import Card from "./components/Card";

const CREATION_NAME = "Equilibrium";
const DISCRIMINATOR = 3429;
const DESCRIPTION = "Our Equilibrium collection promotes balance and calm.";
const CREATOR_NAME = "Jules Wyvern";
const ETH_PRICE = 0.041;
const DAYS_LEFT = 3;
const IMAGE_PATH = "/image-equilibrium.jpg";

function App() {
    return (
        <div class="App bg-custom-very-dark-blue-mainbg">
            <div class="flex items-center justify-center min-h-screen w-full p-5 sm:p-10 lg:p-14">
                <Card
                    creatorName={CREATOR_NAME}
                    daysLeft={DAYS_LEFT}
                    description={DESCRIPTION}
                    discriminator={DISCRIMINATOR}
                    name={CREATION_NAME}
                    priceInETH={ETH_PRICE}
                    imagePath={IMAGE_PATH}
                />
            </div>
        </div>
    );
}

export default App;
