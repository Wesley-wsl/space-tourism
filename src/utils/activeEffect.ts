/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function activeEffect(e: any) {
    const isActive = document.querySelector(".active");

    if (isActive) {
        isActive.classList.remove("active");
    }

    e.target.classList.add("active");
}
