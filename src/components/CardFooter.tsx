import type { ParentComponent } from "solid-js";

const CardFooter: ParentComponent<{ creatorName: string }> = (props) => {
    return (
        <div class="flex items-center justify-start">
            <img class="w-10 h-10 border border-solid border-custom-white rounded-full" src="/image-avatar.png" />
            <div class="ml-4 font-light text-custom-soft-blue"> Creation of <span class="font-normal text-custom-white"> {props.creatorName} </span> </div>
        </div>
    );
};
export default CardFooter;