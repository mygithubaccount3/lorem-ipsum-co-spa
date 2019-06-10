<template>
    <main class="comment">
        <a href='' class='comment__link hvr-icon-back' @click.prevent="get">
            <i class='fa fa-arrow-left hvr-icon' aria-hidden='true'></i>
            Back to Comments
        </a>
        <div class='comment__btn-wrapper'>
            <button class='comment__delete' @click.preventDefault='remove'></button>
            <button class='comment__edit' @click.preventDefault='edit'></button>
            <button class='comment__save' disabled @click.preventDefault='save'></button>
        </div>
        <h1 class='comment__title'>{{ title }}</h1>
        <p class='comment__text'>{{ text }}</p>
        <p class='comment__conclusion'>Lorem Ipsum is text of the typesetting industry</p>
        <a href='index.html' class='comment__link hvr-icon-back'>
            <i class='fa fa-arrow-left hvr-icon' aria-hidden='true'></i>
            Back to Homepage
        </a>
    </main>
</template>

<script>
    import { store } from '../store'
    import vue from '../index'
    export default {
        data: function () {
            return {
                title: sessionStorage.title,
                text: sessionStorage.comment
            }
        },
        methods: {
            edit(e) {
                $(e.target).parent().nextAll('.comment__title, .comment__text').attr('contenteditable', true).css('box-shadow', 'inset 0px 0px 5px 0px #60e3a1');
                $(e.target).attr('disabled', true);
                $(e.target).next().removeAttr('disabled');
            },
            save(e) {
                $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
                    {
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        "data": "{\n    \"created_at\": " + Date.now() + ",\n    \"title\": " + "\"" +
                            $(e.target).parent().nextAll('.comment__title').text() + "\"" + ",\n    \"body\": " + "\"" +
                            $(e.target).parent().nextAll('.comment__text').text() + "\"" + "\n}",
                        "beforeSend": function () {
                            $(e.target).parent().nextAll('.comment__title, .comment__text').removeAttr('contenteditable').css('box-shadow', 'none');
                            $('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                                'background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore('.comment__link')
                        },
                        "complete": function () {
                            $('.comments-list__loader').remove();
                            $(e.target).attr('disabled', true);
                            $(e.target).prev().removeAttr('disabled');
                            sessionStorage.title = $(e.target).parent().next().text();
                            sessionStorage.comment = $(e.target).parent().nextAll('.comment__text').text();
                            store.commit('update', {title: sessionStorage.title, comment: sessionStorage.comment});
                        }
                    })
            },
            remove() {
                $.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/" + sessionStorage.id,
                    {
                        "method": "DELETE",
                        "timeout": 0,
                        "beforeSend": function () {
                            $('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;' +
                                'background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore('.comment__link')
                        },
                        "complete": function () {
                            $('.comments-list__loader').replaceWith('<div class="comments-list__loader" style="position: absolute; top: 0; ' +
                                'right: 0; bottom: 0; left: 0; background-color: white; opacity: 0.8; padding-top: 100px">' +
                                '<i class="fa fa-check" aria-hidden="true" style="animation: none; color: #60e3a1"></i></div>');
                        }
                    }).done(function () {
                    setTimeout(() => {
                        window.location.href = 'comments-list.html'
                    }, 3000);
                });
            },
            get() {
                vue._router.push({name:'List'})
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .comment {
        margin: 55px auto auto;
        min-height: 1081px;
        padding-bottom: 100px;
        position: relative;
        width: 56.2%;

        @include respond-to(smallScreen) {
            min-height: 538px;
            padding-bottom: 40px;
            width: 75%;
        }

        & > a:last-child {
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
            width: 215px;

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

        &__delete, &__edit, &__save {
            border: none;
            cursor: pointer;

            &:disabled {
                cursor: auto;
                opacity: 0.2;
            }

            &::after {
                font-family: FontAwesome;
            }
        }

        &__delete {
            background-color: rgba(255, 0, 0, 0.5);

            &::after {
                content: "\f00d";
            }
        }

        &__edit {
            background-color: rgba(255, 215, 0, 0.5);

            &::after {
                content: "\f040";
            }
        }

        &__save {
            background-color: rgba(144, 238, 144, 0.5);

            &::after {
                content: '\f00c';
            }
        }

        &__link {
            color: #1d1e25;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(16);
            font-weight: 400;
            line-height: 53px;
            position: relative;

            &:hover {
                color: #1d1e25;
                text-decoration: none;
            }

            & > i {
                color: #60e3a1;
                font-size: rem(14);
                padding-right: 13px;
            }

            &:first-child::after {
                background-color: #1d1e25;
                content: "";
                height: 1px;
                position: absolute;
                bottom: -2px;
                left: 29px;
                width: 137px;
            }
        }

        &__btn-wrapper {
            margin: auto;
            width: 88px;
        }

        &__title {
            border-radius: 7px;
            color: #1d1e25;
            font-family: "Sofia Pro Bold", sans-serif;
            font-size: rem(53);
            font-weight: 700;
            letter-spacing: 1.5px;
            line-height: 53px;
            margin-left: 1px;
            padding: 10px;
            width: 100%;

            @include respond-to(smallScreen) {
                font-size: rem(24);
                margin-top: 40px;
                margin-bottom: 8px;
            }
        }

        &__text {
            border-radius: 7px;
            color: #101417;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(16);
            font-weight: 400;
            line-height: 28px;
            padding: 10px;
        }

        &__conclusion {
            color: #111518;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(24);
            font-weight: 400;
            line-height: 72px;
            margin: auto auto 40px;
            opacity: 0.5;
            width: 505px;

            @include respond-to(smallScreen) {
                font-size: 1rem;
                line-height: 24px;
                margin-top: 40px;
                width: 180px;
            }
        }
    }
</style>
