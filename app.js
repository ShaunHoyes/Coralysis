function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
};

const vm = new Vue({
  el: '#app',
  data: {
    status: ''
  },
  created: function () {
    this.loadQuote();
  },
  methods: {
    loadQuote: function () {
      this.status = 'Loading......';
      const vm = this;

      axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
      .then(function (response) {
        const priceBTC = response.data[0].price_usd;
        vm.status = numberWithCommas(Number(priceBTC).toFixed(2));
      })
      .catch(function (error) {
        vm.status = 'An error occured. ' + error;
      });
    }
  }
});

console.log("Bitcoin ecosystem analysis by Shaun Hoyes")
