<template>
  <b-container>
    <b-row>
      <b-col>
       <!--cards con titulo, autor, -->
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="9">
        <p>boton con funcionalidades de agregar nuevo libro</p>
        <b-button variant="success">Agregar Nuevo Libro</b-button>

      </b-col>
      <b-col>
        <p>ICONS con funcionalidades de borrar o editar</p>
        <b-button @click="editBook(index)" v-for="(book, index) in books" :key="index" class="mx-2" variant="warning">Modificar</b-button>
        <b-button @click="deleteBook(index)" v-for="(book, index) in books" :key="index" class="mx-2" variant="danger">Eliminar</b-button>
    
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Prinf",
  data() {
    return {
      books: [
        {
          title: "Harry Potter",
          author: "J.K. Rowling",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        },
      ],
    };
  },
  methods: {
    deleteBook(index) {
      // Logic to delete book
    },
    editBook(index) {
      // Logic to edit book
    }
},
};
</script>
