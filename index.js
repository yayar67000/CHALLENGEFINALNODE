import cowsay from "cowsay";
import "dotenv/config";

console.log(cowsay.say({
    text : `I'm a ${process.env.NAME} from ${process.env.CAMPUS}`,
    e : "oO",
    T : "U "
}));