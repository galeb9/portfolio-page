<template>
  <div class="navigation__container">

    <div class="navigation--desktop">
        <Transition name="move-in-top">
            <nav class="navigation">
                <div class="logo display-on-desktop" @click="$router.push('/')" >
                    <img class="logo__img" src="@/assets/images/logo-colored.png" alt="">
                </div>

                <!-- nav1 -->
                <!-- <div class="nav1">
                    <div v-for="(link, index) in navLinks1" :key="index" class="navigation__link">
                        <router-link :to="link.path" >{{ link.text }}</router-link>
                    </div>
                </div> -->


                <!-- nav2 -->
                <!-- <div class="nav2">
                    <div v-for="(link, index) in navLinks2" :key="index" class="navigation__link">
                        <router-link :to="'/' + link.path" >{{ link.text }}</router-link>
                    </div>
                </div> -->
            </nav>
        </Transition>
    </div>

    <div class="navigation--mobile">
        <div class="display-on-mobile nav-top--mobile">
            <div class="logo" @click="$router.push('/')" >
                <img class="logo__img" src="@/assets/images/logo-colored.png" alt="">
            </div>
            <!-- <div class="hamburger__container" @click="toggleMenu">
                <font-awesome-icon v-if="!hamburgerActive" class="hamburger__icon" :icon="['fa', 'bars']"/>
                <font-awesome-icon v-else class="hamburger__icon" :icon="['fa', 'xmark']"/>
            </div> -->
        </div>
            <Transition name="move-in-top">
                <nav class="navigation" v-if="hamburgerActive">
                    <div class="logo display-on-desktop" @click="$router.push('/')" >
                        <img class="logo__img" src="@/assets/images/logo-colored.png" alt="">
                    </div>
                    
                    <!-- <div class="nav1">
                        <div v-for="(link, index) in navLinks1" :key="index" class="navigation__link">
                            <router-link :to="link.path" >{{ link.text }}</router-link>
                        </div>
                    </div>  -->

                    <!-- <div class="logo display-on-desktop" @click="$router.push('/')" >Logo</div> -->

                    <!-- <div class="nav2">
                        <div v-for="(link, index) in navLinks2" :key="index" class="navigation__link">
                            <router-link :to="'/' + link.path" >{{ link.text }}</router-link>
                        </div>
                        <BaseButton text="Spletno naročanje" />
                    </div> -->
                </nav>
            </Transition>
        </div>

     </div>
</template>

<script>
export default {
    name: "TheNavigation",
    data () {
        return {
            navLinks1: [
                { text: "Home", path: "" },
            ],
            navLinks2: [
                { text: "Home", path: "home" },
                { text: "Item", path: "akdslf" },
            ],
            hamburgerActive: false
        }
    },
    methods: {
        toggleMenu() {
            this.hamburgerActive = !this.hamburgerActive
            this.hamburgerActive ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
        }
    }
}
</script>

<style lang="scss">
    .navigation__container {
        padding: 20px 0;
        .navigation--mobile {
            display: none;
        }
        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav1, 
            .nav2 {
                display: flex;
                align-items: center;
                gap: 30px;
                flex: 1;
                .navigation__link { width: max-content }
            }
            .nav2 { justify-content: flex-end }
        }
        .logo { 
            cursor: pointer;
            .logo__img {
                max-height: 30px;
            }   
        }
        @media only screen and (max-width: 768px) {
            padding: 15px 0;
            .navigation--desktop { display: none }
            .navigation--mobile { display: block }
            .nav-top--mobile {
                display: flex !important;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                .hamburger__container {
                    padding: 5px 10px;
                    cursor: pointer;
                }
            }
            .navigation {
                background: $bgDark;
                position: absolute;
                z-index: 100;
                padding: 30px 0px ; 
                height: 95vh;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                .nav1, 
                .nav2 {
                    margin-left: 5px;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                    flex: 1;
                    .navigation__link { width: 100% }
                }
                .nav1 { margin-bottom: 15px }
                .nav2 { justify-content: flex-end }
            }
            .logo { 
                padding: 0;
                .logo__img {
                    max-height: 24px;
                }   
            }
        }
    }
</style>