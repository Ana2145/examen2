<template>
    <div>
      <header class="bg-dark text-light text-center py-5">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>
  
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>
  
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=58"
          ></b-carousel-slide>
  
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block"
                style="width: 1024px; height: 480px"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </header>
  
      <section class="container my-5">
        <b-row>
          <b-col md="8" class="mb-1">
            <strong>Orden:</strong>
            <b-button-group>
              <b-button @click="ordenarPorAutor" variant="primary">By Author</b-button>
              <b-button @click="ordenarPorFecha" variant="primary">By Date</b-button>
              <b-button variant="primary">With Image</b-button>
            </b-button-group>
          </b-col>
          <b-col md="4" class="mb-1">
            <strong>Actions:</strong>
            <b-button-group>
              <b-button variant="primary">Add</b-button>
              <b-button variant="primary">Edit</b-button>
              <b-button variant="primary">Delete</b-button>
            </b-button-group>
          </b-col>
        </b-row>
  
        <div>
          <b-row>
            <b-col class="col-10">
              <h3 class="text-center mb-4"><strong>Libros actuales</strong></h3>
              <div class="row">
                <div class="col-md-4 mb-4" v-for="libro in libros" :key="libro.id">
                  <div class="card">
                    <img :src="libro.imgSrc" class="card-img-top" alt="Book Image" />
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6">
                          <strong>Book Name:</strong>
                        </div>
                        <div class="col-6">
                          <small class="text-muted">{{ libro.title }}</small>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <strong>Author:</strong>
                        </div>
                        <div class="col-6">
                          <small class="text-muted">{{ libro.author }}</small>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <strong>Publication Date:</strong>
                        </div>
                        <div class="col-6">
                          <small class="text-muted">{{ libro.publicationDate }}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            
            <b-col class="col-2 dropp">
              <p>section drop</p>
            </b-col>
          </b-row>
        </div>
      </section>
  
      <footer class="bg-dark text-light text-center py-3">
        <p>&copy;Library</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        libros: [
          { id: 1, title: "1984", author: "George Orwell", publicationDate: "1949", imgSrc: "https://picsum.photos/200/300?random=1" },
          { id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", publicationDate: "1967", imgSrc: "https://picsum.photos/200/300?random=2" },
          { id: 3, title: "El principito", author: "Antoine de Saint-Exupéry", publicationDate: "1943", imgSrc: "https://picsum.photos/200/300?random=3" }
        ]
      };
    },
    methods: {
      ordenarPorAutor() {
        this.libros.sort((a, b) => a.author.localeCompare(b.author));
      },
      ordenarPorFecha() {
        this.libros.sort((a, b) => a.publicationDate.localeCompare(b.publicationDate));
      }
    }
  };
  </script>
  
  <style>
  .orden {
    background-color: #f8f9fa;
    color: #000;
    width: auto;
    margin: 25px;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .dropp {
    background-color: #f8f9fa;
    border: 1px solid #000;
    height: 500px;
  }
  </style>