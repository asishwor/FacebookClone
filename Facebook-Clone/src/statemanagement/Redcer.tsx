const isLeftActive = {
  rightToggle: false,
  leftToggle: false,
};

interface menuToggleAction {
  type: string;
}
export const MenuToggleReducer: any = (
  state = isLeftActive,
  action: menuToggleAction
) => {
  switch (action.type) {
    case "left_menuToggle":
      return {
        ...state,
        leftToggle: !state.leftToggle,
        rightToggle: false,
      };
    case "right_AsideToggle":
      return {
        ...state,
        leftToggle: false,
        rightToggle: !state.rightToggle,
      };

    default:
      return state;
  }
};
