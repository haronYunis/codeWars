function abbrevName(name) {

  for (var i = 0; name[i] !== '' ; i++);
  var first = name[0];
  var second = name[i + 1];

  return first.toUpperCase() + '.' + second.toUpperCase();

}
