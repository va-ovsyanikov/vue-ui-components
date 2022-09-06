import { mount } from '@vue/test-utils'
import VIcon from '../../components/icons/v-icon.vue'


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
