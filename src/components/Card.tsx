import type { ParentComponent } from "solid-js";
import CardFooter from "./CardFooter";
import Line from "./Line";
import PriceSection from "./PriceSection";

const Card: ParentComponent<{
    name: string;
    discriminator: number;
    description: string;
    priceInETH: number;
    daysLeft: number;
    creatorName: string;
    imagePath: string;
}> = (props) => {
    return (
        <div class="p-7 shadow-xl bg-custom-very-dark-blue-cardbg rounded-xl flex-col items-center justify-start space-y-6 w-96">
            <img src={props.imagePath} class="rounded-lg" />
            <div class="font-semibold text-3xl text-custom-white">{props.name} #{props.discriminator}</div>
            <div class="font-light text-custom-soft-blue">{props.description}</div>
            <PriceSection daysLeft={props.daysLeft} priceInETH={props.priceInETH} />
            <Line />
            <CardFooter creatorName={props.creatorName} />
        </div>
    );
};
export default Card;