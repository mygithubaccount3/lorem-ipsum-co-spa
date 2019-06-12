<template>
    <section class="comment-form" id="comment-form">
        <p v-if="errors.length">
            <b>Please correct next error:</b>
        <!--v-show<ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>-->
        </p>
        <p v-if="sent" style="color: white">Comment sent</p>
        <div class="comment-form__wrapper">
            <h2 class="comment-form__title">{{header}}</h2>
            <form @submit.prevent.stop="sendForm">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Title" v-model="title">
                </div>
                <div class="form-group">
                    <textarea class="form-control" placeholder="Your comment" rows="6" v-model="comment"></textarea>
                </div>
                <button type="submit" class="btn hvr-hollow">Send</button>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                comment: '',
                header: 'Write comment',
                title: '',
                sent: false
            }
        },
        methods: {
            sendForm: function () {
                if (this.title && this.comment) {
                    const title = $('input').val();
                    const comment = $('textarea').val();
                    const time = Date.now();
                    const settings = {
                        "url": "https://5cbef81d06a6810014c66193.mockapi.io/api/comments",
                        "method": "POST",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        "data": "{\n    \"created_at\": " + time + ",\n    \"title\": " + "\"" + title + "\"" + ",\n    \"body\": " + "\"" + comment + "\"" + "\n}",
                    };

                    $.ajax(settings).done(function () {
                        app.sent = true;
                    });
                    return true;
                }

                this.errors = [];

                if (!this.title) {
                    this.errors.push('Enter title');
                }
                if (!this.comment) {
                    this.errors.push('Enter comment');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .comment-form {
        background-color: #1d1e25;
        padding-top: 130px;
        padding-bottom: 144px;

        @media screen and (max-width: 1024px) {
            padding-top: 50px;
            padding-bottom: 50px;
        }

        & > p {
            color: white;
            margin: auto;
            width: 190px;
        }

        & > ul {
            color: white;
            margin: auto;
            padding-left: 0;
            text-align: center;
            width: 149px;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            margin: auto;
            width: 74%;

            @include respond-to(smallScreen) {
                flex-direction: column;
            }
        }

        &__title {
            color: #ffffff;
            font-family: "Sofia Pro Bold", sans-serif;
            font-size: rem(55);
            font-weight: 700;
            line-height: 55px;
            position: relative;
            width: 300px;

            &::after {
                background-color: #f9d10d;
                content: "\00a0";
                display: block;
                height: 5px;
                position: absolute;
                top: 140px;
                left: 3px;
                width: 70px;

                @include respond-to(smallScreen) {
                    display: none;
                }
            }

            @include respond-to(smallScreen) {
                width: 235px;
            }
        }
    }

    form {
        margin-top: 10px;
        margin-right: 3px;
        width: 58.5%;

        @include respond-to(smallScreen) {
            width: 90%;
        }

        & .form-group {
            &:first-child .form-control {
                height: 55px;
            }

            &:last-of-type {
                margin-bottom: 14px;
            }
        }

        & .form-control {
            background-color: transparent;
            border: 1px solid #60e3a1;
            border-radius: 3px;
            padding: .6rem 1.2rem;

            &::placeholder {
                color: #60e3a1;
                font-family: "Sofia Pro Regular", sans-serif;
                font-size: rem(16);
                font-weight: 400;
                line-height: 31px;
                opacity: 0.6;
            }

            &:focus, &:hover {
                background-color: transparent;
                border-color: #80bdff;
                box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
                color: white;
                outline: 0;
            }
        }

        & textarea.form-control {
            height: 149px;
            resize: none;
        }

        & .btn {
            background-color: #60e3a1;
            border-radius: 3px;
            color: #1d1e25;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(16);
            font-weight: 400;
            line-height: 44px;
            width: 25.5%;

            @include respond-to(smallScreen) {
                width: 100px;
            }
        }
    }
</style>
