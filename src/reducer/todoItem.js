let id = 1

const searchList = (list, searchText) => {
  let filterList = list.filter(item => item.value.includes(searchText));
  if (searchText === '') {
    filterList = list;
  }

  return filterList;
}

export default (state = {filteredList: [], list: [], searchedText: ''}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const item = {
        id: id,
        value: action.text,
        isComplete: false
      }

      id++;
      state.list.push(item);

      return Object.assign({}, {...state}, {filteredList: [...searchList(state.list, state.searchedText)]});

    case 'CHANGE_ITEM':
      const changedItemStatus = state.list.find(s => s.id === action.id);
      changedItemStatus.isComplete = !changedItemStatus.isComplete;

      return Object.assign({}, {...state}, {filteredList: [...searchList(state.list, state.searchedText)]});

    case 'GET_LIST':
      return Object.assign({}, {...state}, {filteredList: [...searchList(state.list, state.searchedText)]});

    case 'CHANGE_ITEM_VALUE':
      const changedItemValue = state.list.find(s => s.id === action.id)
      changedItemValue.value = action.text

      return Object.assign({}, {...state}, {filteredList: [...searchList(state.list, state.searchedText)]});

    case 'SEARCH_LIST':

      return Object.assign({}, {...state}, {filteredList: [...searchList(state.list, action.value)], searchedText: action.value});

    default:
      return state;
  }
}