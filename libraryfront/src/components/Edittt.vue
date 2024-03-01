<template>
    <b-modal id="edittt" title="Editar Libro" hide-footer centered>
      <b-container fluid>
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Nombre del Libro" label-for="editBookName">
            <b-form-input id="editBookName" v-model="editedBook.name" required></b-form-input>
          </b-form-group>
          <b-form-group label="Autor" label-for="editAuthor">
            <b-form-input id="editAuthor" v-model="editedBook.author" required></b-form-input>
          </b-form-group>
          <b-form-group label="Fecha de Publicación" label-for="editPublicationDate">
            <b-form-input id="editPublicationDate" v-model="editedBook.publicationDate" type="date" required></b-form-input>
          </b-form-group>
          <b-form-group label="Imagen del Libro" label-for="editBookImage">
            <b-form-input id="editBookImage" v-model="editedBook.imageUrl" type="url" placeholder="URL de la imagen"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Guardar Cambios</b-button>
        </b-form>
      </b-container>
    </b-modal>
  </template>
  
  <script>
  export default {
    name: 'Edittt',
    props: {
      book : Object 
    },
    data() {
      return {
        editedBook: {
          name: '',
          author: '',
          publicationDate: '',
          imageUrl: ''
        }
      };
    },
    watch: {
      book: {
        handler(newVal) {
          this.editedBook = {
            name: newVal.name,
            author: newVal.author,
            publicationDate: newVal.publicationDate,
            imageUrl: newVal.imageUrl
          };
        },
        immediate: true 
      }
    },
    methods: {
      submitForm() {
        console.log('Libro editado:', this.editedBook);
        this.$nextTick(() => {
          this.$refs.editBookModal.hide();
        });
      }
    }
  };
  </script>
  