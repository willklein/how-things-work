import React from 'react'
import { getByTestId, render } from 'react-testing-library'
import 'dom-testing-library/extend-expect'

import Comment from './Comment'


const comment = {
  author: {
    username: 'rexy',
    image: 'rex-selfie.jpg',
  },
  body: 'RARRR',
}

describe('<Comment/>', () => {
  it('renders a comment', () => {
    const { getByTestId } = render(
      <Comment comment={comment} />
    )

    expect(getByTestId('comment')).toBeTruthy()
  })

  test('shows the author avatar', () => {
    const { getByTestId } = render(
      <Comment comment={comment} />
    )

    expect(getByTestId('comment-author-img').getAttribute('src')).toBe('rex-selfie.jpg')
  })

  it('should have the comment text', () => {
    const { getByTestId } = render(
      <Comment comment={comment} />
    )

    expect(getByTestId('comment')).toHaveTextContent('RARRR')
  })

  it('should have the comment text', () => {
    const { getByText } = render(
      <Comment comment={comment} />
    )

    expect(getByText('RARRR')).toBeTruthy()
  })
})