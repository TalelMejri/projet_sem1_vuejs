<template>
    <div id="essai">
        <div class="toast_wrapper">
            <div class="toast_ee">
                you must enter all fileds
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'toast'
    }
</script>
<style>
    .toast_wrapper{
        width: 100%;
        top: -140px;
    }
    .toast_ee{
        padding: 20px;
        color:white;
        background: red;
        border-radius: 10px;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
        max-width: 400px;
        margin: 0 auto;
    }
</style>