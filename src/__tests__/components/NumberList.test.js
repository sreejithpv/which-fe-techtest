import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NumberList from '../../components/NumberList';

const baseProps = {
  maxNumberLimit: 4,
}
const renderFun = ( props = baseProps ) => TestRenderer.create(<NumberList {...props} />);
const keyEvent = { key: 'Enter', keyCode: 13 };

describe('NumberList Component', () => {
  it("should render snapshot with default props", () => {
    const tree = renderFun();
    expect(tree.toJSON()).toMatchSnapshot();
  });
  describe('Events', () => {
    it("should trigger click", () => {
      render(<NumberList {...baseProps} />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      expect(element.classList.contains('selected')).toBe(true)
    });

    it("should not multiple trigger click on selected element", () => {
      render(<NumberList {...baseProps} />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      expect(element.classList.contains('selected')).toBe(true);
      userEvent.click(element);
      expect(element.classList.contains('selected')).toBe(true);
    });

    it("should trigger keydown event", () => {
      render(<NumberList {...baseProps} />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
      fireEvent.keyDown(element, {...keyEvent});
      expect(element.classList.contains('selected')).toBe(true);
    });

    it("should trigger keydown event based on keyCode", () => {
      render(<NumberList {...baseProps} />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
      fireEvent.keyDown(element, { key: '', keyCode: 13 });
      expect(element.classList.contains('selected')).toBe(true);
    });

    it("should not multiple keydown event on selected element", () => {
      render(<NumberList {...baseProps} />);
      const element = screen.getByText('2');
      expect(element).toBeInTheDocument();
      fireEvent.keyDown(element, {...keyEvent})
      expect(element.classList.contains('selected')).toBe(true);
      fireEvent.keyDown(element, {...keyEvent});
      expect(element.classList.contains('selected')).toBe(true);
    });

    it("should add active on all the boxes which are isMultipliable of 8", () => {
      render(<NumberList maxNumberLimit={8} />);
      const element = screen.getByText('8');
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      const elementWith2 = screen.getByText('2');
      const elementWith4 = screen.getByText('4');
      expect(elementWith2.classList.contains('active')).toBe(true);
      expect(elementWith4.classList.contains('active')).toBe(true);
    });
  });
});
