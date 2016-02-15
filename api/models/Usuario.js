/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombre: {
  		type: 'string'
  	},
  	apellido: {
  		type: 'string'
  	},
  	fechaDeNacimiento: {
  		type: 'date'
  	},
  	email: {
  		type: 'email'
  	},
  	password: {
  		type: 'string'
  	},
    mensajes: {
      collection: 'Mensaje',
      via: 'idUsuario'
    },
    imagenes: {
      collection: 'Imagen',
      via: 'idUsuario'
    },
    canvas: {
      collection: 'Canvas',
      via: 'idUsuario'
    },
    amigos: {
      collection: 'Amigo',
      via: 'idUsuario'
    }

  }
};
