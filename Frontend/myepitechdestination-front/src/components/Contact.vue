<template>
    <div class="contact_container">
        <div class="row all_contact">
            <h1>Conctater Nous</h1>
            <div class="row all_info">
                <div class="col-md contact_infos">

                    <button id="show1"><i class="fa fa-map-marker fa-1x" aria-hidden="true"></i></button>
                    <p class="menu1">40 Boulevard de la marquette, Toulouse 31 000</p>
                            
                </div>

                <div class="col-md contact_infos">
                    <button id="show2"><i class="fa fa-envelope fa-1x" aria-hidden="true"></i></button> 
                    <p class="menu2"><a href="mailto:toulouse@epitech.eu">contact@my-destination-epitech.eu</a></p>
                    <p class="menu2"><a href="mailto:toulouse@epitech.eu">toulouse@epitech.eu</a></p>
                       
                </div>

                <div class="col-md contact_infos">
                    <button id="show3"><i class="fa fa-phone fa-1x" aria-hidden="true"></i></button>
                    <p class="menu3">01 44 08 00 15</p>
                </div>
            </div>
        </div>

        <div class="container contact_dev">
            <div class="contact_dev_image">
               <img src="../assets/contact2.png" class="logo" alt="contact">
            </div>
            <div class="contact_dev_title">
                 <h1 class="dev_title">Contacter les développeurs</h1>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-md box" id="back">
                    <h1>Developpeurs Back-End</h1>
                    <h4><a href="#">Pauline Virault</a></h4>
                    <p>pauline.virault@epitech.eu</p>
                    <h4><a href="#">Vincent Crosnier</a></h4>
                    <p>vincent.crosnier@epitech.eu</p>
                    <h4><a href="#">Jérôme Araspin</a></h4>
                    <p>jerome.araspin@epitech.eu</p>
                </div>

                <div class="col-md box">
                    <h1>Developpeurs Front-End</h1>
                    <h4><a href="#">Andrea Rodriguez</a></h4>
                    <p>andrea.rodriguez@epitech.eu</p>
                    <h4><a href="https://www.linkedin.com/in/sarah-amar97/">Sarah Amar</a></h4>
                    <p>sarah.amar@epitech.eu</p>
                </div>
            </div>
        </div>

    </div>
                       
</template>

<script>
export default {
    name: 'Contact'
}
import $ from "jquery";

$(document).ready ( function () 
{
    $('#show1').click ( function () {
    $('.menu1').slideDown();
    });
    $('#show2').click ( function () {
    $('.menu2').slideDown();
    });
    $('#show3').click ( function () {
    $('.menu3').slideDown();
    });
});

</script>

<style scoped>

.contact_container{
     margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 30px 10px;
    border-radius: 15px;
    box-shadow: 0 10px 50px -10px #d6d6d6;
}
/* .contact img{
    size: cover;
    height: 500px;
    width: 500px;

} */
/*  */

.all_contact {
    height: 100%;
    width: 100%;
    background-image: url('../assets/contact_plane.jpg');
    background-size: cover;
    
}

.all_contact h1{
    font-family: 'Bebas Neue', cursive;
    font-size: 2.5em;
    color: black;
    margin: 25px 0;
    text-align: center;
}
.all_info {
    border: 1px solid transparent;
    margin: 0 auto;
}

.contact_infos{
    border: 1px solid transparent;
    padding: 10px 0;
}

.contact_infos button{
    display: block;
    margin: 0 auto;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #1B1B52;
    border: none;
}
.contact_infos button:hover{
    background-color: #02737D;
}

.contact_infos .fa{
    color: white;
}

.contact_infos p{
    border: 1px solid transparent;
    font-size: 1.1em;
    /* background-color: transparent; */
    border-radius: 10px;
    padding: 10px;
    /* box-shadow: 0 10px 50px -10px #d6d6d6; */
}

.contact_infos a{
    text-decoration: none;
    color: black;
}

.menu1, .menu2, .menu3{
    display: none;;
}

/* ********************************* */

.contact_dev{
    border: 1px solid transparent;
    position: relative;
    height: 300px;
}

.contact_dev_image{
    position: absolute;
  
}

.contact_dev_title {
    position: relative;
     text-align: center;
     margin: 150px 0;
}
.contact_dev_title h1{
     font-family: 'Bebas Neue', cursive;
      font-size: 2.5em;
}

/* ********************************* */
#box_dev{
    text-align: space-between;
    margin: 0 30px
}
.box{
    font-family: 'Lato';
    padding-top: 50px;
    margin: 20px 0 0 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.box:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


.box h1{
     font-size: 1.7em;
     text-align: center;
     color: #278867;
     margin-bottom: 20px;
}

.box h4, p{
    text-align: center;
    font-size: 1.1em;
}

.box a{
    text-decoration: none;
    font-weight: bold;
    color: black;
}

.box a:hover{
    color: #85C4AF;
}



</style>