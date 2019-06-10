<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <a class="navbar-brand hvr-bob" href="index.html"><img src="assets/img/logo.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link hvr-overline-from-center" to="/form" data-scroll>Write comment</router-link>
                    <router-link class="nav-item nav-link hvr-overline-from-center" to="/list" data-scroll>Comments</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
    @import "../scss/utils/utilities/variables";
    @import '../scss/utils/mixins/_mixins.scss';

    .navbar {
        display: flex;
        justify-content: space-between;
        padding-top: 44px;
        padding-right: 40px;
        padding-left: 50px;

        &-collapse {
            flex-grow: 0;
        }
    }

    .nav-item {
        color: #111518;
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
