export function setMenu (context) {
    context.state.menu.active = !context.state.menu.active
    context.commit("GET_MENU")
}