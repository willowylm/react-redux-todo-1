let id = 1

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const item = {
        id: id,
        value: action.text,
        isComplete: false
      }

      id++;
      state.push(item);

      return [...state];

    case 'CHANGE_ITEM':
      const changedItemStatus = state.find(s => s.id === action.id);
      changedItemStatus.isComplete = !changedItemStatus.isComplete;

      return [...state];

    case 'GET_LIST':
      return [...state]

    case 'CHANGE_ITEM_VALUE':
      const changedItemValue = state.find(s => s.id === action.id)
      changedItemValue.value = action.text

      return [...state];
    default:
      return state;
  }
}