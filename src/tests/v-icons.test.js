import { screen, render } from "@testing-library/vue";
import VIcon from '../components/icons/v-icon.vue'


test("renders icon with classes", () => {

    const classIcon = 'class-icon'
    const defaultClass = 'icon'

    render(VIcon, {
        slots: {
            default: classIcon
        }
    })

    const classes = screen.getByTestId('icon').getAttribute('class')

    expect(classes).toBe(defaultClass + ' ' + classIcon)

})