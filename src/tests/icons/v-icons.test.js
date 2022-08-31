// import { screen, render } from "@testing-library/vue";
// import matchers from '@testing-library/jest-dom/matchers';
// import userEvent from '@testing-library/user-event'
import { mount } from '@vue/test-utils'
import VIcon from '../../components/icons/v-icon.vue'

// expect.extend(matchers);
// const user = userEvent.setup()


describe('icon', () => {
    test("icon  classes", () => {
        const classIcon = 'class-icon'
        const wrapper = mount(VIcon, {
            slots: {
                default: classIcon
            }
        })
        expect(wrapper.attributes('class')).toBe('icon' + ' ' + classIcon)
    })
})
