window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};

const helloTom = person.hello.bind(person);
function fn(ref) {
  ref();
}

//hello john
fn(helloTom);
