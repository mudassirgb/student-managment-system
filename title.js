import chalkAnimation from "chalk-animation";
function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });
}
export default async function title() {
    const maintitle = chalkAnimation.karaoke(`\n    +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+
    |S|t|u|d|e|n|t| |M|a|n|a|g|e|m|e|n|t| |S|y|s|t|e|m|
    +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ \n`);
    await sleep();
    maintitle.stop();
}
