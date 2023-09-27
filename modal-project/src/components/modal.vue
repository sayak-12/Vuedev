<template>
    <div class="modal" :class="{sale: theme === 'sale'}">
        <h2>{{ header[0] }}</h2>
        <p>{{ header[1] }}</p>
        <button @click="closeModal">Close Modal</button>
    </div>
</template>

<script>
    export default{
        props: ['header','theme'],
        methods: {
            closeModal(){
                this.$emit('close');
            }
        }
    }
</script>

<style>
    .modal{
        height: 300px;
        width: 500px;
        background: rgb(214, 86, 86);
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: white;
        justify-content: center;
        align-items: center;
        padding: 2%;
        position: fixed;
        top: 20%;
        left: 50%;
        z-index: 99;
        transform: translateX(-50%);
        backdrop-filter: blur(5px);
    }
    .sale{
        background: #be2020;
    }
</style>