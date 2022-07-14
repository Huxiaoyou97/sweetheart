import {mount} from "@vue/test-utils";
import SButton from "../Button"

describe('s-button', function () {
    it('挂载组件', () => {
        mount(SButton)
    })
    it('clickable', async () => {
        const onClick = jest.fn()
        const inst = mount(SButton, {
            props: {
                onClick
            }
        })
        await inst.trigger('click')
        expect(onClick).toHaveBeenCalled()
        inst.unmount()
    })
});
