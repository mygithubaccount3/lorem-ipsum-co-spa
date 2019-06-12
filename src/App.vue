<template>
    <div id="app">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand hvr-bob" @click="go('Greeting')"><img src="assets/img/logo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link hvr-overline-from-center" @click="go('CommentForm')">Write comment</a>
                        <a class="nav-item nav-link hvr-overline-from-center" @click="go('CommentsList')">Comments</a>
                    </div>
                </div>
            </nav>
        </header>
        <transition name="flip" mode="out-in" appear>
            <component :is="component"></component>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from 'footer'
    import CommentsList from 'commentsList'
    import CommentsListItem from 'commentsListItem'
    import Comment from 'comment'
    import CommentForm from 'commentForm'
    import Greeting from 'greeting'
    import store from './store'

    export default {
        computed: Vuex.mapState(['component']),
        name: "App",
        components: {
            Footer,
            CommentsList,
            CommentsListItem,
            Comment,
            CommentForm,
            Greeting
        },
        methods: {
            go(component) {
                store.commit('changeComponent', component);
            }
        }
    }
</script>
<style lang="scss">
    @import "./scss/utils/utilities/variables";
    @import './scss/utils/mixins/_mixins.scss';

    .flip-enter, .flip-leave-to {
        transform: rotateY(90deg);
    }

    .flip-enter-active, .flip-leave-active {
        transition: transform 0.3s ease-out;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        padding-top: 44px;
        padding-right: 40px;
        padding-left: 50px;

        &-collapse {
            flex-grow: 0;
        }

        &-brand {
            cursor: pointer;
        }
    }

    .nav-item {
        color: #111518;
        cursor: pointer;
        font-family: "Sofia Pro", sans-serif;
        font-size: rem(14);
        font-weight: 500;
        letter-spacing: 0.98px;
        line-height: 21px;
        margin-right: 20px;
        padding-top: 5px;
        text-transform: uppercase;

        @media screen and (max-width: 991px){
            margin: auto;
            text-align: center;
            width: 140px;
        }

        &:last-child {
            margin-right: 0;

            @media screen and (max-width: 991px){
                margin: auto;
            }
        }
    }
</style>
