const host = require('./index');

/**
 * @description Markup for email verfication
 * @param {string} username
 * @param {string} email
 * @param {string} hash - email hash
 * @returns {string} markup template
 */
const welcomeTemplate = (firstname, username, email, hash) => (
  `<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>

    .header {    
    
    color: #ec3057;
    width: 100%
}
.btn1 {
    border: 1px solid #f5ecee;
    background: #ec3057;
    padding: 10px 20px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    margin: 10px;
    color: #f8f8f8

}
.btn1:hover{
    color: aliceblue;
}

body{
    background-image: linear-gradient(#f8f8f8, pink);
}







/*------------------------------------------------------------------
[Main Stylesheet]

Project:    Neer
Version:    1.1.0
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[Table of contents]
    1. Top Header / .top-header
    2. Main Header / .main-header
    3. Home Page Banner (Main Home) / .banner
    4. Banner Search Box / .search-area
    5. Featured Properties / .featured-properties
    6. Application Counter / .counters
    7. Partner / .partners-block
    8. Map Content /.map-content
    9. Map Content Sidebar /.map-content-sidebar
    10. Single Page Banner / .sub-banner
    11. Properties List View / .listing-properties-box
    12. Properties Grid View / .recent-properties-box
    13. Single Property Details / .properties-details-page
    14. Listing Page Sidebar /.sidebar
    15. Pricing Table /.pricing-container
    16. Agent Contact Form /.agent-widget
    17. Properties Comments /.properties-comments
    18. Specifications /.specifications
    19. My Profile /.my-profile
    20. My Properties Box /.my-properties-box
    21. Submit Property /.submit-property
    22. Blog /.blog-body
    23. Contact Form /.contact-form
    24. Signup/Login Wrapper /.form-content-box
    25. Pagination /.pagination
    26. Main Footer / .main-footer
    27. Sub Footer / .sub-footer
-------------------------------------------------------------------*/
/** Global classes**/
html, body {
    height: 100%;
}

body {
    font-family: 'Raleway', sans-serif;
}

a {
    cursor: pointer;
    color: #4d4d4d;
}

a:hover {
    color: #525252;
    text-decoration: none;
}

p {
    font-size: 16px;
    line-height: 30px;
    color: #535353;
}

strong {
    color: #535353;
}

span {
    color: #535353;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #4d4d4d;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: #535353;
}

.btn.focus, .btn:focus {
    outline: 0;
    box-shadow: none;
}

/** Social media color **/
.facebook:hover {
    color: #3b589e !important;
}

.twitter:hover {
    color: #56d7fe !important;
}

.google:hover {
    color: #dc4e41 !important;
}

.rss:hover {
    color: #e78733 !important;
}

.linkedin:hover {
    color: #1c82ca !important;
}

/** Social media bg**/
.facebook-bg {
    background: #4867aa;
    color: #fff;
}

.twitter-bg {
    background: #33CCFF;
    color: #fff;
}

.google-bg {
    background: #db4437;
    color: #fff;
}

.linkedin-bg {
    background: #0177b5;
    color: #fff;
}

.rss-bg{
    background: #e78733;
    color: #fff;
}

.pinterest-bg {
    background: #bd081c;
    color: #fff;
}

.facebook-bg:hover {
    background: #3b589e;
    color: #fff;
}

.twitter-bg:hover {
    background: #56d7fe;
    color: #fff;
}

.linkedin-bg:hover {
    background: #1c82ca;
    color: #fff;
}

.google-bg:hover {
    background: #dc4e41;
    color: #fff;
}

.rss-bg:hover {
    background: #e78701;
    color: #fff;
}

.pinterest-bg:hover {
    background: #a30618;
    color: #fff;
}

/** Overview bgi **/
.overview-bgi {
    position: relative;
}

.overview-bgi:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
}

.delay-02s {
    animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s
}

.delay-03s {
    animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s
}

.delay-04s {
    animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s
}

.delay-05s {
    animation-delay: 0.5s;
    -webkit-animation-delay: 0.5s
}

.delay-06s {
    animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s
}

.delay-07s {
    animation-delay: 0.7s;
    -webkit-animation-delay: 0.7s
}

.delay-08s {
    animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s
}

.delay-09s {
    animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s
}

.delay-1s {
    animation-delay: 1s;
    -webkit-animation-delay: 1s
}

.delay-12s {
    animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s
}

.delay-15s {
    animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s
}

.delay-17s {
    animation-delay: 1.7s;
    -webkit-animation-delay: 1.7s
}

.delay-20s {
    animation-delay: 2.0s;
    -webkit-animation-delay: 2.0s
}

/** Btn **/
.btn-sm {
    cursor: pointer;
    padding: 7px 12px;
    letter-spacing: 1px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    transition: .5s;
    border-radius: 2px;
    border: none;
    color: #fff;
}

.btn-sm:hover {
    color: #fff;
    text-decoration: none;
}

.btn-md {
    cursor: pointer;
    padding: 13px 26px;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    transition: .5s;
    border-radius: 2px;
    border: none;
}

.btn-md:hover {
    color: #fff;
}

button:focus {
    outline: 0 auto -webkit-focus-ring-color;
}

.btn-block i{
    color: #fff;
}

.pricing-btn {
    padding: 6px 30px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.bomd {
    padding: 13px 26px;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    transition: .5s;
    border-radius: 2px;
}

.btn {
    border-radius: 2px;
}

.btn-sm {
    padding: 7px 30px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
}

.btn-md {
    cursor: pointer;
    padding: 13px 30px 11px 30px;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 3px;
}

.btn-lg {
    cursor: pointer;
    padding: 14px 32px 10px 32px;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
}

.btn:focus, .btn:active, .btn:focus {
    box-shadow: none !important;
    outline: none;
}

.btn-theme {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
}

.btn-theme:hover {
    color: #FFF;
}

.btn-white-lg-outline {
    color: #FFF;
    background: transparent;
    border: solid 2px #FFF;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px 30px;
    font-size: 12px;
}

.btn-white-lg-outline:hover {
    color: #FFF;
}

.btn-theme-sm-outline {
    color: #FFF;
    border: solid 2px #FFF;
    background: transparent;
    text-transform: uppercase;
    font-weight: 600;
    padding: 5px 18px;
    font-size: 12px;
}

.btn-theme-sm-outline:hover {
    color: #FFF;
    padding: 5px 18px;
}

.btn-round {
    border-radius: 30px;
}

/*Custom Anmation*/
.bgburns .slides li:nth-of-type(odd) .slide-background {
    animation: bgburnsEast 25s linear infinite alternate;
    -webkit-animation: bgburnsEast 25s linear infinite alternate
}

.bgburns .slides li:nth-of-type(even) .slide-background {
    animation: bgburnsWest 25s linear infinite alternate;
    -webkit-animation: bgburnsWest 25s linear infinite alternate
}

@keyframes bgburnsEast {
    from {
        transform: scale(1) translateX(0);
        -webkit-transform: scale(1) translateX(0)
    }
    to {
        transform: scale(1.2) translateX(100px);
        -webkit-transform: scale(1.2) translateX(100px)
    }
}

@-webkit-keyframes bgburnsEast {
    from {
        transform: scale(1) translateX(0);
        -webkit-transform: scale(1) translateX(0)
    }
    to {
        transform: scale(1.2) translateX(100px);
        -webkit-transform: scale(1.2) translateX(100px)
    }
}

@keyframes bgburnsWest {
    from {
        transform: scale(1) translateX(0);
        -webkit-transform: scale(1) translateX(0)
    }
    to {
        transform: scale(1.2) translateX(-100px);
        -webkit-transform: scale(1.2) translateX(-100px)
    }
}

@-webkit-keyframes bgburnsWest {
    from {
        transform: scale(1) translateX(0);
        -webkit-transform: scale(1) translateX(0)
    }
    to {
        transform: scale(1.2) translateX(-100px);
        -webkit-transform: scale(1.2) translateX(-100px)
    }
}

@media all and (max-width: 767px) {
    .flex-direction-nav {
        display: none
    }

    .bgburns .slides li .slide-background {
        -webkit-animation: none !important;
        animation: none !important
    }
}

#page_scroller {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s;
    cursor: pointer;
    color: #FFF;
    padding: 10px 11px;
    font-size: 12px;
    position: fixed;
    bottom: 25px;
    right: 25px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
}

.margin-t-10 {
    margin-top: 10px;
}

.checkbox {
    padding-left: 3px;
    margin-bottom: 5px;
}

.checkbox label {
    display: inline-block;
    position: relative;
    padding-left: 15px;
    color: #4e4d4d;
    font-size: 13px;
}

.checkbox label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 3px;
    top: -3px;
    margin-left: -25px;
    border: 2px solid #cccccc;
    border-radius: 50px;
    background-color: #fff;
    -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
}

.checkbox-theme input[type="checkbox"]:checked + label::before {
    background-color: #fff;
}

.advanced-search .checkbox {
    padding-left: 5px;
    margin-bottom: 5px;
}

input[type=checkbox]:checked + label:before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f00c";
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
    text-align: center;
    line-height: 16px;
    font-weight: 300;
}

/* Col pad **/
.col-pad {
    padding: 0;
}

/** Solid buttons colors **/
.button-default {
    color: #555;
    background: #DDD;
}

.button-default:hover {
    color: #333;
    background: #DDD;
}

.button-theme {
    color: #FFF !important;
    outline: none;
}

.button-theme:hover {
    color: #fff;
}

.read-more {
    font-weight: 600;
    font-size: 15px;
}

.read-more:hover {
    color: #37404d;
}

.button-section .btn {
    margin-bottom: 5px;
}

.form-control:focus {
    border-color: #e0e0e0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.btn.active, .btn:active {
    box-shadow: none;
}

/** Border buttons colors **/
.border-btn-sm {
    cursor: pointer;
    padding: 5px 12px;
    letter-spacing: 1px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: #555;
    background: #DDD;
    transition: .5s;
    border-radius: 2px;
    border: none;
}

.border-button-default {
    color: #555;
    background: #DDD;
}

.border-button-default:hover {
    color: #333;
    background: #DDD;
}

.border-button-theme {
    background: transparent;
}

.border-button-theme:hover {
    color: #fff;
}

.alert {
    text-transform: uppercase;
    font-size: 11px;
    border-radius: 0;
}

.panel-title {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
}

/* Below tabs mode */
.tab-style-2-line.tabs-below > .nav-tabs > li {
    border-top: 4px solid transparent;
}

.tab-style-2-line.tabs-below > .nav-tabs > li > a {
    margin-top: 0;
}

.tab-style-2-line.tabs-below > .nav-tabs > li:hover {
    border-bottom: 0;
    border-top: 4px solid #b2b1b1;
}

.tab-style-2-line.tabs-below > .nav-tabs > li.active {
    margin-bottom: -2px;
    border-bottom: 0;
    border-top: 4px solid #b2b1b1;
}

.tab-style-2-line.tabs-below > .tab-content {
    margin-top: -10px;
    border-top: 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}

/** Top header start **/
.top-header {
    background-color: #111111;
}

.top-header .list-inline {
    padding: 8px 0;
}

.list-inline a {
    color: #fff;
    margin-right: 15px;
    font-size: 13px;
}

.list-inline a i {
    margin-right: 5px;
}

.top-header ul li {
    padding: 0 5px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    color: #aaa;
}

.top-header .sign-in, .top-header .sign-in:hover {
    line-height: 36px;
    font-size: 11px;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: 600;
}

.top-header ul li a {
    color: #fff;
}

/** Main header start **/
.main-header{
    box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
}

.main-header .logo {
    padding: 20px 0;
    float: left;
}

.main-header .pad-0{
    padding: 0;
}

.main-header .btn-md{
    margin-top: 20px;
}

.main-header .logo img {
    height: 40px;
}

.header-transparent {
    position: absolute;
    z-index: 9;
    width: 100%;
    border-bottom: 1px solid rgba(220, 220, 220, .2)
}

.main-header .navbar-expand-lg .navbar-nav .nav-link {
    color: #636060;
}

.main-header .navbar-expand-lg .navbar-nav .nav-link {
    padding: 30px 15px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #515151;
    text-transform: uppercase;
}

.main-header .navbar-expand-lg .navbar-nav .link-color:hover {
    background: transparent;
}

.main-header .navbar-expand-lg .user-account {
    padding: 30px 15px;
    font-size: 14px;
    font-weight: 600;
}

.main-header .navbar-expand-lg .user-account li {
    border: none;
    display: inline-block;
    font-size: 14px;
}

.main-header .navbar-expand-lg .user-account li a {
    color: #4d4d4d;
}

.main-header .navbar {
    padding: 0;
}

.main-header .form-inline .submit {
    padding: 7px 22px;
    border-radius: 3px;
    font-size: 14px;
    margin-left: 15px;
    font-weight: 600;
}

.main-header .dropdown-menu {
    min-width: 10rem;
    padding: 0;
    margin: 0;
    font-size: 13px;
    color: #212529;
    border: 1px solid transparent;
    -webkit-transition: opacity .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
    transition: opacity .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
    transition: opacity .4s ease 0s, transform .4s ease 0s, visibility .4s linear 0s;
    transition: opacity .4s ease 0s, transform .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
    border-radius: 0;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.dropdown .dropdown-item:hover > .dropdown-menu {
    display: block;
    -webkit-transition: opacity .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
    transition: opacity .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
    transition: opacity .4s ease 0s, transform .4s ease 0s, visibility .4s linear 0s;
    transition: opacity .4s ease 0s, transform .4s ease 0s, visibility .4s linear 0s, -webkit-transform .4s ease 0s;
}

.main-header .dropdown-menu .dropdown-submenu .dropdown-menu{
    margin: -1px;
}

.main-header .dropdown-menu a {
    padding: 12px 20px;
    color: #535353;
    transition: all .3s ease-in-out;
    text-transform: none;
    font-weight: 500;
    font-size: 13px;
}

.main-header .dropdown-menu a:hover {
    background: transparent;
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
}

/** Megamenu **/
.megamenu-li {
    position: static;
}

.megamenu {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    padding: 15px;
}

.megamenu-area {
    padding: 30px 30px 5px;
    z-index: 2;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.megamenu-title {
    color: #535353;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.megamenu-section {
    margin-bottom: 25px;
}

.megamenu-area .dropdown-item {
    padding: 0 !important;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
}

.megamenu-section p {
    font-size: 13px;
    color: #777;
}

/** Banner**/
#banner {
    position: relative;
}

.banner {
    font-family: 'Raleway', sans-serif;
}

.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
}

.banner-bg {
    background: url("../img/banner/banner-1.jpg");
}

.item-bg {
    /*background: url("../img/banner-1.jpg");*/
    height: 100vh;
    /*animation: bgburnsEast 25s linear infinite alternate;
    -webkit-animation: bgburnsEast 25s linear infinite alternate;*/
}

.banner-min-height {
    height: 720px;
}

.banner-max-height img {
    max-height: 720px;
}

.banner .slider-mover-left {
    width: 35px;
    height: 50px;
    line-height: 55px;
    position: absolute;
    top: 45%;
    z-index: 5;
    display: inline-block;
    left: 0;
    background: #151515;
    text-align: center;
    border-radius: 0 5px 5px 0;
}

.banner .slider-mover-right {
    width: 35px;
    height: 50px;
    line-height: 55px;
    position: absolute;
    top: 45%;
    z-index: 5;
    display: inline-block;
    right: 0;
    background: #151515;
    text-align: center;
    border-radius: 5px 0 0 5px;
}

.banner .slider-mover-right i {
    font-size: 20px;
    color: #fff;
}

.banner .slider-mover-left i {
    font-size: 20px;
    color: #fff;
}

.banner .carousel-content {
    align-self: center;
    margin: 0 auto;
    color: #fff;
}

.carousel-item .text-right {
    float: right;
}

.banner .banner-slider-inner{
    padding: 0;
}

.banner .banner-slider-inner h1 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: normal;
}

.banner .banner-slider-inner h2 {
    color: #fff;
    margin-bottom: 25px;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: normal;
}

.banner .banner-slider-inner h3 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: normal;
}

.banner .banner-slider-inner .max-w {
    max-width: 490px;
}

.banner .banner-slider-inner p {
    color: #fff;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.8;
    margin-bottom: 40px;
}

.banner .banner-slider-inner h1 span {
    font-weight: 900;
}

.banner .banner-slider-inner .typed-text {
    font-size: 62px;
}

.banner .banner-slider-inner {
    display: inline-block;
    text-shadow: none;
    right: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: rgba(36, 42, 53, 0.7);
}

.banner .banner-slider-inner .btn-lg {
    margin: 3px;
}

.banner-bg-color .banner-slider-inner {
    background-color: rgba(255, 255, 255, 0.1);
}

.banner .carousel-bg .carousel-item {
    height: 100vh;
    background: #3e4a5b;
}

.banner_video_bg {
    max-height: 720px;
}

.pattern-overlay {
    /*background-color: rgba(0, 0, 0, 0.35);
    height: 100vh;*/
}

.banner_video_bg .carousel-item {
    height: 720px;
}

#particles-banner {
    width: 100%;
    height: 100vh;
    background-color: rgba(36, 42, 53, 0.7);
    position: absolute;
}

#particles-banner-wrapper .banner-slider-inner {
    background-color: transparent;
}

.banner-sty-2 .banner-slider-inner h1 {
    font-size: 50px;
}

/** Banner property start **/
.banner-property-box .property-price {
    margin-right: 10px;
    font-weight: 600;
    color: #fff;
}

.banner-property-box .rent {
    padding: 7px 20px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10px;
}

.banner .banner-slider-inner h3 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: normal;
}

.banner-property-box .location i {
    margin-right: 10px;
    color: #fff;
}

.banner-property-box .location{
    color: #fff;
}

.banner-property-box .meta ul li i{
    margin-right: 10px;
}

.banner-property-box .meta ul li{
    display: inline-block;
    margin-right: 30px;
    color: #fff;
}

.banner-property-box .meta ul li:last-child{
    margin: 0;
}

.banner-property-box .prl{
    margin-bottom: 30px;
}

.banner-6 .rent {
    color: #fff;
}

.banner-6 .meta{
    float: left;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
}

/** Search start **/
#search-style-1 {
    transition: all 0.4s;
}

#search-style-2{
    transition: all 0.4s;
    position: absolute;
    bottom: -85px;
    width: 100%;
}

.ssa2{
    box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
    background: #fff;
    padding: 30px 30px 0;
}

.search-area {
    display: none;
    width: 100%;
    bottom: 80px;
    text-align: left;
    z-index: 999;
    padding-top: 30px;
}

.search-area-2 {
    padding: 30px 0 0;
}

.bg-grea{
    background: #e6e6e6;
}

.bg-grea-2{
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.bg-grea-3{
    background: #f9f9f8;
}

.search-area-inner {
    margin: 0 auto;
}

.search-contents {
    border-radius: 4px;
    transition: 0.9s ease-out;
}

.show-search-area {
    z-index: 9999;
. search-contents transition: all 0.4 s;
    display: block;
}

.bootstrap-select.btn-group .dropdown-toggle .filter-option {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    text-align: left;
    font-size: 13px;
    color: #777;
    font-weight: 400;
}

.search-options-btn, .search-options-btn:hover {
    padding: 12px 20px 10px 20px;
    font-size: 13px;
    font-weight: 400;
    color: #FFF!important;
    cursor: pointer;
    z-index: 0;
    letter-spacing: 1px;
    position: absolute;
    bottom: 10px;
    border-radius: 50px;
}

.search-options-btn, .search-options-btn i {
    margin-left: 5px;
}

.search-options-btn .search-options{
    float: left;
}

.search-options-btn .icon{
    float: left;
}

.search-area label {
    font-size: 12px;
    color: #555;
    font-weight: 600;
}

.search-area .form-group {
    margin-bottom: 25px;
}

.search-fields {
    min-height: 45px;
    padding: 5px 0;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    background: #fff;
}

.form-control {
    padding-left: 15px;
}

.search-fields button {
    border-radius: 1px;
    box-shadow: none;
    border: none;
    background: #fff !important;
}

.search-button {
    cursor: pointer;
    padding: 14px 26px 12px;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    color: #FFF;
    transition: .5s;
    border-radius: 2px;
    border: none;
    width: 100%;
    outline: none;
}

.search-button:hover {
    color: #fff;
}

.inline-search-area {
    max-width: 950px;
    padding: 0 20px;
}

.inline-search-area .search-col {
    padding: 0;
    position: relative;
}

.inline-search-area .icon-append {
    color: #949494;
    font-size: 15px;
    left: 10px;
    position: absolute;
    top: 18px;
}

.inline-search-area .search-col:first-child .form-control {
    border-radius: 3px 0 0 3px;
}

.inline-search-area .search-col .form-control,
.inline-search-area button.btn-search {
    border-radius: 0;
    border: 0;
    height: 54px;
    margin-bottom: 0;
    font-size: 12px;
    color: #777;
}

.inline-search-area .search-col .form-control {
    padding-top: 12px;
}

.inline-search-area button.btn-search {
    padding-top: 10px;
}

.inline-search-area .btn-search {
    border-radius: 0 3px 3px 0 !important;
    margin: 0;
}

.inline-search-area .btn-search strong {
    color: #fff;
    margin-left: 5px;
}

.inline-search-area .search-fields,
.inline-search-area .search-fields:hover {
    border: none;
    padding: 0 !important;
}

.inline-search-area .bootstrap-select button {
    padding: 15px 15px 15px 15px;
    border-right: solid 1px #e0e0e0 !important;
    border-radius: 0;
    margin: 0 !important;
}

.inline-search-area .dropdown-toggle::after {
    margin-left: -4px;
    top: 24px;
    position: absolute;
}

.main-header .inline-search-area .dropdown-menu .dropdown-item:hover {
    -webkit-transform: none;
    transform: none;
}

.inline-search-area .btn-light:hover {
    color: #777;
}

.inline-search-area .bootstrap-select .dropdown-toggle .filter-option {
    position: absolute;
    top: 4px;
}

.inline-search-area .form-control{
    border-right: solid 1px #5a5a5a !important;
}

.isa-2{
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

/** Portfolio start **/
.filteriz-navigation {
    padding: 0;
    margin: 0 0 26px 0;
}

.filteriz-navigation li {
    font-size: 12px;
    color: #535353;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 5px 20px 5px 20px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    background: #fff;
    border: 0;
    margin-bottom: 4px;
    cursor: pointer;
}

.portfolio-item, .portfolio-item:focus {
    outline: none;
    margin-bottom: 30px;
    position: relative;
    cursor: pointer;
}

.portfolio-item img, .portfolio-item img:focus {
    outline: none;
    width: 100%;
    height: 100%;
}

.portfolio-item:hover img {
    zoom: 1;
    filter: alpha(opacity=20);
    -webkit-opacity: 0.1;
    opacity: 0.1;
}

.portfolio-item:hover .portfolio-content {
    display: inline;
    -webkit-transition-delay: 0.50s;
    transition-delay: 0.50s;
    background-color: rgba(0, 0, 0, 0.90);
    color: #fff;
    z-index: -999;
}

.portfolio-content {
    display: none;
    top: 0;
    width: 100%;
    text-align: center;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.8s ease;
    transition: all 0.8s ease;
    text-transform: uppercase;
    color: #1c1c1c;
    height: 100%;
    position: absolute;
    right: 0;
}

.portfolio-content-inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.portfolio-content p {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
}

.overview-box p {
    color: #333;
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
}

.overview {
    z-index: 9;
    cursor: default;
    overflow: hidden;
    text-align: center;
    position: relative;
    margin-bottom: 16px;
    box-shadow: 0 0 3px #ddd;
}

.overview .mask, .overview .content {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 25%;
    left: 0;
}

.overview img {
    display: block;
    position: relative;
    width: 100%;
    height: 232px;
}

.overview .big-img {
    height: 480px;
}

.overview-box img {
    left: 10px;
    margin-left: -10px;
    position: relative;
    -webkit-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
    border: none;
}

.overview-box:hover > img {
    -webkit-transform: scale(2) rotate(10deg);
    transform: scale(2) rotate(10deg);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=30)";
    filter: alpha(opacity=30);
    opacity: 0.3;
}

.overview h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 18px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    margin: 20px 0 0 0;
    text-shadow: none;
}

.overview-box h2 {
    color: #333;
    margin: 0 20px 0;
    background: transparent;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
}

.overview a.btn {
    display: inline-block;
    overflow: hidden;
    text-transform: uppercase;
}

.overview-box a.btn {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: all 0.5s linear;
    padding: 4px 20px;
}

.overview-box:hover h2,
.overview-box:hover p,
.overview-box:hover a.btn {
    -webkit-transform: scale(1);
    transform: scale(1);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    opacity: 1;
}

.most-popular-places .col-pad {
    padding: 0 8px;
}

/** Bootstrap select start **/
.bootstrap-select {
    width: 100% !important;
    font-family: 'Raleway', sans-serif;
}

.bootstrap-select button {
    color: #999;
    border-radius: 2px;
    outline: none;
    padding: 7px 15px 0 15px;
}

.bootstrap-select .dropdown-menu li {
    padding: 0;
}

.bootstrap-select .dropdown-menu li a {
    padding: 10px;
}
.bootstrap-select .dropdown-menu{
    padding: 0;
    margin: 0;
    border: none;
    border-bottom: none;
    border-radius: 0;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
}

.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {
    margin-top: 12px;
}

.bootstrap-select .dropdown-menu li a {
    padding: 10px;
    font-weight: 500;
    font-size: 12px;
    outline: none;
    border: 0 !important;
}

.dropdown-item.active, .dropdown-item:active {
    background-color: transparent;
}

.bootstrap-select .dropdown-menu li a:hover {
    border: none;
    font-size: 12px;
    font-weight: 500;
}

.bootstrap-select .btn-default.active,
.bootstrap-select .btn-default:active,
.bootstrap-select .open > .dropdown-toggle.btn-default {
    color: #333;
    background-color: #eee;
    border-color: transparent !important;
    box-shadow: none !important;
}

.bootstrap-select .btn-default:hover {
    background: transparent !important;
    color: #777 !important;
    box-shadow: none !important;
}

.bootstrap-select .btn-default.active,
.bootstrap-select .btn-default:active,
.bootstrap-select .open > .dropdown-toggle.btn-default {
    color: #333;
    background-color: transparent !important;
    border-color: #adadad;
}

.btn-default.active,
.btn-default:active,
.open > .dropdown-toggle.btn-default {
    color: #333;
    background-color: transparent !important;
    box-shadow: none !important;
    border-color: #adadad;
}

.bootstrap-select .dropdown-menu.inner {
    border: 0;
    border-top: none;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.btn-light:hover {
    color: #999;
}

.bootstrap-select .dropdown-toggle:focus {
    outline: none !important;
}

.bootstrap-select .dropdown-menu > .active > a,
.bootstrap-select .dropdown-menu > .active > a:focus,
.bootstrap-select .dropdown-menu > .active > a:hover {
    text-decoration: none;
    background-color: #fff;
    outline: 0;
}

.bootstrap-select .bs-actionsbox, .bootstrap-select .bs-donebutton, .bs-searchbox {
    padding: 4px 8px;
    background: #EEE;
    border-bottom: 1px solid #d5d5d5;
}

.bootstrap-select .bs-searchbox .form-control {
    margin-bottom: 0;
    width: 100%;
    float: none;
    height: 36px;
    border: 1px solid #ddd;
    box-shadow: none;
}

.bootstrap-select .dropdown-toggle .filter-option-inner {
    overflow: hidden;
    font-size: 13px;
}

.bootstrap-select .dropdown-menu li a.active:hover .text {
    color: #515151;
}

/** Main title start **/
.main-title {
    margin-bottom: 50px;
    text-align: center;
}

.main-title h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
}

.main-title h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.main-title p{
    font-size: 18px;
    margin-bottom: 0;
}

/** Property box start **/
.property-box {
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.property-box:hover {
    -webkit-box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
    -moz-box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
    box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
}

.property-thumbnail {
    position: relative;
}

.property-thumbnail:before {
    content: "";
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
    background: linear-gradient(to top,rgba(35,35,37,0.9) 0%,rgba(35,35,37,0.45) 35%,rgba(22,22,23,0) 60%,rgba(0,0,0,0) 100%);
    border-radius: 4px 4px 0 0;
    opacity: 1;
}

.property-box .detail {
    padding: 20px 20px;
    background: white;
}

.property-box .detail .title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
}

.property-box .detail .title a:hover {
    color: #343a40;
}

.property-box .detail .location {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
}

.property-box .detail .location a{
    color: #5f5e5e;
}

.property-box .detail .location i {
    margin-right: 10px;
}

.property-box .facilities-list{
    background: #f7f7f7;
    padding: 20px;
}

.property-box .facilities-list li {
    list-style: none;
    float: left;
    font-weight: 500;
    line-height: 30px;
    font-size: 14px;
    margin-right: 25px;
}

.property-box .facilities-list li:last-child{
    margin: 0;
}

.property-box .facilities-list li span{
    display: table;
    font-weight: 600;
}

.property-box .footer {
    padding: 15px 20px;
    font-size: 14px;
    color: #535353;
}

.property-box .footer a{
    color: #535353;
}

.property-box .footer span {
    float: right;
}

.property-box .footer i {
    margin-right: 5px;
}

.price-box {
    color: #fff;
    text-align: right;
    font-size: 15px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 20;
}

.listing-badges {
    position: absolute;
    top: 0;
    z-index: 999;
    right: 0;
    width: 100%;
    display: block;
    font-size: 15px;
    padding: 0;
    overflow: hidden;
    height: 100px;
}

.listing-badges .featured {
    float: left;
    transform: rotate(-45deg);
    left: -67px;
    top: 17px;
    position: relative;
    text-align: center;
    width: 200px;
    font-size: 12px;
    margin: 0;
    padding: 7px 10px;
    font-weight: 600;
    color: #fff;
    box-shadow: 1px 2px 3px 0 rgba(2, 0, 0, .2);
    background-color: rgba(0, 0, 0, 0.5);
}

/** Slick slider start**/
.slick-slider-area {
    position: relative;
}

.slick-slide-item {
    padding: 0 15px;
}

.slick-arrow-buton {
    position: absolute;
    top: 43%;
}

.slick-arrow-buton {
    width: 35px;
    height: 35px;
    line-height: 35px;
    top: 43%;
    border-radius: 50px;
    color: #fff;
    position: absolute;
    z-index: 999;
    cursor: pointer;
    text-align: center;
    background: #ccc;
}

.slick-next {
    right: -15px;
}

.slick-prev{
    left: -15px;
}

.slick-slide, .slick-slide:focus * {
    outline: none !important;
}

*:focus {
    outline: none !important;
}

/** Property box 2 start **/
.property-box-2 {
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, .08);
    -webkit-box-shadow: 0 0 10px 1px rgba(71, 85, 95, .08);
    -moz-box-shadow: 0 0 10px 1px rgba(71, 85, 95, .08);
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
}

.property-box-2:hover {
    -webkit-box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
    -moz-box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
    box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
}

.property-box-2 .detail .title {
    font-size: 22px;
    margin-bottom: 10px;
}

.property-box-2 .property-img img{
    width: 100%;
}

.property-box-2 .detail .title a:hover {
    color: #343a40;
}

.property-box-2 .detail .location {
    margin: 0;
}

.property-box-2 .detail .location a {
    font-size: 14px;
    color: #5f5e5e;
}

.property-box-2 .detail .location i {
    margin-right: 5px;
}

.property-box-2 .listing-badges .featured {
    left: -51px;
}

.property-box-2 .listing-time {
    position: absolute;
    z-index: 9;
    top: 8px;
    left: 30px;
}

.property-box-2 .facilities-list {
    background: #f7f7f7;
    padding: 20px 20px;
}

.property-box-2 .facilities-list li {
    list-style: none;
    float: left;
    font-weight: 500;
    line-height: 30px;
    font-size: 14px;
    margin-right: 25px;
}

.property-box-2 .facilities-list li span {
    display: table;
    font-weight: 600;
}

.property-box-2 .facilities-list li:last-child {
    margin: 0;
}

.property-box-2 .footer {
    padding: 15px 35px 15px 20px;
    font-size: 14px;
    color: #535353;
    font-weight: 500;
}

.property-box-2 .footer a {
    color: #535353;
}

.property-box-2 .footer i {
    margin-right: 5px;
}

.property-box-2 .footer span {
    float: right;
}

.hdg{
    padding: 20px;
}

/** About text **/
.about-text {
    padding: 20px 0 0 30px;
}

.about-text p {
    margin-bottom: 20px;
}

.about-text h3 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 30px;
}

/** About silider start **/
.about-slider-box {
    position: relative;
}

.about-slider-box .Properties-info {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    box-shadow: 0 10px 30px 0 rgba(58, 87, 135, .15);
}

.about-slider-box .Properties-info ul li {
    display: inline-block;
    width: 19%;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.7);
}

.about-slider-box .Properties-info ul li h4 {
    font-size: 12px;
    font-weight: 600;
    margin: 5px 0;
    color: #fff;
}

.about-slider-box .Properties-info ul li i {
    font-size: 20px;
    color: #fff;
}

/** Service box start **/
.service-box {
    padding: 15px;
    margin-bottom: 30px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    border: none;
}

.service-box .detail {
    padding: 20px 0 0;
}

.service-box img {
    border-radius: 0;
}

.service-box .heading {
    display: block;
    margin-bottom: 10px;
}

.service-box .heading .number {
    margin-right: 10px;
    float: left;
}

.service-box .heading .number h5 {
    font-size: 35px;
    font-weight: 600;
    margin: 0;
    line-height: 35px;
}

.service-box .title {
    float: left;
}

.service-box .heading .title h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 38px;
    margin: 0;
}

.service-box .read-more {
    font-weight: 600;
    font-size: 13px;
}

/** Slider btn start **/
.slider-btn-r {
    width: 30px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 45%;
    z-index: 5;
    display: inline-block;
    right: 5px;
    background: #1B1410;
    text-align: center;
    border-radius: 0;
}

.slider-btn-r i {
    font-size: 14px;
    color: #fff;
}

.slider-btn-l {
    width: 30px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 45%;
    z-index: 5;
    left: 5px;
    display: inline-block;
    background: #1B1410;
    text-align: center;
    border-radius: 0;
}

.slider-btn-l i {
    font-size: 14px;
    color: #fff;
}

/** Our agent sidebar start **/
.our-agent-sidebar .team-1 {
    margin: 0 auto 0;
    box-shadow: none;
    border-bottom: solid 1px #f7f7f7;
}

.our-agent-sidebar .carousel-indicators li {
    width: 10px;
    height: 10px;
    background-color: #8a8989;
    border-radius: 50px;
}

.our-agent-sidebar .carousel-indicators {
    bottom: 10px;
}

.our-agent-sidebar .p-20{
    padding: 20px 20px 0;
}

.our-agent-sidebar{
    margin-bottom: 20px;
}

/** Pricing 1 start **/
.pricing-1 {
    margin-bottom: 30px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.pricing-1 .plan-header {
    background-color: #fff;
    padding: 40px 22px 0;
    border-width: 1px;
    position: relative;
    text-align: center;
}

.pricing-1 .plan-header h5 {
    margin-bottom: 5px;
    font-weight: 600;
}

.pricing-1 .plan-header p {
    color: #c2c2c5;
}

.pricing-1 .plan-header .plan-price sup {
    font-size: 24px;
    position: relative;
    top: -30px;
    color: #bdc3c7;
    font-weight: 400;
}

.pricing-1 .plan-header .plan-price {
    font-size: 60px;
    font-weight: 700;
    position: relative;
    text-align: center;
    padding: 0;
}

.pricing-1 .plan-header .plan-price span {
    font-size: 16px;
    color: #bdc3c7;
    font-weight: 400;
}

.pricing-1 .plan-list {
    background-color: #fff;
    border-width: 0 1px 1px;
    padding: 20px 0 40px;
}

.pricing-1 .plan-list ul {
    display: table;
    margin: 0 auto;
    padding: 0 40px;
}

.pricing-1 .plan-list ul li {
    list-style: none;
    border-bottom: 1px dashed #eaeceb;
    line-height: 42px;
    font-size: 14px;
    color: #615f5f;
}

.pricing-1 .plan-list ul li i {
    margin-right: 12px;
}

.pricing-1 .plan-list ul li:last-child {
    border-bottom: none;
}

.pricing-1 .plan-button {
    padding-top: 20px;
}

.pricing-1 .pricing-btn {
    border-radius: 3px;
}

/** Team 1 start **/
.team-1 {
    margin: 0 auto 30px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.team-1:hover{
    box-shadow: none;
}

.team-1 img {
    width: 100%;
}

.team-1 .team-details {
    text-align: center;
    padding: 30px 20px 30px;
}

.team-1 .team-details h5 {
    margin-bottom: 15px;
    font-weight: 500;
}

.team-1 .team-details h5 a {
    color: #121415;
    font-size: 18px;
}

.team-1 .team-details h5 a:hover {
    color: #343a40;
}

.team-1 .team-details h6 {
    font-size: 15px;
    margin-bottom: 15px;
}

.team-1 .team-details h4{
    font-size: 15px;
    margin-bottom: 0;
}

.team-1 .social-list li {
    display: inline-block;
}

.team-1 .social-list li a {
    margin: 0 10px;
    color: #fff;
}

.team-1 .social-list{
    text-align: center;
}

.team-1 .team-photo {
    position: relative;
}

.team-1 .team-photo .social-list {
    position: absolute;
    width: 100%;
    padding: 15px 20px 10px;
    bottom: 0;
    background-image: -moz-linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.8) 100%);
    background-image: -ms-linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.8) 100%);
    background-image: -o-linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.8) 100%);
    background-image: -webkit-linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0.6) 50%,rgba(0,0,0,.8) 100%);
    background-image: -webkit-gradient(linear,center top,center bottom,from(rgba(0,0,0,0)),to(rgba(74, 74, 74,0.8)));
}

/** Team 2 start **/
.team-2 {
    margin: 0 1px;
    margin-bottom: 30px;
}

.team-2:hover {
    box-shadow: none;
}

.team-2 .detail {
    padding: 20px 20px 20px 25px;
    background: #fff;
    left: -30px;
    position: relative;
}

.team-2 img {
    width: 100%;
}

.team-2 .detail h5 {
    margin: 0 0 20px;
    font-size: 12px;
    font-weight: 600;
    color: #5f5e5e;
    text-transform: uppercase;
}

.team-2 .detail h4 {
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: 500;
}

.team-2 .detail h4 a {
    color: #121415;
}

.team-2 .detail h4 a:hover {
    color: #343a40;
}

.team-2 .photo {
    position: relative;
}

.team-2 .detail .contact {
    margin-bottom: 20px;
}

.team-2 .detail .contact ul li {
    line-height: 30px;
    font-size: 14px;
    position: relative;
    padding-left: 30px;
}

.team-2 .detail .contact ul li a{
    font-weight: 500;
    color: #5f5e5e;
}

.team-2 .detail .contact ul li i {
    left: 0;
    position: absolute;
    line-height: 30px;
}

.team-2 .detail .social-list li {
    display: inline-block;
    font-size: 16px;
}

.team-2 .detail .social-list li a {
    margin-right: 5px;
    font-size: 14px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
}

.team-2 .bg{
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

/** Service info start **/
.service-info {
    padding: 20px;
    margin: 0 auto 30px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.service-info .icon i {
    font-size: 40px;
}

.service-info h3 {
    font-size: 18px;
    margin: 15px 0;
    font-weight: 600;
}

.service-info p {
    margin-bottom: 0;
}

/** pages 404 start **/
.pages-404 .error404 {
    line-height: .8;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 300px;
    opacity: 2;
    color: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
}

.pages-404 .nobottomborder h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
}

.hr {
    width: 50px;
    height: 10px;
    background: #eee;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
    margin: 20px 0;
    border-radius: 10px;
}

.pages-404 .nobottomborder p {
    margin-bottom: 0;
    line-height: 30px;
    font-size: 17px;
}

.pages-404 .form-control {
    width: 69%;
    height: 45px;
    padding: 10px 15px;
    border-radius: 0;
    font-size: 13px;
    outline: 0;
    background-color: #eee;
    border-color: #eee;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #6c757c;
    font-weight: 600;
}

.pages-404 .btn, .pages-404 .btn:hover, .pages-404 .btn:active {
    width: 31%;
    border-radius: 0;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
}

.mr-0 {
    margin-right: 0;
}

.date-box span {
    font-family: 'Raleway',sans-serif;
    font-size: 19px;
    display: block;
    line-height: 22px;
    color: #fff;
}

/** Blog 1 start **/
.blog-1 {
    margin-bottom: 30px;
    border-radius: 0;
    border: none;
    background: transparent;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.blog-1:hover {
    box-shadow: none;
}

.blog-1 .blog-photo {
    position: relative;
}

.blog-1 .date-box {
    position: absolute;
    top: 20px;
    font-size: 14px;
    color: #fff;
    width: 60px;
    height: 60px;
    text-align: center;
    padding-top: 10px;
    left: 20px;
}

.blog-1 .date-box span {
    font-family: 'Raleway' ,sans-serif;
    font-size: 16px;
    display: block;
}

.blog-1 .detail {
    padding: 30px 20px 20px;
}

.blog-1 .detail h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.blog-1 .date-box::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 0;
    border-bottom: 20px solid transparent;
    bottom: -20px;
    left: 0;
}

.blog-1 .post-meta {
    width: 100%;
    margin-bottom: 10px;
}

.blog-1 .detail .post-meta span {
    margin-right: 20px;
    font-size: 13px;
    font-weight: 600;
}

.blog-1 .detail .post-meta span a i {
    margin-right: 5px;
}

.blog-1 .detail .post-meta span:last-child{
    margin-right: 0;
}

.blog-1 img{
    width: 100%;
}

/** Blog 3 start **/
.blog-3 {
    border-radius: 0;
    border: none;
    position: relative;
}

.blog-3 .blog-photo img {
    width: 100%;
}

.blog-3 .date-box {
    position: absolute;
    top: 15px;
    font-size: 13px;
    color: #fff;
    width: 60px;
    height: 60px;
    text-align: center;
    padding-top: 13px;
    right: 19px;
}

.blog-3 .date-box::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 0;
    border-bottom: 20px solid transparent;
    bottom: -20px;
    right: 0;
}

.blog-3 .detail {
    position: relative;
    float: left;
    width: 90%;
    margin: -30px 5% 30px 5%;
    padding: 25px 25px 15px 25px;
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    z-index: 4;
}

.blog-3 .detail h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
}

.blog-3 .post-meta {
    width: 100%;
    margin-bottom: 10px;
}

.blog-3 .detail .post-meta span {
    margin-right: 20px;
    font-size: 13px;
    font-weight: 600;
}

.blog-3 .detail .post-meta span a i {
    margin-right: 5px;
}

.blog-3 .detail p {
    font-size: 14px;
    margin-bottom: 0;
}

.blog-3 .detail h3 a:hover {
    color: #777;
}

/** Blog big start **/
.blog-big:hover{
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.blog-big .detail {
    padding: 30px 20px 20px;
}

.blog-big {
    margin-bottom: 50px;
}

.blog-big .detail h3 {
    font-size: 23px;
}

/** Footer start **/
footer {
    padding-top: 80px;
    background: #111;
}

.footer h4 {
    font-size: 20px;
    margin-bottom: 25px;
    font-weight: 500;
    color: #c5c5c5;
}

.footer .footer-item {
    margin-bottom: 50px;
}

.footer .footer-inner .links li {
    margin-bottom: 15px;
    font-size: 13px;
}

.footer .footer-inner .links li a {
    color: #7c7e83;
}

.footer .footer-inner .links li a:hover {
    color: #696b6f;
}

.footer .footer-inner p {
    color: #7c7e83;
    font-size: 13px;
}

.footer .footer-inner .contact-info li {
    margin-bottom: 15px;
    font-size: 13px;
    color: #7c7e83;
    position: relative;
    padding-left: 30px;
}

.footer .footer-inner .contact-info li i{
    left: 0;
    position: absolute;
    line-height: 22px;
}

.footer .footer-inner .contact-info li a {
    color: #7c7e83;
}

.footer .text{
    margin-right: 30px;
}

.footer .text p{
    line-height: 30px;
}

.footer .f-logo{
    margin-bottom: 20px;
    height: 50px;
}

.sub-footer .social-list li a {
    margin-left: 20px;
    color: #7c7e83;
    display: inline-block;
}

.sub-footer .social-list{
    float: right;
}

.sub-footer .social-list li{
    display: inline-block;
}

.sub-footer{
    background: #111;
    padding: 20px 0;
    border-top: solid 1px #1d1c1c;
}

.sub-footer .copy {
    margin: 0;
    font-size: 13px;
    color: #6d6d6d;
}

.sub-footer .copy a {
    color: #5f5f5f;
}

.footer .footer-inner form .form-control {
    width: 80%;
    height: 40px;
    padding: 10px 15px;
    border-radius: 0;
    font-size: 13px;
    outline: 0;
    border: 1px solid #ebebeb;
}

.footer .form-inline .btn {
    width: 20%;
    border-radius: 0;
    padding: 11px 13px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer .footer-inner .f-border {
    width: 30px;
    height: 3px;
    background: #c5c5c5;
    margin-bottom: 30px;
    border-radius: 50px;
}

/** Posts by category start **/
.posts-by-category ul {
    margin: 0;
    padding: 0;
    text-align: left;
}

.posts-by-category ul li {
    padding-bottom: 7px;
    margin-bottom: 7px;
    border-bottom: dashed 1px #ededed;
}

.posts-by-category ul li a {
    color: #535353;
    font-weight: 500;
    font-size: 14px;
}

.posts-by-category ul li a span {
    float: right;
    color: inherit;
}

.posts-by-category ul li:last-child {
    border-bottom: none;
    padding: 0;
    margin: 0;
}

/** Tags box start **/
.tags-box ul li {
    display: inline-block;
}

.tags-box ul li a {
    border: 1px solid #fff;
    background: #fff;
    color: #666;
    display: inline-block;
    font-size: 13px;
    margin: 0 0 5px;
    padding: 5px 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.tags-box ul li a:hover {
    color: #fff;
}

/** Recent properties start **/
.recent-properties .media img {
    width: 60px;
    border-radius: 2px;
}

.recent-properties .media h5 {
    margin-bottom: 7px;
    font-weight: 500;
}

.recent-properties .media h5 a {
    font-size: 18px;
}

.recent-properties .listing-post-meta {
    font-size: 14px;
    font-weight: 500;
    color: #757474;
}

.recent-properties .listing-post-meta a{
    color: #757474;
}

/** Counters start **/
.counters {
    padding: 60px 0 20px;
    background: url(../img/listings-parallax.jpg);
    z-index: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.counter-box {
    margin-bottom: 40px;
    text-align: center;
}

.counter-box i {
    font-size: 45px;
    color: #fff;
    line-height: inherit;
}

.counter-box h1 {
    font-weight: 700;
    color: #fff;
    margin: 10px 0 5px;
    font-size: 30px;
}

.counter-box p {
    margin: 0;
    font-size: 12px;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
}

/** Contact section start **/
.contact-section {
    background: rgba(0, 0, 0, 0.04) url(../img/banner/banner-2.jpg) top left repeat;
    background-size: cover;
    top: 0;
    width: 100%;
    bottom: 0;
    opacity: 1;
    min-height: 100vh;
    text-align: center;
}

.form-content-box {
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.0980392) 0 1px 1px;
    color: #7c7c7c;
    margin: 60px auto;
    text-align: center;
}

.form-content-box .form-group {
    margin-bottom: 25px;
}

.form-content-box .details {
    padding: 30px 30px;
    background: #fff;
    border-radius: 5px 5px 0 0;
}

.form-content-box .checkbox label::before {
    width: 0;
    height: 0;
    left: 0;
    margin-left: 0;
}

.form-content-box .checkbox {
    padding-left: 0;
    margin: 15px 0;
}

.form-content-box .checkbox label {
    padding-left: 0;
}

.form-content-box h3 {
    margin: 0 0 30px;
    font-size: 20px;
    font-weight: 500;
}

.form-content-box img {
    margin-bottom: 5px;
    height: 40px;
}

.form-content-box .input-text {
    width: 100%;
    padding: 10px 15px;
    font-size: 13px;
    border: 1px solid #e8e7e7;
    outline: none;
    color: #717171;
    border-radius: 3px;
    height: 45px;
}

.form-content-box .footer {
    font-size: 13px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 0 0 5px 5px;
    border-top: solid 1px #f5f5f5;
}

.form-content-box .footer span a {
    text-decoration: none;
    font-weight: bold;
}

.form-content-box .footer span a:hover {
    color: #8b8b8b;
}

.form-content-box .checkbox a {
    color: #8b8b8b;
    text-decoration: none;
    font-size: 13px;
}

.form-content-box .social-list li {
    display: inline-block;
    font-size: 16px;
    margin-top: 30px;
}

.form-content-box .social-list li a {
    margin: 0 3px;
    font-size: 14px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
}

/** Category start **/
.categories .col-pad {
    padding: 0 7.5px;
}

.category {
    overflow: hidden;
    position: relative;
    text-align: center;
    margin: 0 0 15px 0;
}

.category:hover:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
    background-color: #4d4d4d;
    opacity: 0.4;
    z-index: -11;
    transition: 0.3s ease-out;
}

.category_bg_box {
    transition: all 0.35s;
    border-radius: 3px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 220px;
}

.category_long_bg {
    height: 455px;
}

.cat-1-bg {
}

.cat-2-bg {
    background-image: url(../img/popular-places/popular-places-2.jpg);
}

.cat-3-bg {
    background-image: url(../img/popular-places/popular-places-3.jpg);
}

.cat-4-bg {
    background-image: url(../img/popular-places/popular-places-4.jpg);
}

.cat-5-bg {
    background-image: url(../img/popular-places/popular-places-5.jpg);
}

.category:hover .category_bg_box {
    transform: scale(1.06);
    transition: transform 0.35s ease-out;
}

.category .category-overlay {
    border-radius: 3px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color .15s linear;
    background-color: rgba(36, 42, 53, 0.5);
}

.category-subtitle {
    white-space: nowrap;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
}

.category-content {
    display: block;
    left: 80px;
    position: absolute;
    top: 35px;
    transform: translateX(-50%) translateY(-35%);
    transition: all .15s linear;
}

.category-content h3 {
    margin-bottom: 5px;
    text-align: left;
}

.category-content h3 a {
    color: #fff;
    font-size: 22px;
}

.category:hover .category-view-more {
    visibility: visible;
}

/** Listings parallax start **/
.listings-parallax {
    background: url(../img/listings-parallax.jpg);
    z-index: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #efefef;
    padding-top: 80px;
}

.listings-parallax .text {
    display: inline-block;
}

/** Social links start SOCIAL **/
.social-links .social-list li {
    display: inline-block;
    font-size: 16px;
}

.social-links .social-list li a {
    margin-right: 5px;
    font-size: 14px;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
}

/** Option bar start **/
.option-bar {
    margin-bottom: 30px;
    padding: 10px 15px;
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.option-bar .sort {
    color: #4d4d4d;
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
    line-height: 35px;
}

.sorting-options span {
    line-height: 35px;
}

.sorting-options{
    float: right;
}

.sorting-options2 .bootstrap-select{
    width: 200px !important;
    font-family: 'Raleway', sans-serif;
}

.sorting-options2 .search-fields {
    min-height: 36px;
    padding:0;
}

.sorting-options2 .dropdown-toggle::after {
    margin-left: .0em;
}

.sorting-options2 .bootstrap-select>.dropdown-toggle {
    padding-right: 30px;
}

.change-view-btn {
    border-radius: 2px;
    background: transparent;
    padding: 5px 9px;
    margin: 0 2px;
    display: inline-block;
}

.change-view-btn:hover {
    color: #fff;
}

.active-view-btn {
    color: #fff !important;
    padding: 5px 9px;
}

.active-view-btn:hover {
    background: transparent;
}

.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #ccc !important;
    filter: "alpha(opacity=20)";
    -ms-filter: "alpha(opacity=20)";
}

/**  Comments start **/
.comments {
    list-style: none;
    margin: 0;
    padding: 0;
}

.comment {
    margin: 0 0 30px 0;
    position: relative;
    display: inline-block;
    width: 100%;
}

.comment h5{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}

.comment-author {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    left: 0;
    position: absolute;
    top: 0;
}

.comment-author a img {
    bottom: 2px;
    border-radius: 10%;
    display: block;
    width: 100%;
    position: absolute;
    top: 2px;
}

.t-s {
    margin-top: 40px;
}

.t-s h2 {
    font-weight: 600;
    font-size: 22px;
    margin: 0 0 20px;
}

.comment-content {
    padding-bottom: 10px;
    border-bottom: dashed 1px #d6d6d6;
    margin: 0 0 0 85px;
}

.mrg-bdr {
    margin-bottom: 0;
    border-bottom: none;
    padding: 0;
}

.comment-content h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}

.comment-content .comment-rating {
    color: orange;
}

.comment-meta {
    margin-bottom: 10px;
    font-size: 13px;
    color: #535353;
    font-weight: 500;
}

.comment-meta a {
    margin-left: 20px;
    font-weight: 600;
}

.comments ul {
    list-style: none;
    margin: 0 0 0 80px;
    padding: 0;
}

.comment-b .comment-content {
    padding-bottom: 0;
    border-bottom: transparent;
    margin: 0 0 0 85px;
}

.comment-b .comment-content p{
    margin-bottom: 0;
}

.comment-b{
    margin-bottom: 0;
}

.comment-content ul {
    margin-bottom: 20px;
}

.comment-content ul li {
    font-weight: 600;
    color: #50596E;
    line-height: 30px;
    font-size: 14px;
}

.comment-content ul li span {
    font-weight: 500;
    color: #737780;
}

.comment-content ul li a{
    color: #737780;
}

.comment-content .btn-1 {
    border: none;
    cursor: pointer;
    padding: 8px 20px;
    display: inline-block;
    outline: none;
    font-size: 12px;
    border-radius: 25px;
    font-weight: 500;
    background: #e9ecef;
    color: #868e96;
}

/** Coming soon start **/
.coming-soon-bg {
    background: rgba(0, 0, 0, 0.04) url(../img/listings-parallax.jpg) top left repeat;
    background-size: cover;
    top: 0;
    width: 100%;
    bottom: 0;
    opacity: 1;
    min-height: 100vh;
}

.coming-soon-inner img {
    margin-bottom: 20px;
    height: 40px;
}

.coming-soon-inner {
    text-align: center;
    margin: 100px auto 50px;
    max-width: 820px;
    color: #fff;
}

.coming-soon-inner h1 {
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 50px;
    color: #fff;
}

.coming-soon-inner h6 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 30px;
    letter-spacing: 1px;
}

.coming-soon-inner ul li {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
}

.coming-soon-inner ul li a {
    color: #fff;
}

.coming-soon-inner .coming-form{
    max-width: 55%;
    margin: 30px auto;
}

.coming-soon-inner .bordered-right {
    border-right: 1px solid #848484;
}

.coming-soon-inner .form-control {
    width: 69%;
    height: 42px;
    padding: 10px 15px;
    border-radius: 0;
    font-size: 13px;
    outline: 0;
    border: 1px solid #ebebeb;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.coming-soon-inner .btn, .coming-soon-inner .btn:hover, .coming-soon-inner .btn:active {
    width: 31%;
    border-radius: 0;
    height: 42px;
    line-height: 42px;
    padding: 0 15px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
}

.coming-soon-counter {
    margin-bottom: 15px;
}

.coming-soon-counter div {
    display: inline-block;
    font-size: 50px;
    font-weight: 500;
    text-align: center;
    width: 20%;
    margin: 0 2%;
    padding-bottom: 10px;
    text-shadow: 2px 2px rgba(12, 11, 11, 0.56);
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
}

.coming-soon-counter div:last-child {
    border: none;
}

.coming-soon-counter div span {
    display: block;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    color: #fff;
}

.ca .team-2 .detail {
    padding: 20px 20px 20px 25px;
    left: -0;
}

/** Contact 2 start **/
.contact-2 .contact-info {
    text-align: center;
}

.contact-2 .contact-info strong {
    font-weight: 500;
    font-size: 14px;
    color: #525252;
}

.contact-2 .contact-info i {
    font-size: 24px;
    color: #212529;
}

.contact-2 .contact-info p {
    margin: 15px 0 5px;
    font-weight: 500;
}

.contact-2 .contact-info .mrg-btn-50 {
    margin-bottom: 50px;
}

.contact-2 .form-control {
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    border: 1px solid #eee;
    background: transparent;
    outline: 0;
    height: 45px;
    border-radius: 3px;
}

.contact-2 .form-control:focus {
    color: #495057;
    background-color: transparent;
    border: 1px solid #eee;
    outline: 0;
    box-shadow: none;
}

.contact-2 .form-group {
    margin-bottom: 20px;
}

.contact-2 textarea {
    min-height: 240px;
}

.contact-2 .btn-message {
    border-radius: 50px;
    padding: 10px 60px 11px;
}

.contact-2 .opening-hours {
    padding: 30px;
}

.contact-2 .opening-hours .list-style-none li {
    list-style: none;
    line-height: 35px;
    font-size: 13px;
}

.contact-2 .opening-hours strong {
    width: 85px;
    display: inline-block;
    font-weight: 600;
}

.contact-2 .opening-hours h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px;
}

.contact-2 .main-title{
    margin-bottom: 60px;
}

.contact-map {
    height: 350px !important;
}

.contact-map-content .map-content {
    width: 250px;
}

/** Social media box **/
.social-media-box .social-list li {
    float: left;
}

.social-media-box .social-list li a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    color: #fff;
    margin: 0 6px 4px 0;
    border-radius: 3px;
}

/** Financing calculator **/
.financing-calculator .form-label {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #535353;
}

.financing-calculator .form-group {
    margin-bottom: 20px;
}

/** Brand start **/
.brand-box {
    text-align: center;
    display: inline-block;
    width: 100%;
    margin-bottom: 50px;
}

.brand-box img {
    height: 80px;
}

.brand-box h5 {
    font-weight: 600;
    margin: 10px 0 0;
    font-size: 13px;
    color: #535353;
}

.view-all{
    text-align: center;
}

.view-all h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
}

.view-all ul {
    margin-bottom: 20px;
}

.view-all ul li {
    display: inline-block;
}

.view-all ul li a {
    width: 38px;
    height: 38px;
    line-height: 38px;
    border-radius: 3px;
    margin-bottom: 5px;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    border: solid 1px #3a3939;
}

.mt-30 {
    margin-top: 30px;
}

/** Content area srart **/
.content-area {
    padding: 100px 0 70px;
}

.content-area-2 {
    margin-bottom: 100px;
}

.content-area-3 {
    margin-bottom: 70px;
}

.content-area-4 {
    padding: 100px 0 50px;
}

.content-area-5 {
    padding: 100px 0;
}

.content-area-6 {
    padding: 100px 0 50px;
}

.content-area-7 {
    padding:100px 0 85px;
}

.content-area-8 {
    padding: 185px 0 70px;
}

.content-area-9 {
    padding: 100px 0 90px;
}

.content-area-10 {
    padding: 100px 0 60px;
}

.content-area-11 {
    padding: 100px 0;
}

.theme img {
    margin-bottom: 30px;
}

/** Helping sentar start **/
.helping-sentar {
    padding-top: 100px;
}

.helping-sentar h5 {
    font-size: 16px;
    margin: 0 0 10px;
}

.helping-sentar .contact-2 .heading {
    font-size: 30px;
}

.helping-sentar .contact-2 .form-group {
    margin-bottom: 20px;
}

.helping-sentar .contact-2 textarea {
    min-height: 150px;
}

/** Paginatin box **/
.pagination-box {
    margin-bottom: 25px;
}

.pagination {
    padding-left: 0;
    border-radius: 4px;
    display: inline-block;
}

.pagination li {
    display: inline-block;
}

.pagination > li > a {
    color: #4d4d4d;
    font-size: 15px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    font-weight: 500;
}

.pagination > li > a, .pagination > li > span {
    border-radius: 0;
    margin: 0 2px 5px;
    padding: 7px 14px;
    text-align: center;
    border: none;
}

.pagination > li > a:hover {
    color: #fff;
}

.pagination > li > .active {
    color: #fff;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.page-link:focus {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.show-more-options {
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 20px;
    display: block;
}

/**  Partners start **/
.partners {
    text-align: center;
    margin-bottom: 20px;
}

.partners img{
    max-width:160px;
    margin: 0 auto;
}

/** Navbar buttons start **/
.navbar-buttons img{
    width: 45px;
    border-radius: 50px;
    margin: 20px 15px 20px 0;
}

.navbar-buttons{
    float: right;
    text-align: right;
}

.navbar-buttons ul li{
    float: left;
    margin-left: 35px;
}

.navbar-buttons .btn-md{
    border-radius: 50px;
}

.header-2{
    padding: 0 15px;
}

/** Sidebar widget start **/
.sidebar-right {
    margin: 0 0 30px 0;
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.sidebar-left {
    margin: 0 0 30px 0;
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.widget {
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: solid 1px #f7f7f7;
}

.widget-2 {
    margin-bottom: 40px;
    padding: 20px;
}

.single-block {
    margin-bottom: 30px;
}

.sidebar-title {
    font-size: 21px;
    position: relative;
    margin: 0 0 7px;
    font-weight: 600;
}

.s-border {
    width: 30px;
    height: 3px;
    background: #4d4d4d;
    margin-bottom: 30px;
    border-radius: 50px;
}

.sidebar .search-box {
    padding: 20px 20px 0 20px;
    margin-bottom: 0;
}

.form-search {
    position: relative;
}

.form-search .form-control {
    border: 1px solid #eee;
    box-shadow: none;
    border-radius: 3px;
    height: 45px;
}

.form-search .btn {
    background: none;
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 12px 9px 13px;
}

.form-search .btn:active,
.form-search .btn:focus {
    box-shadow: none;
    outline: none;
}

.form-search .btn i {
    color: #777;
}

.form-search .form-group, .form-search .form-control {
    width: 100%;
}

.range-slider {
    margin-top: 15px;
    margin-bottom: 30px;
}

.range-slider .ui-slider {
    position: relative;
    text-align: left;
}

.range-slider label {
    font-size: 13px;
    color: #535353;
    font-weight: 600;
    margin-bottom: 12px;
}

.range-slider .ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 14px;
    height: 14px;
    border-radius: 0;
    border: 2px solid #66676b;
    cursor: w-resize;
    outline: none;
    top: -5px;
    margin-left: -8px;
    box-shadow: none !important;
}

.range-slider .ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    display: block;
    border: 0;
    background-position: 0 0;
}

.range-slider .ui-slider .ui-slider-handle {
}

.range-slider .ui-widget-content {
    background-color: #ccc;
}

.range-slider .ui-widget-header {
}

.range-slider .ui-slider.ui-state-disabled .ui-slider-handle, .range-slider .ui-slider.ui-state-disabled .ui-slider-range {
    filter: inherit;
}

.range-slider .ui-slider-horizontal {
    height: 4px;
    border-radius: 10px;
    width: calc(100% - 16px);
    margin-left: 8px;
}

.range-slider .ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%;
}

.range-slider .ui-slider-horizontal .ui-slider-range-min {
    left: 0;
}

.range-slider .ui-slider-horizontal .ui-slider-range-max {
    right: 0;
}

.min-value:focus, .max-value:focus, .min-value, .max-value {
    width: 40%;
    display: inline-block;
    border: 0;
    background-color: transparent;
    padding: 0;
    margin: 12px 0 0 0;
    cursor: default;
}

.min-value {
    float: left;
    margin-left: -8px;
    width: 40%;
    margin-right: -8px;
    font-size: 12px;
    color: #535353;
    font-weight: 600;
    margin-top: 15px;
}

.max-value {
    float: right;
    width: 60%;
    text-align: right;
    margin-right: -8px;
    font-size: 12px;
    color: #535353;
    font-weight: 600;
    margin-top: 15px;
}

.sidebar .recent-properties-box .detail header {
    padding-bottom: 0;
}

/** Sub Banner start **/
.sub-banner {
    background: rgba(0, 0, 0, 0.04) url(../img/banner/banner-3.jpg) top left repeat;
    background-size: cover;
    height: 355px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
}

.sub-banner .breadcrumb-area {
    letter-spacing: 1px;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
}

.sub-banner .breadcrumb-area h1 {
    margin: 0 0 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 30px;
}

.sub-banner .breadcrumbs li {
    display: inline-block;
    list-style: none;
    font-size: 16px;
}

.sub-banner .breadcrumbs li a{
    color: #fff;
}

.sub-banner .breadcrumbs .active {
    margin-left: 7px;
    color: #fff;
}

.sub-banner .breadcrumbs .active:before {
    content: "\f105";
    font-family: "FontAwesome";
    font-size: 14px;
    margin-right: 7px;
    font-weight: 600;
}

.blog-social-list {
    float: right;
}

.blog-social-list a {
    text-align: center;
    display: inline-block;
    list-style: none;
}

.blog-social-list span {
    margin-right: 10px;
    font-weight: 600;
    color: #4d4d4d;
}

.blog-social-list a {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    display: inline-block;
    font-size: 11px;
    color: rgb(255, 255, 255);
    margin: 2px 0 2px 5px;
    border-radius: 5%;
}

.blog-tags a {
    display: inline-block;
    font-size: 13px;
    margin: 0 0 5px;
    padding: 5px 13px;
    text-transform: capitalize;
    border: 1px solid #fff;
    background: #fff;
    color: #666;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.blog-tags span {
    margin-right: 10px;
    font-weight: 600;
    color: #4d4d4d;
}

/** My account box start **/
.my-address form .form-group {
    margin-bottom: 20px;
}

.my-address form .input-text {
    width: 100%;
    padding: 10px 17px;
    font-size: 14px;
    border: 1px solid #e8e7e7;
    outline: none;
    height: 45px;
    border-radius: 3px;
    line-height: 30px;
}

.my-address form textarea {
    min-height: 150px;
}

.my-address form label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 600;
    color: #827f7f;
}

.my-address {
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, .08);
}

.edit-profile-photo {
    position: relative;
    box-shadow: 0 0 10px 1px rgba(71, 85, 95, .08);
    padding: 2px;
}

.change-photo-btn {
    display: inline-block;
    position: absolute;
    font-size: 13px;
    bottom: -15px;
    left: 40%;
    width: auto;
    transition: 0.3s;
    cursor: pointer;
    line-height: 28px;
}

.photoUpload {
    position: relative;
    overflow: hidden;
    padding: 3px 12px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 12px;
}

.photoUpload span {
    color: #fff;
    font-weight: 600;
}

.photoUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}

.my-address {
    margin-bottom: 30px;
}

.footer .listing-meta span a {
    text-decoration: none;
    float: right;
    margin-left: 15px;
    color: #525252;
}

.footer .listing-meta span a i {
    margin-right: 4px;
}

.footer .listing-meta span a:hover {
    color: #8c8c8c;
}

.heading {
    margin: 0 0 30px;
    /* font-size: 20px; */
    font-weight: 600;
}

.heading-2 {
    margin: 0 0 20px;
    font-size: 21px;
    font-weight: 600;
}

.form-group label, .checkbox label {
    font-weight: 600;
    font-size: 12px;
}

/** Dashboard nav start **/
.dashboard{
    position: relative;
}

.fixed-header{
    position: fixed;
    width: 100%;
    z-index: 9999;
    background: #fff;
}

.dashboard-nav {
    background-color: #2a2a2a;
    display: block;
    height: 100%;
}

.dashboard-nav h4 {
    margin-bottom: 0;
    color: rgb(153, 153, 153);
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 15px 30px 15px;
}

.dashboard-nav ul {
    border-bottom: 1px solid #343a40;
}

.dashboard-nav ul li {
    border-left: 3px solid transparent;
    line-height: 25px;
    font-weight: 300;
    font-size: 15px;
}

.dashboard-nav ul li a {
    color: #c5c5c5;
    display: block;
    padding: 11px 27px;
    transition: .3s;
    cursor: pointer;
}

.dashboard-nav ul li a i {
    padding-right: 8px;
    width: 20px;
}

.dashboard-content {
    padding: 30px 30px 0;
}

.dashboard-header {
    margin-bottom: 20px;
}

.dashboard-header .breadcrumb-nav {
    right: 15px;
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    float: right;
}

.dashboard-header .breadcrumb-nav ul li {
    display: inline-block;
    list-style: none;
    margin: 0 0 0 15px;
    font-weight: 500;
}

.dashboard-header h4{
    font-weight: 500;
    font-size: 22px;
}

.dashboard-list {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    padding: 0;
    margin-bottom: 30px;
    display: inline-block;
    width: 100%;
}

.dashboard-list h3 {
    padding: 15px 25px;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    margin: 0;
    width: 100%;
    font-weight: 500;
}

.dashboard-message {
    float: left;
    padding: 25px 25px;
    position: relative;
    border-bottom: 1px solid #eee;
    width: 100%;
}

.dashboard-list h4 {
    padding: 15px 25px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
}

.responsive-table {
    padding: 20px;
    display: inline-block;
    border-bottom: 1px solid #eee;
    width: 100%;
}

.dashboard-nav ul li span.nav-tag {
    font-family: open sans;
    font-weight: 400;
    display: inline-block;
    font-size: 11px;
    line-height: 20px;
    color: #fff;
    padding: 0 7px;
    text-align: center;
    min-width: 20px;
    height: 20px;
    border-radius: 50px;
    margin-left: 5px;
}

.dashboard-list .comment-content {
    padding-bottom: 10px;
    margin-bottom: 0;
}

.sub-banner-2{
    margin: 0 15px 30px;
    font-size: 15px;
}

/** Manaage table start **/
.manage-table .listing-photoo {
    width: 20%;
}

.manage-table .listing-photoo img {
    width: 100%;
    border-radius: 5px;
}

.manage-table .title-container {
    width: 55%;
    padding: 0 20px;
}

.manage-table .title-container h2 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 12px;
}

.manage-table .title-container h5 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
}

.manage-table .title-container h6 {
    font-size: 14px;
    font-weight: 600;
}

.manage-table .expire-date {
    font-size: 14px;
    width: 15%;
    padding: 0 20px 0 0;
}

.manage-table .action {
    width: 10%;
}

.manage-table .action a {
    display: block;
    font-size: 13px;
    margin: 3px 0;
    color: #676767;
}

.manage-table .action a i {
    margin-right: 5px;
}

.manage-table .title-container h2 a:hover {
    color: #4a4747;
}

/** Invoice start **/
.invoice{
    width: 100%;
    display: inline-block;
}

.invoice .address-info {
    margin-bottom: 30px;
}

.invoice .address-info .strong {
    font-weight: 600;
}

.invoice .address-info p {
    margin-bottom: 0;
}

.invoice strong {
    color: #fff;
}

.invoice .order{
    text-align: right;
    line-height: 40px;
    font-size: 22px;
}

.invoice .logo img{
    height: 40px;
}

.invoice-mb-30{
    margin-bottom: 30px;
}

.invoice .table {
    margin-bottom: 0;
}

/** Tab box 2 start **/
.tab-box-2 .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background: transparent;
    border-radius: 0;
}

.tab-box-2 .nav-item{
    float: right;
    display: inline-block;
}

.comments-tr{
    border-bottom: 1px solid #eee;
}

.comments-tr span{
    font-size: 16px;
    margin: 0;
    font-weight: 600;
}

.tab-box-2 .comment-content {
    padding-bottom: 0;
    border-bottom: none;
}

.tab-box-2 .comment-content p{
    margin-bottom: 0;
}

/** Ui item start **/
.ui-item {
    position: relative;
    width: 100%;
    display: inline-block;
    padding: 30px;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 50px;
}

.ui-item i {
    font-size: 70px;
    position: absolute;;
    right: 20px;
    top:  20px;
    color: rgba(255,255,255,0.41);
}

.ui-item p{
    color: #fff;
    font-weight: 600;
    margin-bottom: 0;
}

.ui-item h4{
    color: #fff;
    font-weight: 600;
    font-size: 30px;
}

.alert-2{
    margin-bottom: 50px;
}

/** typography start **/
.typography .heading {
    text-transform: uppercase;
    margin: 0 0 20px;
}

.typography .sd p {
    margin-bottom: 40px;
}

/** Properties amenities start **/
.properties-amenities ul li {
    margin-bottom: 15px;
    font-size: 14px;
}

.properties-amenities ul li i {
    margin-right: 15px;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
}

.search-banner .show-more-options {
    margin-bottom: 20px;
    display: block;
}

.property-details ul li {
    font-weight: 400;
    margin-bottom: 15px;
    font-size: 13px;
}

.property-details ul li strong {
    margin-right: 5px;
    font-weight: 600;
}

.properties-details-page .heading {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 600;
}

.properties-details-page iframe, .modal-body iframe .element.style {
    height: 350px;
}

.properties-details-page iframe, .modal-body iframe {
    width: 100%;
    border: none;
}

/** Heading properties start **/
.heading-properties {
    letter-spacing: 1px;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
}

.heading-properties h3 {
    margin-top: 0;
    font-size: 22px;
}

.heading-properties p{
    margin-bottom: 0;
    font-size: 14px;
}

.heading-properties h3 span {
    font-weight: 700;
}

.heading-properties h5 {
    text-align: right;
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    margin: 0;
}

/** Heading properties 3 start **/
.heading-properties-3 .property-price{
    margin-right: 10px;
    font-weight: 600;
}

.heading-properties-3 .rent{
    padding: 5px 20px;
    border-radius: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10px;
}

.heading-properties-3 h1{
    font-size: 21px;
    font-weight: 600;
    margin: 0 0 15px;
}

.heading-properties-3 .location i{
    margin-right: 5px;
}

.heading-properties-3 .location{
    font-size: 14px;
    font-weight: 500;
}

.properties-details-sliders .list-inline {
    white-space: nowrap;
    width: 100% !important;
}

.properties-details-sliders .carousel-indicators {
    position: static;
    left: initial;
    width: initial;
    margin-left: initial;
    margin-top: 0;
}

.properties-details-sliders .carousel-indicators a {
    cursor: pointer;
}

.properties-details-sliders .carousel-indicators > li {
    height: initial;
    text-indent: initial;
    margin-right: 0;
    margin-left: 0;
}

.dd.properties-details-sliders .carousel-indicators > li {
    width: initial;
    height: initial;
    text-indent: initial;
}

.smail-properties .list-inline-item {
    width: 20%;
}

.smail-properties .list-inline-item a img {
    width: 100%;
    border: none;
    border-radius: 0;
}

.properties-details-sliders .carousel-indicators > li.active img {
    opacity: 0.7;
}

.properties-details-sliders .right {
    position: absolute;
    right: 15px;
    top: 45%;
}

.properties-details-sliders .left {
    left: 10px;
    top: 47%;
    width: 30px;
    height: 30px;
    line-height: 33px;
    position: absolute;
    z-index: 5;
    display: inline-block;
    right: -30px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 5%;
}

.properties-details-sliders .left i {
    font-size: 20px;
    color: #4d4d4d;
}

.properties-details-sliders .right {
    right: 10px;
    top: 47%;
    width: 30px;
    height: 30px;
    line-height: 33px;
    position: absolute;
    z-index: 5;
    display: inline-block;
    text-align: center;
    background: #a5a5a5;
    border-radius: 5%;
}

.properties-details-sliders .right i {
    font-size: 20px;
    color: #4d4d4d;
}

.list-inline-item:not(:last-child) {
    margin-right: 1px;
}

.smail-properties {
    width: 100%;
}

/** Floor plans start **/
.floor-plans table {
    width: 100%;
    margin-bottom: 40px;
    border: 1px solid rgba(0, 0, 0, 0.07);
}

.floor-plans table tr:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.floor-plans table td, table th {
    padding: 10px 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
}

.floor-plans table td {
    font-size: 13px;
}

/** Tabbing box start **/
.tabbing-box .tab-pane {
    padding-top: 30px;
}

.tabbing-box .nav-tabs {
    background: #fff;
    border-bottom: solid 1px #fff;
}

.tabbing-box .nav-tabs li {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
}

.tabbing-box .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #fff;
    border-radius: 0;
}

.tabbing-box .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link:hover {
    border-radius: 0;
    color: #fff;
}

.tabbing-box .nav-tabs .nav-link {
    border: none;
}

/** Compare table start **/
.compare-table tr {
    border: 1px solid #ececec;
}

.compare-table tr:first-child {
    border-top: none;
}

.compare-table tr td:first-child {
    width: 350px;
    background: #f8f9fa;
}

.compare-table tr td {
    box-sizing: border-box;
    font-size: 15px;
    padding: 20px 15px;
    text-align: center;
    width: 395px;
    font-weight: 500;
}

.compare-table tr td .fa-times {
    color: red;
}

.compare-table tr td .fa-check {
    color: green;
}

.search-compare{
    margin-bottom: 30px;
    padding: 30px 15px 20px;
    background: #fff;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
}

.search-compare .form-group{
    margin-bottom: 10px;
}

.search-compare h4{
    font-size: 25px;
    line-height: 26px;
    margin-bottom: 20px;
}

/** Faq start **/
.faq-box {
    border: 1px solid transparent;
    border-radius: 0;
    margin-bottom: 0;
}

.faq-box h5 .btn-link {
    padding: 25px 20px;
    width: 100%;
    text-align: left;
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    color: #535353;
}

.faq-box .card-header {
    padding: 0;
    margin: 0;
    font-size: 14px;
    border-bottom: solid 1px #d8d8d8;
}

.faq-box .card-body p {
    line-height: 27px;
}

.faq-box .card-body span {
    font-size: 14px;
}

.faq-box .card-body span a {
    font-weight: 500;
}

.faq-accordion .card {
    margin-bottom: 0;
    border: none;
}

.faq-accordion .p-text{
    padding: 20px 0 50px;
    line-height: 30px;
    color: #535353;
}

.faq-accordion .card-header {
    padding: 0;
    background: transparent;
}

.bd-none {
    border-bottom: 1px none;
}

.faq-accordion .card-title {
    margin-bottom: 0;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    background-color: transparent;
    letter-spacing: 0;
    font-size: 17px;
    line-height: 60px;
    cursor: pointer;
}

.faq-accordion .card-header {
    border: none;
    margin-bottom: 10px;
    border-radius: 3px;
    background: #f8f9fa;
}

.faq-accordion .card-header a {
    width: 100%;
}

.faq-accordion .card-block {
    padding: 0;
}

.faq-accordion .card-header .card-title:before {
    font-family: 'FontAwesome';
    content: "\f077";
    font-size: 13px;
    font-weight: 300;
    width: 60px;
    height: 60px;
    background: #eeeeef;
    float: left;
    text-align: center;
    line-height: 60px;
}

.faq-accordion .card-header .collapsed.card-title:before {
    content: "\f078";
    font-size: 13px;
    font-weight: 300;
}

.foq-info p {
    font-size: 14px;
    line-height: 30px;
}

.foq-info {
    padding: 15px 0 35px;
}

/** Submit property start **/
.submit-property .checkbox {
    padding-left: 0;
    margin-bottom: 10px;
}

.submit-property .heading-2 {
    margin: 0 0 20px;
    font-size: 21px;
    font-weight: 600;
}

.submit-address form .input-text {
    width: 100%;
    padding: 10px 17px;
    font-size: 13px;
    border: 1px solid #e8e7e7;
    outline: none;
    color: #6c6c6c;
    height: 45px;
    border-radius: 2px;
}

.submit-address .search-fields{
    min-height: 45px;
    border-radius: 2px;
}

.submit-address form textarea {
    min-height: 160px;
}

.submit-address form label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 13px;
    color: #4d4d4d;
}

.pad-20 {
    padding: 25px;
}

.submit-address form .form-group {
    margin-bottom: 20px;
}

.dropzone-design {
    border: 2px dashed #d0d0d0;
    min-height: 100px;
}

.dropzone-design, .dropzone-design * {
    box-sizing: border-box;
}

.dropzone-design {
    min-height: 160px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: white;
    padding: 20px 20px;
}

.dropzone-design.dz-clickable {
    cursor: pointer;
}

.dropzone-design.dz-clickable * {
    cursor: default;
}

.dropzone-design.dz-clickable .dz-message, .dropzone-design.dz-clickable .dz-message * {
    cursor: pointer;
}

.dropzone-design.dz-started .dz-message {
    display: none;
}

.dropzone-design.dz-drag-hover {
    border-style: solid;
}

.dropzone-design.dz-drag-hover .dz-message {
    opacity: 0.5;
}

.dropzone-design .dz-preview {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
}

.dropzone-design .dz-preview:hover {
    z-index: 1000;
}

.dropzone-design .dz-preview:hover .dz-details {
    opacity: 1;
}

.dropzone-design .dz-preview.dz-file-preview .dz-image {
    border-radius: 3px;
    background: #999;
    background: linear-gradient(to bottom, #eee, #ddd);
}

.dropzone-design .dz-preview.dz-file-preview .dz-details {
    opacity: 1;
}

.dropzone-design .dz-preview.dz-image-preview {
    background: white;
}

.dropzone-design .dz-preview.dz-image-preview .dz-details {
    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -ms-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
}

.dropzone-design .dz-preview .dz-remove {
    font-size: 14px;
    text-align: center;
    display: block;
    cursor: pointer;
    border: none;
}

.dropzone-design .dz-preview .dz-remove:hover {
    text-decoration: underline;
}

.dropzone-design .dz-preview:hover .dz-details {
    opacity: 1;
}

.dropzone-design .dz-preview .dz-details {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-size: 13px;
    min-width: 100%;
    max-width: 100%;
    padding: 2em 1em;
    text-align: center;
    color: rgba(0, 0, 0, 0.9);
    line-height: 150%;
}

.dropzone-design .dz-preview .dz-details .dz-size {
    margin-bottom: 1em;
    font-size: 16px;
}

.dropzone-design .dz-preview .dz-details .dz-filename {
    white-space: nowrap;
}

.dropzone-design .dz-preview .dz-details .dz-filename:hover span {
    border: 1px solid rgba(200, 200, 200, 0.8);
    background-color: rgba(255, 255, 255, 0.8);
}

.dropzone-design .dz-preview .dz-details .dz-filename:not(:hover) {
    overflow: hidden;
    text-overflow: ellipsis;
}

.dropzone-design .dz-preview .dz-details .dz-filename:not(:hover) span {
    border: 1px solid transparent;
}

.dropzone-design .dz-preview .dz-details .dz-filename span, .dropzone-design .dz-preview .dz-details .dz-size span {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0 0.4em;
    border-radius: 3px;
}

.dropzone-design .dz-preview:hover .dz-image img {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -ms-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    -webkit-filter: blur(8px);
    filter: blur(8px);
}

.dropzone-design .dz-preview .dz-image {
    border-radius: 3px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    transition: all 0.3s;
    display: block;
    z-index: 10;
}

.dropzone-design .dz-preview .dz-image img {
    display: block;
    filter: blur(0px);
    transition: all 0.4s;
}

.dropzone-design .dz-preview.dz-success .dz-success-mark {
    -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
    -moz-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
    -ms-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
    -o-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
    animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);
}

.dropzone-design .dz-preview.dz-error .dz-error-mark {
    opacity: 1;
    -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
    -moz-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
    -ms-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
    -o-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
    animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);
}

.dropzone-design .dz-preview .dz-success-mark, .dropzone-design .dz-preview .dz-error-mark {
    pointer-events: none;
    opacity: 0;
    z-index: 500;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    margin-left: -27px;
    margin-top: -27px;
}

.dropzone-design .dz-preview .dz-success-mark svg, .dropzone-design .dz-preview .dz-error-mark svg {
    display: block;
    width: 54px;
    height: 54px;
}

.dropzone-design .dz-preview.dz-processing .dz-progress {
    opacity: 1;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

.dropzone-design .dz-preview.dz-complete .dz-progress {
    opacity: 0;
    -webkit-transition: opacity 0.4s ease-in;
    -moz-transition: opacity 0.4s ease-in;
    -ms-transition: opacity 0.4s ease-in;
    -o-transition: opacity 0.4s ease-in;
    transition: opacity 0.4s ease-in;
}

.dropzone-design .dz-preview:not(.dz-processing) .dz-progress {
    -webkit-animation: pulse 6s ease infinite;
    -moz-animation: pulse 6s ease infinite;
    -ms-animation: pulse 6s ease infinite;
    -o-animation: pulse 6s ease infinite;
    animation: pulse 6s ease infinite;
}

.dropzone-design .dz-preview .dz-progress {
    opacity: 1;
    z-index: 1000;
    pointer-events: none;
    position: absolute;
    height: 16px;
    left: 50%;
    top: 50%;
    margin-top: -8px;
    width: 80px;
    margin-left: -40px;
    background: rgba(255, 255, 255, 0.9);
    -webkit-transform: scale(1);
    border-radius: 8px;
    overflow: hidden;
}

.dropzone-design .dz-preview .dz-progress .dz-upload {
    background: #333;
    background: linear-gradient(to bottom, #666, #444);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    -webkit-transition: width 300ms ease-in-out;
    -moz-transition: width 300ms ease-in-out;
    -ms-transition: width 300ms ease-in-out;
    -o-transition: width 300ms ease-in-out;
    transition: width 300ms ease-in-out;
}

.dropzone-design .dz-preview.dz-error .dz-error-message {
    display: block;
}

.dropzone-design .dz-preview.dz-error:hover .dz-error-message {
    opacity: 1;
    pointer-events: auto;
}

.dropzone-design .dz-preview .dz-error-message {
    pointer-events: none;
    z-index: 1000;
    position: absolute;
    display: block;
    display: none;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
    -ms-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    border-radius: 8px;
    font-size: 13px;
    top: 130px;
    left: -10px;
    width: 140px;
    background: #be2626;
    background: linear-gradient(to bottom, #be2626, #a92222);
    padding: 0.5em 1.2em;
    color: white;
}

.dropzone-design .dz-preview .dz-error-message:after {
    content: '';
    position: absolute;
    top: -6px;
    left: 64px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #be2626;
}

.dropzone-design {
    position: relative;
    border: 2px dashed #d0d0d0;
    border-radius: 3px;
    background: #fcfcfc;
    transition: all 0.3s linear;
    display: inline-block;
    width: 100%;
}

.dropzone-design:before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
    background-color: #66676b;
    opacity: 0;
    z-index: 10;
    transition: all 0.3s linear;
    border-radius: 3px;
}

.dropzone-design:hover:before {
    opacity: 0.4;
}

.dropzone-design .dz-message {
    text-align: center;
    margin: 50px 0;
    font-size: 17px;
    color: #888;
    transition: all 0.3s linear;
    position: relative;
    z-index: 11;
}

.dropzone-design:hover .dz-message {
    color: #66676b;
}

.dz-message i {
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
}

.dropzone-design .dz-default.dz-message span {
    display: inline;
    line-height: 117px;
}

/**  Specifications start **/
.book-btn {
    display: block;
    height: 41px;
    margin-bottom: 15px;
    border-radius: 3px;
}

.no-js #loader {
    display: none;
}

.js #loader {
    display: block;
    position: absolute;
    left: 100px;
    top: 0;
}

.page_loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: url(../img/loader.gif) center no-repeat #fff;
}

.slider-section .simple-slider {
    margin-bottom: 30px;
}

/** Icons library **/
.icon-lists .heading {
    margin: 0 0 10px 0;
    text-transform: uppercase;
}

.glyph {
    text-align: center;
    padding: 20px 15px;
    font-size: 12px;
    color: #555;
}

.glyph .glyph-icon {
    font-size: 24px;
    font-weight: 500;
    color: #555;
}

.glyph fieldset,
.glyph .hidden-true {
    display: none;
}

.glyph .bshadow0 .lnr {
    font-size: 24px;
    color: #555;
    display: block;
    line-height: 35px;
}

.icon-lists mark {
    margin-bottom: 10px;
    display: inline-block;
}

.font-awesome-icons .col-print-4 {
    margin-bottom: 15px;
}

.font-awesome-icons {
    font-size: 14px;
    color: #555;
}

.font-awesome-icons .text-muted {
    display: none;
}

/** Portfolio item **/
.portfolio-item {
    margin-bottom: 30px;
}

.pg-4 .portfolio-item{
    margin-bottom: 0;
}

/** Option panel **/
.option-panel {
    z-index: 9999;
    width: 215px;
    position: fixed;
    right: 0;
    background: #fff;
    top: 20%;
    padding: 20px 15px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

.option-panel-collased {
    right: -215px;
}

.option-panel h2 {
    font-size: 10px;
    margin: 0 0 0 0;
    text-align: center;
    color: #555;
    padding: 8px 0;
    font-weight: 600;
}

.option-panel .color-plate {
    width: 24px;
    height: 24px;
    float: left;
    margin: 3px;
    border-radius: 0;
    cursor: pointer;
}

.default-plate {
    background: #ff214f
}

.blue-plate {
    background: #2048bb
}

.yellow-plate {
    background: #ffb400
}

.red-plate {
    background: #f0151f
}

.green-light-plate {
    background: #1abc9c
}

.green-plate {
    background: #7dba21
}

.yellow-light-plate {
    background: #faaa5d
}

.green-light-2-plate {
    background: #0dcdbd
}

.olive-plate {
    background: #b3c211
}

.purple-plate {
    background: #8e44ad
}

.midnight-blue-plate {
    background: #376bff
}

.brown-plate {
    background: #A14C10
}

.setting-button {
    background: #eee;
    position: absolute;
    font-size: 20px;
    text-align: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    left: -50px;
    color: #2b303b;
    top: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
}
/** Option Panel **/

/** Full page search **/
#full-page-search {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    -webkit-transform: translate(0px, -100%) scale(0, 0);
    -moz-transform: translate(0px, -100%) scale(0, 0);
    -o-transform: translate(0px, -100%) scale(0, 0);
    -ms-transform: translate(0px, -100%) scale(0, 0);
    transform: translate(0px, -100%) scale(0, 0);
    opacity: 0;
    z-index: 99999;
}

#full-page-search.open {
    -webkit-transform: translate(0px, 0px) scale(1, 1);
    -moz-transform: translate(0px, 0px) scale(1, 1);
    -o-transform: translate(0px, 0px) scale(1, 1);
    -ms-transform: translate(0px, 0px) scale(1, 1);
    transform: translate(0px, 0px) scale(1, 1);
    opacity: 1;
}

#full-page-search input[type="search"] {
    position: absolute;
    top: 50%;
    width: 100%;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0);
    font-weight: 300;
    text-align: center;
    border: 0;
    margin: 0 auto;
    margin-top: -51px;
    padding-left: 30px;
    padding-right: 30px;
    outline: none;
    font-size: 28px;
}

#full-page-search .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 20px;
    margin-left: -45px;
}

#full-page-search .close {
    position: fixed;
    top: 15px;
    right: 15px;
    color: #fff;
    opacity: 1;
    padding: 10px 17px;
    font-size: 17px;
    outline: 0 auto -webkit-focus-ring-color;
    cursor: pointer;
    border-radius: 3px;
    background: #3a3a3a;
}

/* Mtb **/
.mtb-50 {
    margin: 50px 0;
}

.mtb-30 {
    margin: 30px 0;
}

/* Mt **/
.mt-20{
    margin-top: 20px;
}

/* Mb **/
.mb-40 {
    margin-bottom: 40px;
}

.mb-35 {
    margin-bottom: 35px;
}

.mb-50 {
    margin-bottom: 50px;
}

.mb-30 {
    margin-bottom: 30px !important;
}

.mb-20 {
    margin-bottom: 20px;
}

.mb-10{
    margin-bottom: 10px;
}

/** Option Panel **/
.option-panel {
    z-index: 9999;
    width: 215px;
    position: fixed;
    right: 0;
    top: 20%;
    background: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    padding: 20px 15px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
}

.option-panel-collased {
    right: -215px;
}

.option-panel h2 {
    font-size: 14px;
    margin: 0 0 0 0;
    text-align: center;
    padding: 0 0 10px;
    font-weight: 500;
}

.option-panel .color-plate {
    width: 24px;
    height: 24px;
    float: left;
    margin: 3px;
    border-radius: 0;
    cursor: pointer;
}

@media all and (min-width: 1200px) {
    .property-box-2 .footer {
        position: absolute;
        width: 100%;
        bottom: 0px;
    }
}

@media all and (min-width: 992px) {
    .banner img {
        animation: bgburnsEast 25s linear infinite alternate;
        -webkit-animation: bgburnsEast 25s linear infinite alternate;
    }

    .dropdown:hover > .dropdown-menu {
        display: block;
        max-width: 700px;
        margin: auto;
    }

    .dropdown .dropdown-item:hover > .dropdown-menu {
        display: block;
    }

    .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }

    .sticky-header {
        position: fixed;
        background: transparent;
        top: 0px;
        z-index: 999;
        width: 100%;
        border-bottom: 1px solid rgba(220, 220, 220, .2);
    }

    .sticky-header .nav-link::after {
        display: none !important;
    }

    .sticky-header .navbar-expand-lg .navbar-nav .nav-link {
        color: #fff;
    }

    .sticky-header .open-offcanvas {
        color: #fff;
        display: inline-block;
    }

    .header-shrink {
        background: #fff;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -ms-transition: 0.5s;
        transition: 0.5s;
        box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        top: 0px !important;
    }

    .header-shrink .navbar-expand-lg .navbar-nav .nav-link {
        color: #515151;
    }

    .header-shrink .open-offcanvas {
        color: #515151;
    }

    .hide-carat .nav-link::after {
        display: none !important;
    }
}

/** Media **/
@media (max-width: 1200px) {
    .main-header .navbar-expand-lg .navbar-nav .nav-link {
        padding: 30px 10px;
    }

    .main-header .navbar-expand-lg .user-account {
        padding: 30px 10px;
    }

    .main-header .form-inline .submit {
        margin-left: 10px;
    }

    .property-box-2 .facilities-list li {
        line-height: 26px;
    }

    .property-box-2 .facilities-list{
        padding: 15px 20px;
    }

    .about-text {
        padding-left: 0;
    }

    .property-box .facilities-list li {
        margin-right: 20px;
    }

    .pages-404 .nobottomborder h1 {
        font-size: 34px;
    }
}

@media (max-width: 992px) {
    .content-area {
        padding: 80px 0 50px;
    }

    .content-area-2 {
        margin-bottom: 80px;
    }

    .content-area-3 {
        margin-bottom: 50px;
    }

    .content-area-4 {
        padding: 80px 0 50px;
    }

    .content-area-5 {
        padding: 80px 0;
    }

    .content-area-6 {
        padding: 80px 0 50px;
    }

    .content-area-7{
        padding:80px 0 65px;
    }

    .content-area-8 {
        padding: 80px 0 50px;
    }

    .content-area-9 {
        padding: 80px 0 70px;
    }

    .content-area-10{
        padding: 80px 0 40px;
    }

    .content-area-11{
        padding: 50px 0;
    }

    .helping-sentar {
        padding-top: 80px;
    }

    .tab-box-2 .nav-link {
        display: block;
        padding: .5rem .3rem;
    }

    .ui-item{
        margin-bottom: 30px;
    }

    .alert-2{
        margin-bottom: 30px;
    }

    .header-2{
        padding: 0;
    }

    .main-title {
        margin-bottom: 40px;
    }

    .main-title h1 {
        margin-bottom: 10px;
    }

    .sub-banner {
        height: 265px;
    }

    .main-header .logo img{
        height: 30px;
    }

    .main-header .logo {
        padding: 15px 0;
    }

    .search-area {
        padding: 25px 20px 5px;
        border-radius: 0;
    }

    .search-options-btn, .search-options-btn:hover {
        padding: 7px 10px 8px 10px;
        border-radius: 3px;
    }

    .search-options-btn, .search-options-btn i {
        margin-left: 0;
    }

    .search-area .form-group{
        margin-bottom: 15px;
    }

    .about-slider-box {
        margin-bottom: 40px;
    }

    .about-text h3{
        font-size: 23px;
    }

    .search-area-2 .range-slider {
        margin-top: 15px;
        margin-bottom: 1rem;
    }

    .bg-grea .range-slider {
        margin-top: 15px;
        margin-bottom: 1rem;
    }

    .search-area-2{
        padding: 30px 0 10px;
    }

    .t-c{
        text-align: center;
    }

    .heading-properties-3 h1 {
        font-size: 19px;
        margin-bottom: 10px;
    }

    .sub-banner .breadcrumb-area h1 {
        margin: 0 0 10px;
        font-size: 27px;
    }

    .sub-banner .breadcrumb-area {
        top: 40%;
    }

    .banner_video_bg .carousel-item {
        height: 500px;
    }

    .main-title h1 {
        font-size: 26px;
    }

    .hidden-mb-20{
        margin-bottom: 20px;
    }

    .category_long_bg {
        height: 350px;
    }

    .main-header .search-fields button {
        background: #efefef;
    }

    .main-header .inline-search-small .inline-search-area .search-col:first-child .form-control {
        border-radius: 50px 0 0 50px !important;
        background-color: #efefef;
    }

    .search-compare h4{
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
    }

    .search-compare .form-group{
        margin-bottom: 20px;
    }

    .service-info-3 .detail{
        padding: 30px 20px 30px;
    }

    .header-transparent {
        position: static;
        z-index: 9;
        width: 100%;
    }

    .banner .banner-slider-inner h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }

    .banner .banner-slider-inner h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .banner .banner-slider-inner p {
        margin-bottom: 15px;
    }

    .banner .banner-slider-inner {
        padding: 10px 12px;
        top: 0%;
    }

    .banner .banner-opt .banner-slider-inner h1 {
        font-size: 20px;
    }

    .banner .banner-opt .banner-slider-inner p {
        line-height: 22px;
        font-size: 14px;
        max-width: 90%;
        margin: 0px auto;
        margin-bottom: 5px;
    }

    .pages-404 .nobottomborder h1 {
        font-size: 30px;
    }

    .pb-hediin-60 {
        padding-bottom: 60px;
    }

    .pb-hediin-12{
        padding-bottom: 12px;
    }

    .service-info.h-bdr {
        border: solid 1px #efefef;
    }

    .pages-404 .error404 {
        font-size: 150px;
    }

    .contact-2 .opening-hours {
        padding: 30px;
        margin-top: 50px;
    }

    .contact-2 .main-title{
        margin-bottom: 40px;
    }

    .main-header .navbar-expand-lg .navbar-nav .nav-link {
        padding: 10px 15px;
        background: #f9f9f9;
    }

    .main-header .navbar-expand-lg .navbar-nav .link-color:hover {
        background: #f9f9f9;
    }

    .main-header .dropdown-menu a {
        padding: 10px 30px;
        font-size: 13px;
    }

    .main-header .navbar-expand-lg .user-account {
        padding: 15px 10px;
    }

    .main-header .navbar-expand-lg .user-account li {
        font-size: 12px;
    }

    .main-header .form-inline .submit {
        margin: 0 0 50px 10px;
        font-size: 12px;
    }

    .navbar-light .navbar-toggler {
        border: none;
        font-size: 20px;
        font-weight: 100;
    }

    .navbar-toggler {
        padding: 0;
        width: 35px;
        height: 35px;
        font-size: 1rem;
        border-radius: 0;
        outline: none;
    }

    .contect-agent-photo img {
        margin-top: 40px;
    }

    .team-2 .detail {
        padding: 20px 20px 20px 25px;
        left: -0;
    }

    .about-text {
        padding: 0;
    }
    .inline-search-area .bootstrap-select button {
        border-bottom: solid 1px #e0e0e0 !important;
    }

    .banner .banner-slider-inner h3 {
        font-size: 40px;
    }

    .b p{
        margin-bottom: 0;
    }

}

@media (max-width: 768px) {
    .banner .slider-mover-left {
        width: 25px;
        height: 40px;
        line-height: 40px;
    }

    .comment-content .btn-1 {
        padding: 6px 15px;
        font-size: 12px;
        margin-bottom: 3px;
    }

    .faq-accordion .card-title {
        padding: 0 10px 0 15px;
        font-size: 13px;
        font-weight: 600;
        line-height: 45px;
    }

    .compare-table tr td {
        box-sizing: border-box;
        font-size: 13px;
        padding: 10px 7px;
    }

    .faq-accordion .card-header .card-title:before {
        font-size: 12px;
        width: 45px;
        height: 45px;
        line-height: 45px;
    }

    footer {
        padding-top: 60px;
    }

    .dashboard-content {
        padding: 30px 15px 0;
        overflow: hidden;
    }

    .property-box-2 .price-box{
        right: 30px;
    }

    .invoice .text-right {
        text-align: left !important;
    }

    .invoice .order {
        text-align: left;
        line-height: normal;
    }

    .invoice-mb-30{
        margin-bottom: 20px;
    }


    .manage-table .title-container h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    .manage-table .title-container h6 {
        font-size: 13px;
    }

    .manage-table .expire-date {
        font-size: 13px;
        padding: 0 10px 0 0;
        width: 15%;
    }

    .manage-table .action a {
        font-size: 12px;
    }

    .manage-table .listing-photoo {
        width: 25%;
    }

    .manage-table .title-container {
        padding: 0 10px;
        width: 45%;
    }

    .manage-table .expire-date {
        font-size: 13px;
        padding: 0 10px 0 0;
        width: 15%;
    }

    .manage-table .action {
        width: 15%;
        font-size: 13px;
    }

    .dashboard-header .breadcrumb-nav {
        right: 15px;
        display: inline-block;
        font-size: 15px;
        float: left;
    }

    .dashboard-header .breadcrumb-nav ul li {
        display: inline-block;
        list-style: none;
        margin: 0 15px 0 0;
    }

    .edit-profile-photo{
        width: 160px;
        margin-bottom: 40px;
    }

    .invoice .table td, .table th {
        padding: 10px 5px;
    }

    .search-options-btn, .search-options-btn:hover {
        padding: 5px 8px 6px 8px;
        border-radius: 3px;
        font-size: 13px;
    }

    .banner-property-box .prl{
        font-size: 13px;
    }

    .banner-property-box .rent {
        padding: 5px 16px;
        font-size: 10px;
        margin-right: 10px;
    }

    .main-title {
        margin-bottom: 30px;
    }

    .main-header {
        box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
    }

    .search-area-2 .form-group {
        margin-bottom: 10px;
    }

    .banner .slider-mover-right {
        width: 25px;
        height: 40px;
        line-height: 40px;
    }

    .banner .slider-mover-left i {
        font-size: 15px;
    }

    .banner .slider-mover-right i {
        font-size: 15px;
    }

    .property-meta{
        padding: 20px 5px;
    }

    .search-area-2 {
        padding: 30px 20px 10px;
    }

    .coming-soon-inner .form-control {
        width: 65%;
    }

    .coming-soon-inner .btn, .coming-soon-inner .btn:hover, .coming-soon-inner .btn:active {
        width: 35%;
    }

    .property-meta ul li{
        font-size: 14px;
    }

    .property-meta ul li i {
        margin-right: 7px;
        font-size: 17px;
    }

    .brand-box img {
        height: 60px;
    }

    .brand-box {
        margin-bottom: 30px;
    }

    .property-box-2 .footer {
        padding: 15px 35px 15px 35px;
    }

    .property-box-2 .facilities-list {
        padding: 15px 35px;
    }

    .property-box-2 .hdg {
        padding: 20px 35px;
    }

    .sub-banner {
        height: 240px;
    }

    .sub-banner .breadcrumb-area h1 {
        font-size: 23px;
    }

    .sub-banner .breadcrumbs li {
        font-size: 16px;
    }

    .footer .footer-item {
        margin-bottom: 40px;
    }

    .partners img {
        max-width: 120px;
        margin: 0 auto;
    }

    .sub-footer .copy {
        text-align: center;
        margin-bottom: 10px;
    }

    .contact-2 .contact-info .mrg-btn-50{
        margin-bottom: 40px;
    }

    .contact-2 .contact-info p {
        margin: 10px 0 5px;
    }

    .sub-footer .social-list {
        float: none;
    }

    .sub-footer {
        text-align: center;
    }

    .banner_video_bg .carousel-item {
        height: 300px;
    }

    .about-slider-box .Properties-info ul li i{
        font-size: 18px;
    }

    .about-slider-box .Properties-info ul li h4 {
        font-size: 12px;
    }

    .coming-soon-inner {
        margin: 50px auto 30px;
    }

    .coming-soon-counter div {
        font-size: 32px;
        margin-bottom: 20px;
        padding: 0;
        background: transparent;
    }

    .coming-soon-inner h1{
        font-size: 32px;
        margin-bottom: 40px;
    }

    .coming-soon-inner .coming-form{
        max-width: 75%;
        margin: 20px auto;
    }

    .banner .banner-slider-inner h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .banner .banner-slider-inner h2 {
        font-size: 25px;
        margin-bottom: 15px;
    }

    .banner-6 .meta {
        padding: 0;
        background: transparent;
        font-size: 13px;
    }

    .banner-property-box .prl {
        margin-bottom: 15px;
    }

    .banner-property-box .meta ul li {
        margin-right: 15px;
    }

    .banner-property-box  .mb-30 {
        margin-bottom: 20px;
    }

    .banner .banner-slider-inner h3 {
        font-size: 27px;
        margin-bottom: 10px;
    }

    .banner .btn-md {
        padding: 9px 15px;
        font-size: 12px;
    }

    .banner .btn-lg {
        padding: 7px 15px 3px 15px;
        letter-spacing: 0;
        line-height: 24px;
        font-size: 11px;
    }

    .btn-white-lg-outline {
        padding: 5px 13px 3px 13px !important;
    }

    .banner .banner-slider-inner p {
        font-size: 14px;
    }

    .form-content-box {
        margin: 40px auto;
    }

    .form-content-box h3 {
        margin: 0 0 20px;
        font-size: 17px;
    }

    .blog-social-list {
        float: left;
        margin-top: 20px;
    }

    .countdown .top {
        font-size: 30px;
    }

    .pages-404 .error404 {
        margin-bottom: 30px;
        font-size: 150px;
    }

    .pages-404 .nobottomborder h4 {
        font-size: 16px;
    }

    .pages-404 .nobottomborder {
        margin-bottom: 0;
    }

    .setting-button {
        font-size: 14px;
        width: 36px;
        height: 36px;
        line-height: 38px;
        left: -35px;
    }

    .inside-properties iframe {
        height: 220px;
    }

    .breadcrumbs {
        font-size: 12px;
    }

    .back-to-listings {
        height: 35px;
        line-height: 35px;
        width: 35px;
        font-size: 15px;
    }

    .search-area label {
        display: none;
    }

    .service-info-3 {
        margin-bottom: 65px;
    }

    .service-info-3.hidden-30 {
        margin-bottom: 30px;
    }

    .listings-parallax h1 {
        font-size: 25px;
        margin: 0 0 20px;
    }

    .listings-parallax{
        text-align: center;
        padding-top: 60px;
    }

    .contact-details .media .media-left {
        padding-right: 20px;
    }

    .search-area-inner {
        margin: 0 -15px;
    }

    .search-contents .col-xs-12,
    .search-contents .col-xs-6 {
        padding: 3px 10px;
    }

    .search-box .form-group {
        margin-bottom: 0;
    }

    .blog-box .detail .tags-box {
        margin-bottom: 20px;
    }

    .blog-box .detail .blog-share {
        float: left;
        text-align: left;
    }

    .comments ul {
        margin: 0 0 0 0;
    }

    .comment-body {
        margin: 10px 0 0 0;
        line-height: 20px;
        padding: 10px 0 0 0;
        font-size: 13px;
        text-align: justify;
    }

    .blog-banner {
        text-align: center;
        padding: 40px 0;
    }

    .comment-content {
        margin: 0 0 0 80px;
    }

    .comment-author {
        height: 60px;
        width: 60px;
    }

    .form-content-box .details {
        padding: 30px 20px;
    }

    .sec-title-three h2 {
        margin-top: 0;
    }

    .content-area {
        padding: 60px 0 30px;
    }

    .content-area-2 {
        margin-bottom: 60px;
    }

    .content-area-3 {
        margin-bottom: 30px;
    }

    .content-area-4 {
        padding: 60px 0 30px;
    }

    .content-area-5 {
        padding: 60px 0;
    }

    .content-area-6 {
        padding: 60px 0 30px;
    }

    .content-area-7{
        padding:60px 0 45px;
    }

    .content-area-8 {
        padding: 60px 0 30px;
    }

    .content-area-10{
        padding: 60px 0 20px;
    }

    .content-area-11 {
        padding: 30px 0 20px;
    }

    .content-area-9{
        padding: 60px 0 50px;
    }

    .about-text {
        padding: 0;
    }

    .search-area .form-group {
        margin-bottom: 10px;
    }

    .recent-properties-box .detail .location a {
        font-size: 14px;
    }

    .about-box {
        max-width: 100%;
    }

    .my-properties-box .detail .location {
        font-size: 14px;
    }

    .properties-amenities ul li {
        list-style: none;
        margin-bottom: 10px;
    }

    .properties-condition ul li {
        margin-bottom: 10px;
    }

    .heading-properties h3 {
        font-size: 18px;
    }

    .heading-properties p{
        font-size: 13px;
    }

    .heading-properties h5{
        font-size: 13px;
    }

    .typography-page p {
        font-size: 13px;
        line-height: 25px;
        text-align: justify;
    }

    .breadcrumb-area .btn-md {
        padding: 10px 20px;
    }

    .helping-sentar {
        padding-top: 60px;
    }
}

@media (max-width: 580px) {
    .inline-search-area {
        max-width: 80%;
    }

    .manage-table .expire-date {
        display: none;
        width: 0%;
    }

    .manage-table .action a i {
        margin-right: 3px;
    }

    .manage-table .action {
        width: 18%;
        font-size: 13px;
    }

    .banner-property-box .meta ul li i {
        margin-right: 5px;
    }

    .sub-banner {
        height: 200px;
    }

    .search-options-btn, .search-options-btn:hover {
        left: 30px;
        bottom: 0px;
    }

    .setting-button {
        display: none;
    }

    .inline-search-area .search-col .form-control {
        height: 36px;
        padding-top: 13px;
        padding-bottom: 10px;
    }

    .inline-search-area button.btn-search {
        height: 36px;
        padding-top: 10px;
    }

    .inline-search-area .icon-append {
        top: 12px;
    }

    .inline-search-area .search-col .form-control,
    .inline-search-area button.btn-search,
    .inline-search-area .search-fields {
        margin-bottom: 10px;
    }

    .inline-search-area .search-fields {
        min-height: 36px;
    }

    .inline-search-area .btn {
        margin: 0 !important;
    }

    .inline-search-area .bootstrap-select button {
        padding: 0 15px 0 15px;
        border-radius: 0;
    }

    .inline-search-area .bootstrap-select .dropdown-toggle .filter-option {
        top: 5px;
    }

    .inline-search-area .dropdown-toggle::after {
        margin-top: 14px;
    }

    .banner-max-height img{
        max-height: 300px;
    }
}


body{
    background-image: linear-gradient(-360deg, lightpink 5%, #ffd4db 10%, white 60%);
}


</style>
    </head>

<body id="body" class="container" style="text-align: center">
    <div>
        <h1 class = "header">
        welcome to sheruta.ng
        </h1>
    </div>
    <div>
        <img class="mb-5" src="https://firebasestorage.googleapis.com/v0/b/sheruta-1368d.appspot.com/o/LOGO%2Fsheruta%20%20(2).jpg?alt=media&token=76935153-ae0c-4dd1-9bb7-2fdec53b0b29" width="300 px" height="120 px">
    </div>
    <div>
        <h2 class = "headertwo">
            Hello!! ${firstname}
        </h2>
    </div>
    <div>
        <h4 class = "headerthree">
            Thank you for creating an account with us. <br />Your username is ${username} <br />
            
            Please click the below link to finish registration.
        </h4>
    </div>
    <a href='http://www.sheruta.ng/activated' class="container mt-3">
        <button class="btn1">Activate your account</button>
    </a>

    <div>
        <h6 class = "headerfour mt-3">
            Email: info@sheruta.ng
        </h6>
        <h6>
            Call or Whatsapp: +234838154470
        </h6>
    </div>
</body>
  </html>
`);

module.exports = welcomeTemplate;
