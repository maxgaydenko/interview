const values = [10, 20, 30, 40];
for (var i = 0; i < values.length; i++) {
  setTimeout(function() {
    console.log(`${i}. ${values[i]}`);
  }, 1000);
}