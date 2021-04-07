/**
* __Esta es la interfaz genérica isConvertible.__
*/
export interface isConvertible<T> {
    getPrimerSistema(): string;
    getSegundoSistema(): string;
    conversor(valor: T): T;
}
