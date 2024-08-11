<template>
    <div class="container mt-4">
        <h2 class="mb-4">Files</h2>
        <ul class="list-group">
            <li v-for="file in files" :key="file._id"
                class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>{{ file.name }}</strong>: {{ file.content }}
                </div>
                <div>
                    <button class="btn btn-warning btn-sm me-2" @click="openUpdateModal(file)">Update</button>
                    <button class="btn btn-danger btn-sm" @click="deleteFile(file._id)">Delete</button>
                </div>
            </li>
        </ul>

        <!-- Update Modal -->
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Update File</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="fileName" class="form-label">File Name</label>
                            <input type="text" id="fileName" v-model="selectedFile.name" class="form-control"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="fileContent" class="form-label">File Content</label>
                            <textarea id="fileContent" v-model="selectedFile.content" class="form-control"
                                required></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="handleUpdate">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import * as bootstrap from 'bootstrap';

export default {
    data() {
        return {
            files: [],
            selectedFile: {
                _id: '',
                name: '',
                content: ''
            }
        };
    },
    created() {
        this.fetchFiles();
    },
    methods: {
        async fetchFiles() {
            const response = await axios.get('http://localhost:5001/api/files');
            this.files = response.data;
        },
        openUpdateModal(file) {
            this.selectedFile = { ...file };
            const modal = new bootstrap.Modal(document.getElementById('updateModal'));
            modal.show();
        },
        async handleUpdate() {
            await axios.put(`http://localhost:5001/api/files/${this.selectedFile._id}`, {
                name: this.selectedFile.name,
                content: this.selectedFile.content,
            });
            const modal = bootstrap.Modal.getInstance(document.getElementById('updateModal'));
            modal.hide();
            this.fetchFiles();
        },
        async deleteFile(id) {
            await axios.delete(`http://localhost:5001/api/files/${id}`);
            this.fetchFiles();
        },
    },
};
</script>

<style scoped>
.list-group-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
}

.btn {
    margin: 0 5px;
}
</style>
