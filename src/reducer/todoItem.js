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
      const item1 = state.find(s => s.id === action.id);
      item1.isComplete = !item1.isComplete;

      return [...state];

    case 'GET_LIST':
      return [...state]
    default:
      return state;
  }
}