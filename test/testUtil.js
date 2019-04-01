export function findByTestAtr(wrapper, val) {
    return wrapper.find(`[data-test="${val}"]`);
}