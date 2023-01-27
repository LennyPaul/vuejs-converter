import { Search } from "./Search.js";
import { Result } from "./Result.js";


const options = {
    data() {
        return {
            monneyto: "",
            monneyFrom : 0,
            selectFrom : "AUD",
            selectTo : "BGN",
            currencies : [],

        };
    },
    methods: {
        async convertMonney(){

            if (!this.monneyFrom) {
                alert("Vous n'avez pas rentrer de valeur");
                return;
            }


            try {
                const response = await fetch(
                    `https://api.frankfurter.app/latest?amount=${this.monneyFrom}&from=${this.selectFrom}&to=${this.selectTo}`
                );
                const json = await response.json();
                const res = json.rates[this.selectTo];
                this.monneyto = res;
            } catch (error) {
                console.error("Erreur dans la requete : ", error);
                alert(
                    "Oups ! Une errerur est arrivée, veuillez ré-essayer ultérieurement "
                );
            }

        },
        getNumberFrom(value){
            this.monneyFrom = value
        },
        getSelectFrom(value){
            this.selectFrom = value
        },
        getSelectTo(value){
            this.selectTo = value
        }
    },
    components: {
        Search: Search,
        Result: Result

    },
    created(){
        fetch("https://api.frankfurter.app/currencies")
            .then((response) => response.json())
            .then((data) => {
                this.currencies = data;
                console.log(data)
            });

    },
};

Vue.createApp(options).mount("#app");
