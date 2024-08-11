<template>
    <div class="container mt-4">
        <h2 class="mb-4">Add File</h2>
        <form @submit.prevent="submitForm">
            <div class="input-group mb-3">
                <input v-model="name" type="text" placeholder="File Name" class="form-control" required />
                <input v-model="content" type="text" placeholder="File Content" class="form-control" required />
                <button type="submit" class="btn btn-success">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            content: '',
        };
    },
    methods: {
        async submitForm() {
            await axios.post('http://localhost:5001/api/files', {
                name: this.name,
                content: this.content,
            });
            this.$emit('file-added');
            this.name = '';
            this.content = '';
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 1.75rem;
    color: #333;
}

.input-group {
    display: flex;
}

.input-group .form-control {
    flex: 1;
}

.btn-success {
    margin-left: 10px;
}
</style>
