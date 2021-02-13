import { createLocalVue, Wrapper }   from '@vue/test-utils';
import Vuex                          from 'vuex';
import CompositionApi                from '@vue/composition-api';
import { createTestInstanceShallow } from '@/__tests__/factory';
import cDatePickerPanel              from '../date-picker-panel.component.vue';

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);

describe('Date picker panel component', () => {
  let wrapper!: Wrapper<any>;

  beforeEach(() => {
    const { wrapperInstance } = createTestInstanceShallow(cDatePickerPanel, {
      localVue,
      slots: {
        header: '<div></div>',
        content: '<div></div>',
      },
    });

    wrapper = wrapperInstance;
  });

  it('should render cDatePickerPanel component with correct class', () => {
    expect(wrapper.classes())
      .toContain('c-date-picker-panel');
  });

  it('should render slot wrapper when slot has been passed', () => {
    expect(wrapper.find('.c-date-picker-panel__header')
      .exists())
      .toBeTruthy();

    expect(wrapper.find('.c-date-picker-panel__content')
      .exists())
      .toBeTruthy();
  });

  it('should not render slot wrapper when slot is empty', () => {
    const { wrapperInstance } = createTestInstanceShallow(cDatePickerPanel,
      {
        localVue,
        slots: {},
      });

    wrapper = wrapperInstance;

    const header: Wrapper<any> = wrapper.find('.c-date-picker-panel__header');
    const content: Wrapper<any> = wrapper.find('.c-date-picker-panel__content');

    expect(header.exists())
      .toBeFalsy();
    expect(content.exists())
      .toBeFalsy();
  });

  it('should match snapshot', () => {
    expect(wrapper.html())
      .toMatchSnapshot();
  });
});
