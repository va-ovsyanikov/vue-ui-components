import { render, screen, waitForElementToBeRemoved } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers';
import VTableSettings from '../components/tables/v-table-settings.vue'
expect.extend(matchers);
const user = userEvent.setup()


const items = [
    { text: "Status", value: "status", enabled: true }
];

const options = {
    // props: {
    //     items,
    //     showAll: true
    // },
    data: () => ({
        modal: true
    })
}

it('render when click button', async () => {
    render(VTableSettings)

    await user.click(screen.getByTestId('btnModalShow'))

    screen.getByText('Table settings')

    //  user.click(screen.getByTestId('btnModalHide'))
    //    expect(screen.getByText('Table settings')).not.toBe()
})

it('render when click button', async () => {
    render(VTableSettings)

    // await user.click(screen.getByTestId('btnModalShow'))
    // await user.click(screen.getByTestId('btnModalHide'))
screen.debug()
    // expect(screen.getByText('Table settings')).not.toBeVisible()
})

// it('render when click', async () => {
//         render(VTableSettings)

//         // await user.click(screen.getByTestId('btnModalHide'))

//         screen.debug()
//         // screen.getByText('Table settings').not.toBe()
// })