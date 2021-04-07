"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
const coche_1 = require("./coche");
const moto_1 = require("./moto");
const patinete_1 = require("./patinete");
const tren_1 = require("./tren");
const guagua_1 = require("./guagua");
const bicicleta_1 = require("./bicicleta");
const peaton_1 = require("./peaton");
/**
 * __Esta es la clase Street.__
 */
class Street {
    /**
   * Constructor de la clase Street.
   * @param nombre Nombre de la calle.
   * @param localizacion Localización de la calle.
   * @param restoVehiculos Todos los vehículos o peatones que circulen por la calle.
   */
    constructor(nombre, localizacion, ...restoVehiculos) {
        this.nombre = nombre;
        this.localizacion = localizacion;
        this.vehiculos = [];
        restoVehiculos.forEach((vehiculo) => {
            this.vehiculos.push(vehiculo);
        });
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo nombre aunque se acceda desde fuera de la clase Street.
     * @return Devuelve el nombre de la calle.
     */
    getNombre() {
        return this.nombre;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo localización aunque se acceda desde fuera de la clase Street.
     * @return Devuelve la localización de la calle.
     */
    getLocalizacion() {
        return this.localizacion;
    }
    /**
     * Se encarga de contar el número de vehículos que circulan por una calle.
     * @return Devuelve un array con el total de vehículos de cada tipo.
     * Usage:
     * ```typescript
     * calle1.contadorVehiculos() = totalVehiculos;
     * ```
     */
    contadorVehiculos() {
        let totalVehiculos = [];
        let coches = 0;
        let motos = 0;
        let patinetes = 0;
        let trenes = 0;
        let guaguas = 0;
        let bicicletas = 0;
        let peatones = 0;
        this.vehiculos.forEach(vehiculos => {
            if (vehiculos instanceof coche_1.Coche)
                coches++;
            else if (vehiculos instanceof moto_1.Moto)
                motos++;
            else if (vehiculos instanceof patinete_1.Patinete)
                patinetes++;
            else if (vehiculos instanceof tren_1.Tren)
                trenes++;
            else if (vehiculos instanceof guagua_1.Guagua)
                guaguas++;
            else if (vehiculos instanceof bicicleta_1.Bicicleta)
                bicicletas++;
            else if (vehiculos instanceof peaton_1.Peaton)
                peatones++;
        });
        totalVehiculos.push("Número de coches: " + coches);
        totalVehiculos.push("Número de motos: " + motos);
        totalVehiculos.push("Número de patinetes: " + patinetes);
        totalVehiculos.push("Número de trenes: " + trenes);
        totalVehiculos.push("Número de guaguas: " + guaguas);
        totalVehiculos.push("Número de bicicletas: " + bicicletas);
        totalVehiculos.push("Número de peatones: " + peatones);
        return totalVehiculos;
    }
    /**
     * Almacena el nuevo vehículo en el array de tipo Movable[].
     * @param vehiculo Vehículo que se añade.
     * Usage:
     * ```typescript
     * calle1.añadirVehiculo(bici1) = vehiculos[+bici1]
     * ```
     */
    añadirVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    /**
     * Elimina el vehículo especificado del array vehiculos[].
     * @param vehiculo Vehículo que se elimina.
     * Usage:
     * ```typescript
     * calle1.eliminarVehiculo(bici1) = vehiculos[-bici1]
     * ```
     */
    eliminarVehiculo(vehiculo) {
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] === vehiculo) {
                this.vehiculos.splice(i, 1);
            }
        }
    }
    /**
     * Ordena los vehículos de menor a mayor en función de la velocidad de estos.
     * @return El array de vehículos ordenados por velocidad.
     * Usage:
     * ```typescript
     * calle1.ordenarVehiculos() = vehiculos[] //array de vehículos ordenados
     * ```
     */
    ordenarVehiculos() {
        this.vehiculos.sort((vehi1, vehi2) => {
            return (vehi1.velocidad < vehi2.velocidad ?
                -1 : vehi1.velocidad > vehi2.velocidad ? 1 : 0);
        });
        return this.vehiculos;
    }
}
exports.Street = Street;
let coche1 = new coche_1.Coche("Ferrari", 150);
let coche2 = new coche_1.Coche("Audi", 110);
let moto1 = new moto_1.Moto("Onda", 120);
let moto2 = new moto_1.Moto("Dukati", 180);
let patinete1 = new patinete_1.Patinete("Xiaomi", 20);
let patinete2 = new patinete_1.Patinete("Urbanartt", 30);
let tren1 = new tren_1.Tren("Renfe", 200);
let tren2 = new tren_1.Tren("Ave", 300);
let guagua1 = new guagua_1.Guagua("Titsa", 80);
let guagua2 = new guagua_1.Guagua("TransGuaguas", 70);
let bici1 = new bicicleta_1.Bicicleta("Orbea", 40);
let bici2 = new bicicleta_1.Bicicleta("Scott", 50);
let peaton1 = new peaton_1.Peaton("Óscar", 15);
let peaton2 = new peaton_1.Peaton("Irene", 10);
let calle1 = new Street("Calle Castillo", "Santa Cruz", coche1, coche2, moto1, moto2, patinete1, tren1);
console.table(calle1.contadorVehiculos());
calle1.añadirVehiculo(bici1);
console.table(calle1.contadorVehiculos());
calle1.eliminarVehiculo(coche2);
console.table(calle1.ordenarVehiculos());
console.table(calle1.contadorVehiculos());
