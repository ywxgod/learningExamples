import {Matrix} from './Matrix';

export class Transformable{

    constructor(width, height, matrix, owner){
        this.width = width || 0; // Number
        this.height = height || 0; // Number
        this.matrix = matrix || new Matrix(1,0,0,1,0,0); // Matrix
        this.owner = owner; // *
        this.changed = null; // Function
    }

}