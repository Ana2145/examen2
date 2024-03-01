<template>
    <div>
        <Carrousel />
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-button @click="filtroAutor">Ordenar por autor</b-button>
                    <b-button @click="filtroFecha">Ordenar por fecha</b-button>

                    <div>
                        <draggable class="list-group" v-model="libros" @start="drag=true" @end="drag=false">
                            <transition-group>
                                <b-row v-for="(libro, index) in libros" :key="libro.id" @dblclick="removeBook(index)">
                                    <b-col cols="12" md="6" lg="4" class="mb-4">
                                        <b-card>
                                            <b-card :title="libro.title">
                                                <b-card-text>{{ libro.author }}</b-card-text>
                                                <b-card-text>{{ libro.publicationDate }}</b-card-text>
                                            </b-card>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </transition-group>
                        </draggable>
                    </div>
                </b-col>
                <!-- Resto de tu componente -->
            </b-row>
        </b-container>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import Carrousel from './Carrousel.vue';

export default {
    components: {
        Carrousel,
        draggable
    },
    data() {
        return {
            libros: [
                { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", publicationDate: "1967" },
                { id: 2, title: "1984", author: "George Orwell", publicationDate: "1949" },
                { id: 3, title: "El señor de los anillos", author: "J.R.R. Tolkien", publicationDate: "1954" },
                { id: 4, title: "El principito", author: "Antoine de Saint-Exupéry", publicationDate: "1943" },
                { id: 5, title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", publicationDate: "1997" }
            ],
            form: {
                title: '',
                author: '',
                publicationDate: null,
            },
            drag: false
        }
    },
    mounted() {
        // Inicializa tus libros aquí
    },
    methods: {
        removeBook(index) {
            if (this.drag) {
                // Evita eliminar el libro si el evento se desencadena debido al drag and drop
                return;
            }
            this.libros.splice(index, 1); // Elimina el libro al hacer doble clic en él
        },
        filtroAutor() {
        this.libros.sort((a, b) => {
            let fa = a.author.toLowerCase(),
                fb = b.author.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    },

    filtroFecha() {
        this.libros.sort((a, b) => {
            // Asumiendo que publicationDate es una cadena en formato 'YYYY'
            // Para formatos diferentes es necesario adaptar la conversión.
            return a.publicationDate - b.publicationDate;
        });
    },
    }
};
</script>

<style>
/* Añade estilos si es necesario */
</style>
