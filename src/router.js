import CommentsList from 'commentsList'
import Greeting from 'greeting'
import Comment from 'comment'
import CommentForm from 'commentForm'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Greeting
        },
        {
            path: '/list',
            name: 'List',
            component: CommentsList
        },
        {
            path: '/comment',
            name: 'Comment',
            component: Comment
        },
        {
            path: '/form',
            name: 'Form',
            component: CommentForm
        }
    ]
});

export default router
