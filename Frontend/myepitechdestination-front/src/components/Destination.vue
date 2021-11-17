<template>
    <div class="container">

        <div class="header">
            <p>Les bons plans</p>
            <div class="button">
                <button>Voir 9 / page</button>
            </div>
            
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.header{
    height: 12%;
    display: flex;
    align-items: center;
}

.button{
    flex: 1;
    text-align: right;
    
}

.button button{
    width: 190px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #85c4af;
    background-color: white;
    color: #85c4af;
    font-weight: bold;
    font-size: 1.2em;
    outline: none;
}
</style>