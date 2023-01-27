const selectCurrency = {
    data(){
        return{
            currencies: []
        }
    },
    methods: {

    },
    template: `<select>
                <option v-for="(currency , index) in currencies " :value="index" > {{currency}} {{index}}</option>
</select>`,
    mounted() {
       
    },
    created(){
        //APPEL API POUR AFFICHER MONEY
        //https://api.frankfurter.app/currencies

        fetch("https://api.frankfurter.app/currencies")
            .then((response) => response.json())
            .then((data) => {
                this.currencies = data;
                console.log(data)
            });

    }
};

export {selectCurrency};