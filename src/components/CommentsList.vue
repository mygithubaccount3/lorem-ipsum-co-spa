<template>
    <main class="comments-list">
        <h1 class="comments-list__title">Comments</h1>
        <div class="comments-list__list grid"></div>
        <p class="comment__conclusion">Lorem Ipsum is text of the typesetting industry</p>
        <a href="index.html" class="hvr-icon-back"><i class="fa fa-arrow-left hvr-icon" aria-hidden="true"></i>Back to Homepage</a>
    </main>
</template>

<script>
    import CommentsListItem from 'commentsListItem'
    import { store } from '../store'
    export default {
        components: {CommentsListItem},
        mounted() {
            let settings = {
                "url": "https://5cbef81d06a6810014c66193.mockapi.io/api/comments",
                "method": "GET",
                "timeout": 0,
                "beforeSend": function () {
                    $('<div class="comments-list__loader"><i class="fa fa-cog" aria-hidden="true"></i></div>').insertAfter('.grid')
                },
                "complete": function () {
                    $('.comments-list__loader').remove()
                }
            };

            $.ajax(settings).done(function (response) {
                $(document).ready(() => {
                    if (!$.trim(response)){
                        $("<p class='comments-list__conclusion' style='text-align: center'>Nothing to show</p>").insertAfter(".grid");
                    }
                    else{
                        store.commit('add', response);
                        let componentsToRender = '<div class="comments-list__list grid">';
                        store.state[1].forEach((e, i, a) => {
                            componentsToRender += `<CommentsListItem title='${e.title}' body='${e.body}' id='${e.id}'></CommentsListItem>`;
                        });

                        componentsToRender += '</div>';

                        const res = Vue.compile(componentsToRender);
                        new Vue({
                            render: res.render,
                            staticRenderFns: res.staticRenderFns,
                            components: {CommentsListItem}
                        }).$mount('.grid')
                    }

                    $('.grid').masonry({
                        itemSelector: '.grid-item',
                        gutter: 10
                    });
                });
            });
        }
    }

</script>

<style lang="scss">
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .comments-list {
        padding-bottom: 100px;

        & > a {
            border: 1px solid #60e3a1;
            border-radius: 3px;
            color: #1d1e25;
            display: block;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(16);
            font-weight: 400;
            line-height: 20px;
            margin: auto;
            padding: 20px;
            width: 210px;

            @include respond-to(smallScreen) {
                padding: 5px;
                width: 180px;
            }

            &:hover {
                text-decoration: none;
            }

            & > i {
                color: #60e3a1;
                padding-right: 13px;
            }
        }

        &__title {
            color: #111518;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(70);
            font-weight: 400;
            line-height: 72px;
            margin-top: 55px;
            margin-bottom: 94px;
            margin-left: 180px;
            width: 345px;

            @include respond-to(smallScreen) {
                font-size: 3rem;
                margin: auto;
                width: 235px;
            }
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: auto;
            width: 78%;

            & > div {
                min-width: 300px;
                width: 45%;

                @media screen and (max-width: 1024px){
                    min-width: 255px;
                    width: 100%;
                }
            }
        }

        &__loader {
            text-align: center;

            & > i {
                animation: 1s infinite rotate;
                color: #111518;
                font-size: rem(72);
                opacity: 0.5;
            }
        }
    }



    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
