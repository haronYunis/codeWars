function filter_list(l) {
  var my_list = [];
  for (var i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) === true) {
      my_list.push(l[i]);
    }
  }
  return my_list;
}