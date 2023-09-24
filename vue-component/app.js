const app = Vue.createApp({
//   template: `<p class="para">lorem</p>`,
  data() {
    return {
        url: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn",
      showbooks: true,
      books: [
        { title: "Mein Kampf", author: "Adolf Hitler", price: "200", isFav : false },
        { title: "Gitobitan", author: "R.N.Thakur", price: "1000", isFav : true },
        { title: "A game of thrones", author: "George R R Martin", price: "2000", isFav : true },
      ],
    };
  },
  methods: {
    clickHandle() {
      console.log("Click Event detected");
    },
    setprice(item) {
        item.price = parseInt(item.price) * 0.8;
      },
    togglebook() {
      this.showbooks = !this.showbooks;
    },
    toggleFav(item) {
      item.isFav = !item.isFav;
    },
    handleEvent(e, data) {
      // e.target.classList.toggle("dark");
      if (!(e.type == "mousemove")) {
        console.clear();
        console.log(e, e.type);
      }

      if (data) {
        console.log(`The passed data is: ${data}`);
      }
      if (e.type == "mousemove") {
        e.target.innerText = `${e.offsetX}, ${e.offsetY}`;
        e.target.onmouseleave = () => {
          e.target.innerText = `handle event`;
        };
      }
    },
  },
  computed:{
    filteredBooks(){
        return this.books.filter((book)=>book.isFav)
    }
  }
});
app.mount("#app");
