<template>
    <div class='grid-item hvr-bounce-in'>
        <p class='item-title'>{{ title }}</p>
        <p class='item-comment'>{{ body }}</p>
        <a class='item-link hvr-glow' @click.preventDefault='get'>Read more</a>
        <span style='display:none'>{{ id }}</span>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        props: ['title', 'body', 'id'],
        methods: {
            get(e) {
                store.commit('changeComponent', 'Comment');
                if (typeof(Storage) !== "undefined") {
                    sessionStorage.title = $(e.target).prev().prev().text();
                    sessionStorage.comment = $(e.target).prev().text();
                    sessionStorage.id = $(e.target).next().text();
                }
                else $('.comment__title').append('Your browser does not support storage')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .item-title, .item-comment {
        border: none;
        color: #333333;
        font-family: "Open Sans", sans-serif;
        font-size: rem(20);
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 17px;
        padding: 5px;
        resize: none;
        width: 94%;

        &:hover, &:active, &:focus {
            outline: none;
        }
    }

    .item-comment {
        color: #888888;
        font-size: rem(14);
        font-weight: 400;
    }

    .item-link {
        align-items: center;
        align-self: flex-start;
        background-color: #60e3a1;
        border-radius: 3px;
        color: #111518;
        cursor: pointer;
        display: flex;
        font-family: "Sofia Pro Regular", sans-serif;
        font-size: rem(16);
        font-weight: 400;
        justify-content: center;
        letter-spacing: 0.24px;
        line-height: 80px;
        height: 55px;
        width: 150px;

        &:hover {
            color: #111518;
            text-decoration: none;
        }
    }

    .grid {
        height: auto;
        max-width: 1200px;

        &:after {
            content: '';
            display: block;
            clear: both;
        }

        &-item {
            background-color: #ffffff;
            box-shadow: 7px 11px 30px rgba(17, 21, 24, 0.04);
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            float: left;
            height: fit-content;
            margin-bottom: 40px;
            overflow-wrap: break-word;
            padding: 40px;

            @include respond-to(smallScreen) {
                margin: auto auto 10px;
            }
        }

        @include respond-to(smallScreen) {
            justify-content: center;
            margin: auto;
        }

        @media screen and (min-width: 1200px){
            margin: auto auto auto 181px;
        }
    }
</style>
