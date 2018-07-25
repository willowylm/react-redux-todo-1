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
    default:
      return state;
  }
}