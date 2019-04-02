<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
    </div>
</template>

<script>
</script>

<style scoped>
    .camera-modal {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: white;
        z-index: 10;
    }
    .camera-stream {
        width: 100%;
        max-height: 100%;
    }
</style>