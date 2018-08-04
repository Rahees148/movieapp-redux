module.exports = function getlocal (item){
  let defaultFilters = [];
  if (item === 'favList'){
    defaultFilters = ['History', 'Animated', 'Romantic', 'Blockbusters', 'New', 'HD'];
  }

  return localStorage.getItem(item) || defaultFilters;
};

