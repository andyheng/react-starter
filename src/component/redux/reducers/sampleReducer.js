const sampleReducer = (state = {sampleTrue: true}, action) => {
  switch (action.type) {
    case "SWITCH_SAMPLE_REDUX":
      return {
        ...state, sampleTrue: !state.sampleTrue
      }
      default:
        return state;
  }
}

export default sampleReducer;