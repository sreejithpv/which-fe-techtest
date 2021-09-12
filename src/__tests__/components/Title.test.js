import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Title from '../../components/Title';

describe('Title Component', () => {
  const { getByTestId } = render(<Title title="This is title component" />);

  it('displays the give title content', () => {
    const tree = getByTestId('title');
    expect(tree.innerHTML).toEqual('This is title component');
  });

  test("Render snapshot the component", () => {
    const tree = TestRenderer.create(<Title title="Snapshot title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});