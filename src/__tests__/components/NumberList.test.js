import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';
import NumberList from '../../components/NumberList';

const baseProps = {
  maxNumberLimit: 4,
}
const renderFun = ( props = baseProps ) => TestRenderer.create(<NumberList {...props} />);

describe('NumberList Component', () => {
  it("should render snapshot with default props", () => {
    const tree = renderFun();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should trigger click", () => {
    const tree = renderFun({ maxNumberLimit: 2});
    const element = tree.root.findByType('li');
    element.props.onClick();
    expect(element.props.isSelected).toBe(true);
  });
});
