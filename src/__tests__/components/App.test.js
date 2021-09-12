import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';
import App from '../../components/App';
import Title from '../../components/Title';
import PageDescription from '../../components/PageDescription';
import NumberList from '../../components/NumberList';

describe('PageDescription Component', () => {
  test("Render snapshot the component", () => {
    const tree = TestRenderer.create(<App />);
    const testInstance = tree.root;
    expect(testInstance.findByType(Title).props.title).not.toBe(null);
    expect(testInstance.findByType(PageDescription).children).not.toBe(null);
    expect(testInstance.findByType(NumberList).props.maxNumberLimit).toBe(144);
  });
});
