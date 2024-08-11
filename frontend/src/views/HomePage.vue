<template>
    <div>
        <FileForm @file-added="fetchFiles" />
        <FileList ref="fileList" />
    </div>
</template>

<script>
import FileForm from '../components/FileForm.vue';
import FileList from '../components/FileList.vue';

export default {
    components: {
        FileForm,
        FileList,
    },
    methods: {
        fetchFiles() {
            this.$refs.fileList.fetchFiles();
        },
    },
};
</script>
