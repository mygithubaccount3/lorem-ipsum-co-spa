<template>
    <main class="greeting">
        <h1 class="greeting__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
        <img src="assets/img/main-photo.jpg" alt="main photo" class="d-none d-md-inline-block">
        <section class="about-us" id="about-us">
            <div class="about-us__item">
                <img src="assets/img/people.png" alt="people">
                <h2>Who we are</h2>
                <ul>
                    <li>It is a long established fact that a reader will be distracted</li>
                    <li>The readable content of a page when looking at its layout</li>
                    <li>The point of using Lorem Ipsum</li>
                    <li>As opposed to using 'Content here, content here'.</li>
                </ul>
            </div>
            <div class="about-us__item">
                <img src="assets/img/monitor.png" alt="monitor">
                <h2>What we do</h2>
                <ul>
                    <li>Many desktop publishing packages and web page</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have</li>
                    <li>Various versions have evolved over the years, sometimes by accident</li>
                </ul>
            </div>
            <div class="about-us__item">
                <img src="assets/img/cog.png" alt="cog">
                <h2>Technology</h2>
                <ul>
                    <li>The point of using Lorem Ipsum</li>
                    <li>As opposed to using 'Content here, content here'</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                    <li>A Latin professor at Hampden-Sydney College in Virginia</li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .greeting {
        padding-top: 55px;
        padding-bottom: 55px;

        @include respond-to(smallScreen) {
            padding-top: 30px;
            padding-bottom: 30px;
        }

        &__title {
            color: #111518;
            font-family: "Sofia Pro Regular", sans-serif;
            font-size: rem(70);
            font-weight: 400;
            letter-spacing: 0.1px;
            line-height: 72px;
            margin-bottom: 84px;
            margin-left: 179px;
            width: 63%;

            @include respond-to(smallScreen) {
                font-size: rem(24);
                line-height: 36px;
                margin: auto auto 38px;
            }

            @include respond-to(tablet) {
                margin-right: auto;
                margin-left: auto;
                width: 80%;
            }
        }

        & > img {
            height: auto;
            width: 100%;
        }
    }

    .about-us {
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-top: 110px;
        width: 73.5%;

        @include respond-to(smallScreen) {
            flex-direction: column;
            padding-top: 0;
        }

        @include respond-to(tablet) {
            width: 80%;
        }

        &__item {
            display: inline-block;
            width: 26%;

            @include respond-to(smallScreen) {
                margin: auto;
                padding-top: 40px;
                width: 90%;
            }

            &:first-child {
                padding-top: 4px;

                @include respond-to(smallScreen) {
                    padding-top: 40px;
                }
            }

            & > h2 {
                color: #101417;
                font-family: "Sofia Pro Bold", sans-serif;
                font-size: rem(36);
                font-weight: 700;
                line-height: 80px;
                margin-bottom: 6px;

                @include respond-to(tablet) {
                    line-height: 1.3;
                }
            }

            &:nth-child(3) {
                & > h2 {
                    margin-top: 2px;
                }

                & > ul > li {
                    margin-bottom: 10px;

                    &:first-child {
                        margin-bottom: 16px;
                    }
                }
            }

            & > ul {
                padding-left: 1px;

                & > li {
                    color: #101417;
                    font-family: "Sofia Pro Regular", sans-serif;
                    font-size: rem(16);
                    font-weight: 400;
                    line-height: 20px;
                    list-style-type: none;
                    margin-bottom: 16px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &::before {
                        content: "\2022";
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>
