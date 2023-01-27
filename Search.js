import {selectCurrency} from "./SelectCurrency.js";


const Search = {
    data() {
        return {
            numberfrom: "",
            selectfrom: "AUD",
        };
    },
        props: ["currencies","selectto"],
    template: `
    <div class="number">
        <label for="from">Monnaie d'entrée</label>
        <div class="input">
            <input type="number" name="from" id="from" placeholder="0,00" value="" v-model="numberfrom" @change="this.$emit('numberfrom',numberfrom)"/>
            <label for="from-currencies"></label>
            <select v-model="selectfrom" @change="this.$emit('selectfrom',selectfrom)">
                <option v-for="(currency , index) in currencies " :value="index" v-show="index!=selectto "> {{currency}} {{index}}</option>
            </select>
        </div>
   </div>
`,
};

export {Search};