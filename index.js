function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
};

function deepestChild() {
  let grand = document.querySelector('#grand-node');
  let child = grand.children[0];

  while (child) {
    grand = child;
    child = grand.children[0]
  }
  return grand

};
