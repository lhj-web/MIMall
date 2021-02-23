# MiMall🎉🎉

> 使用Vue全家桶构建的PC端小米商城

## 简介🎈

此项目是一个使用Vue全家桶实现的PC端小米商城，
涉及登录、商品展示、购物车、下单等页面

## 技术栈✨

vue2 + vuex + vue-router + webpack + ES6/7 +  stylus + flex + svg等


## 项目运行🛠

#### 注意：由于涉及 ES6/7 等新属性，node 需要 6.0 以上版本

```
git clone https://github.com/lhj-web/MIMall.git  

npm install 或 yarn

npm run serve
```

## 说明🍕

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ 🌹


>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案 👍


## 项目结构🌲

```
|-- MiMall
    |-- .browserslistrc
    |-- .editorconfig
    |-- .eslintrc.js
    |-- .gitignore
    |-- babel.config.js
    |-- list.txt
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- public
    |   |-- index.html
    |   |-- img
    |       |-- banner-1.png
    |       |-- login-bg.jpg
    |       |-- login-logo.png
    |       |-- logo-footer.png
    |       |-- mi-home.png
    |       |-- mi-logo.png
    |       |-- mix-alpha.jpg
    |       |-- ads
    |       |   |-- ads-1.png
    |       |   |-- ads-2.jpg
    |       |   |-- ads-3.png
    |       |   |-- ads-4.jpg
    |       |-- box
    |       |   |-- item-box-1.png
    |       |   |-- item-box-2.png
    |       |   |-- item-box-3.jpg
    |       |   |-- item-box-4.jpg
    |       |-- detail
    |       |   |-- icon-loc.png
    |       |   |-- item-price.jpeg
    |       |   |-- phone-1.jpg
    |       |   |-- phone-2.jpg
    |       |   |-- phone-3.jpg
    |       |   |-- phone-4.jpg
    |       |-- loading-svg
    |       |   |-- loading-balls.svg
    |       |   |-- loading-bars.svg
    |       |   |-- loading-bubbles.svg
    |       |   |-- loading-cubes.svg
    |       |   |-- loading-cylon-red.svg
    |       |   |-- loading-cylon.svg
    |       |   |-- loading-spin.svg
    |       |   |-- loading-spinning-bubbles.svg
    |       |   |-- loading-spokes.svg
    |       |-- nav-img
    |       |   |-- nav-1.png
    |       |   |-- nav-2.png
    |       |   |-- nav-3-1.jpg
    |       |   |-- nav-3-2.jpg
    |       |   |-- nav-3-3.png
    |       |   |-- nav-3-4.jpg
    |       |   |-- nav-3-5.jpg
    |       |   |-- nav-3-6.png
    |       |   |-- nav-3.png
    |       |   |-- nav-4.png
    |       |   |-- nav-5.png
    |       |   |-- nav-6.png
    |       |-- product
    |       |   |-- gallery-1.png
    |       |   |-- gallery-2.png
    |       |   |-- gallery-3.png
    |       |   |-- gallery-4.png
    |       |   |-- gallery-5.jpg
    |       |   |-- gallery-6.jpg
    |       |   |-- product-bg-1.png
    |       |   |-- product-bg-2.png
    |       |   |-- product-bg-3.png
    |       |   |-- video.mp4
    |       |-- slider
    |           |-- slide-1.jpg
    |           |-- slide-2.jpg
    |           |-- slide-3.jpg
    |           |-- slide-4.jpg
    |           |-- slide-5.jpg
    |-- src
        |-- App.vue
        |-- env.js
        |-- main.js
        |-- assets
        |   |-- css
        |   |   |-- reset.css
        |   |   |-- stylus
        |   |       |-- base.styl
        |   |       |-- btn.styl
        |   |       |-- container.styl
        |   |       |-- mixins.styl
        |   |       |-- variables.styl
        |   |-- icon
        |       |-- icon-15day.png
        |       |-- icon-7day.png
        |       |-- icon-add.png
        |       |-- icon-arrow.png
        |       |-- icon-cart-checked.png
        |       |-- icon-cart-hover.png
        |       |-- icon-cart.png
        |       |-- icon-close.png
        |       |-- icon-gou.png
        |       |-- icon-loc.png
        |       |-- icon-post.png
        |       |-- icon-search.png
        |       |-- icon-setting.png
        |-- components
        |   |-- common
        |   |   |-- login
        |   |   |   |-- Login.vue
        |   |   |-- navBar
        |   |       |-- Modal.vue
        |   |       |-- NavFooter.vue
        |   |       |-- NavHeader.vue
        |   |       |-- OrderHeader.vue
        |   |       |-- ServiceBar.vue
        |   |-- content
        |       |-- cart
        |       |   |-- Cart.vue
        |       |-- Index
        |       |   |-- ProductBox.vue
        |       |   |-- ProductParams.vue
        |       |-- swiper
        |           |-- Swiper.vue
        |-- router
        |   |-- index.js
        |-- storage
        |   |-- index.js
        |-- store
        |   |-- actions.js
        |   |-- index.js
        |   |-- mutations.js
        |-- utils
        |   |-- index.js
        |-- views
            |-- home
                |-- Home.vue
                |-- childComps
                    |-- Detail.vue
                    |-- Index.vue
                    |-- Product.vue

```