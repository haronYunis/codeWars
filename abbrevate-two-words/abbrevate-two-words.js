function abbrevName(name) {
  let firstLast = name.split(' ');
  return `${firstLast[0].charAt(0).toUpperCase()}.${firstLast[1].charAt(0).toUpperCase()}`;
}


