<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from 'header'
    import Footer from 'footer'
    import CommentsList from 'commentsList'
    import CommentsListItem from 'commentsListItem'
    import Comment from 'comment'

    export default {
        name: "App",
        components: {
            Header,
            Footer,
            CommentsList,
            CommentsListItem,
            Comment
        }
    }
</script>
