import type { ParentComponent } from "solid-js";
import EthereumIcon from "../icon-ethereum.svg";
import ClockIcon from "../icon-clock.svg";

const PriceSection: ParentComponent<{ priceInETH: number; daysLeft: number; }> = (props) => {
    return (
        <div class="grid grid-cols-2 items-center">
            <div class="justify-self-start flex items-center">
                <img src={EthereumIcon} />
                <div class="ml-2 text-custom-cyan font-semibold"> {props.priceInETH} ETH </div>
            </div>
            <div class="justify-self-end flex items-center">
                <img src={ClockIcon} />
                <div class="font-light text-custom-soft-blue ml-2">{props.daysLeft} days left</div>
            </div>
        </div>
    );
};
export default PriceSection;