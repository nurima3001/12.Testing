
import { fireEvent, render, screen } from '@testing-library/react';
import { PostForm } from './PostForm'

const mockCreatePost = jest.fn()

jest.mock('../services/post', () => ({
    usePostService: () => {
        return {
            createPosts: mockCreatePost
        }
    }
}))
describe('src/cpmponents/PostForm.jsx', () => {
    describe (`<PostForm/>`, () => {
        it('should render correctly', () => {
            render(<PostForm/>);
            screen.getByTestId('post-button');
            

        })
        it('should hit createPosts function when post-button clicked', () => {
            render(<PostForm/>);
            const postButton = screen.getByTestId('post-button');
            const postField = screen.getByPlaceholderText('post');
            act(() => {
                fireEvent.change(postField, { target: { value: 'test' } });
            })
            act(() => {
                postButton.click();
            })  
               
            expect(mockCreatePost).toBeCalled()
        })
    })
})