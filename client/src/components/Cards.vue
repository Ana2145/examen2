<template>
    <div>
        <Carrousel />
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-button @click="filtroAutor">Ordenar por autor</b-button>
                    <b-button @click="filtroFecha">Ordenar por fecha</b-button>

                    <div>
                        <b-card-group deck>
                            <b-row>
                                <b-col cols="12" md="6" lg="4" class="mb-4" v-for="libro in libros" :key="libro">
                                    
                                    <b-card>
                                        <b-card :title="libro.title">
                                            <b-card-text>{{ libro.author }}</b-card-text>
                                            <b-card-text>{{ libro.publicationDate }}</b-card-text>
                                        </b-card>
                                    </b-card>

                                </b-col>
                            </b-row>
                        </b-card-group>
                    </div>
                </b-col>
                <b-col>
                    <div>
                        <b-button v-b-modal.modal-prevent-closing variant="success"
                            @click="$bvModal.show('bv-modal-example')">+</b-button>

                        <b-modal id="modal-prevent-closing" ref="modal" title="Registro del libro" hide-footer>
                            <form ref="form" @submit.stop.prevent="handleSubmit">
                                <b-form-group label="Nombre del libro" label-for="name-input"
                                    invalid-feedback="Name is required" >
                                    <b-form-input id="name-input" v-model="form.title">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group label="Autor" label-for="autor-input" invalid-feedback="Name is required"> 
                                    <b-form-input id="autor-input" v-model="form.author">
                                    </b-form-input>
                                </b-form-group>

                                <b-form-group label="Fecha de publicacion" label-for="date-input"
                                    invalid-feedback="Date is required" >
                                    <b-form-input id="date-input" v-model="form.publicationDate">
                                    </b-form-input>
                                </b-form-group>


                                <b-button class="mt-3" variant="danger" block @click="hideModal">Close Me</b-button>
                                <b-button class="mt-2" variant="success" type="submit" block>Aceptar</b-button>
                            </form>
                        </b-modal>
                    </div>

                    <b-button variant="warning"><b-icon icon="pen" aria-hidden="true"></b-icon></b-button>
                    <b-button variant="danger"><b-icon icon="trash" aria-hidden="true"></b-icon>
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { getAllLibros, ordenAutor, ordenFecha, agregarlibro, actualizarlibros, borrarLibros } from "../services/axios";
import Carrousel from './Carrousel.vue';
export default {
    components: {
        Carrousel,
    },
    data() {
        return {
            libros: [],
            form: {
                title: '',
                author: '',
                publicationDate: null,
            },
        }
    },
    mounted() {
    this.getAllLibros();
    },
    methods: {
        async getAllLibros() {
            try {
                let res = await getAllLibros();
                this.libros = res.data;
                console.log(this.libros)
            } catch (error) {
                console.log("Error al encontrar libros", error);
            }
        },

        hideModal() {
            this.$refs['modal'].hide()
        },
    }
};
</script>

<style></style>
