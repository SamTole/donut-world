// Mock database for menu items

var mockDatabase = [
  { name: 'Americano', price: 3.00, flavor: 'original', category: 'drinks', image: './img/Americano.jpg' },
  { name: 'Berry Blast', price: 2.25, flavor: 'specialty', category: 'donuts', image: './img/Berry.jpg' },
  { name: 'Classic Glazed', price: 1.45, flavor: 'original', category: 'donuts', image: './img/Glazed.jpg' },
  { name: 'Latte', price: 3.00, flavor: 'original', category: 'drinks', image: './img/Latte.jpg' },
  { name: 'Matcha Mochi', price: 2.25, flavor: 'specialty', category: 'donuts', image: './img/Matcha.jpg' },
  { name: 'Original Filled', price: 1.45, flavor: 'original', category: 'donuts', image: './img/Filled.jpg' },
  { name: 'Original Munchkins', price: 6.55, flavor: 'original', category: 'munchkins', image: './img/OriginalMunchkins.jpg' },
  { name: 'Smores Galore', price: 2.25, flavor: 'specialty', category: 'donuts', image: './img/Smores.jpg' },
  { name: 'Specialty Americano', price: 3.75, flavor: 'specialty', category: 'drinks', image: './img/SpecialtyAmericano.jpg' },
  { name: 'Specialty Latte', price: 3.75, flavor: 'specialty', category: 'drinks', image: './img/SpecialtyLatte.jpg' },
  { name: 'Specialty Munchkins', price: 8.00, flavor: 'specialty', category: 'munchkins', image: './img/SpecialtyMunchkins.jpg' },
  { name: 'Vanilla Delight', price: 1.45, flavor: 'original', category: 'donuts', image: './img/Vanilla.jpg' },
];

// RenderList function

function renderList(results) {
  var i;
  var menuItems = document.querySelectorAll('.menu-item');

  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].innerHTML = '';
  }

  var a = 0;
  var menuInfo = results.map(function (result) {
    var temp = document.createElement("IMG");
    temp.src = result.image;
    menuItems[a].appendChild(temp);
    a++;
    return result.name + ', $' + result.price;
  });

  var n = 0;
  menuInfo.forEach(function (item) {
    menuItems[n].innerHTML += item;
    n++;
  });

  var foo = 'renderList';
  console.log(foo);
}

renderList(mockDatabase);

// SortBy function

function sortBy(sortValue) {
  var sortedResults = (sortValue === 'name') ?
    mockDatabase.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    }) :
    mockDatabase.sort(function (a, b) {
      return a[sortValue] - b[sortValue];
    });
  renderList(sortedResults);
}

document.querySelector('#sortBy').addEventListener('change', function (event) {
  sortBy(event.target.value);
});

// FlavorFilter function

function flavorFilter(flavor) {
  var filteredResults = mockDatabase.filter(function (result) {
    if (flavor == 'select') {
      return true;
    } else {
      if (result.flavor === flavor) {
        return true;
      }
    }
  });
  renderList(filteredResults);
}

document.querySelector('#flavors').addEventListener('change', function (event) {
  flavorFilter(event.target.value);
});

// CategoryFilter function

function categoryFilter(category) {
  var filteredResults = mockDatabase.filter(function (result) {
    if (category == 'select') {
      return true;
    } else {
      if (result.category === category) {
        return true;
      }
    }
  });
  renderList(filteredResults);
}

document.querySelector('#category').addEventListener('change', function (event) {
  categoryFilter(event.target.value);
});