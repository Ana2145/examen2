<template>
    <b-modal id="add" title="Registrar Libro" hide-footer centered>
      <b-container fluid>
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Nombre del Libro" label-for="bookName">
            <b-form-input id="bookName" v-model="book.name" required></b-form-input>
          </b-form-group>
          <b-form-group label="Autor" label-for="author">
            <b-form-input id="author" v-model="book.author" required></b-form-input>
          </b-form-group>
          <b-form-group label="Fecha de Publicación" label-for="publicationDate">
            <b-form-input id="publicationDate" v-model="book.publicationDate" type="date" required></b-form-input>
          </b-form-group>
          <b-form-group label="Imagen del Libro" label-for="bookImage">
            <b-form-input id="bookImage" v-model="book.imageUrl" type="url" placeholder="URL de la imagen"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Registrar</b-button>
        </b-form>
      </b-container>
    </b-modal>
  </template>
  
  <script>
  export default {
    name: 'Addd',
    data() {
      return {
        book: {
          name: '',
          author: '',
          publicationDate: '',
          imageUrl: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Libro registrado:', this.book);
        this.$nextTick(() => {
          this.$refs.registerBookModal.hide();
        });
      }
    }
  };
  </script>
  