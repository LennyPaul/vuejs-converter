import {selectCurrency} from "./SelectCurrency.js";

const Result = {
    data() {
        return {
            selectto: "BGN",
        };
    },
    props: ["monneyto","currencies","selectfrom"],
    template: `
    <div class="number">
        <label for="to">Monnaie de sortie</label>
             <div class="input">
                <input type="number" name="to" id="to" placeholder="0,00" :value="monneyto" disabled/>
                <label for="to-currencies"></label>
                <select v-model="selectto" @change="this.$emit('selectto',selectto)">
                    <option v-for="(currency , index) in currencies " :value="index" v-show="index!=selectfrom "  > {{currency}} {{index}}</option>
                </select>    
             </div>
    </div>
`,
};

export {Result};