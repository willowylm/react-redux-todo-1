let id = 1

export default (state = {list: [], searchedText: ''}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const item = {
        id: id,
        value: action.text,
        isComplete: false,
        date: Date.now()
      }

      id++;
      const addList = [...state.list]
      addList.push(item);

      return Object.assign({}, state, {list: [...addList]});

    case 'CHANGE_ITEM':
      const changeItemList = [...state.list];
      const changedItemStatus = changeItemList.find(s => s.id === action.id);
      changedItemStatus.isComplete = !changedItemStatus.isComplete;

      return Object.assign({}, state, {list: [...changeItemList]});

    case 'GET_LIST':
      return Object.assign({}, state, {list: [...state.list]});

    case 'CHANGE_ITEM_VALUE':
      const changeItemValueList = [...state.list]
      const changedItemValue = changeItemValueList.find(s => s.id === action.id)
      changedItemValue.value = action.text

      return Object.assign({}, state, {list: [...changeItemValueList]});

    case 'SEARCH_LIST':

      return Object.assign({}, state, {searchedText: action.value});

    default:
      return state;
  }
}