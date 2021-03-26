import { shallow } from 'enzyme';

// Component
import Congrats from './congrats';

// Utilities
import allUTL from '../../utils/allUTL';

const { findByTestAttribute } = allUTL.testingUTL;

/*
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setUp
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
  const component = shallow(<Congrats {...props} />);
  return component;
};

describe('<Congrats />', () => {
  it('Should render without errors', () => {
    const wrapper = setUp();
    const appComponent = findByTestAttribute(wrapper, 'congrats-component');
    expect(appComponent.length).toBe(1);
  });

  it('Should render not text when `success` prop is false', () => {});
  it('Should render non-empty congrats message when success prop is true', () => {});
});
