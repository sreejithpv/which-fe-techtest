import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import PageDescription from '../../components/PageDescription';

describe('PageDescription Component', () => {
  const { getByTestId } = render(<PageDescription>This is page description</PageDescription>);

  it('displays the give PageDescription content', () => {
    const tree = getByTestId('page-description');
    expect(tree.innerHTML).toEqual('This is page description');
  });

  test("Render snapshot the component", () => {
    const tree = TestRenderer.create(<PageDescription>Snapshot PageDescription</PageDescription>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});